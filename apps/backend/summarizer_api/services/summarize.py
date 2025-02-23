import logging
import requests
from bs4 import BeautifulSoup
from openai import OpenAI
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
import time

from summarizer_api.models.summarize import SummarizeBody, SummarizeResponse
from summarizer_api.config import config

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36"
}

logger = logging.getLogger(__name__)


class Website:
    def __init__(self, url, use_js=False):
        self.url = url

        if not use_js:
            try:
                self.scrape_with_requests()
                if len(self.text.strip()) < 100:  # fallback if too little content
                    print("[INFO] Falling back to JS-rendered scraping...")
                    self.scrape_with_selenium()
            except Exception as e:
                print("[ERROR] Requests failed, falling back to Selenium:", e)
                self.scrape_with_selenium()
        else:
            self.scrape_with_selenium()

    async def scrape_with_requests(self):
        response = requests.get(self.url, headers=headers)
        soup = BeautifulSoup(response.content, "html.parser")
        self.title = soup.title.string if soup.title else "No title found"
        for irrelevant in soup.body(["script", "style", "img", "input"]):
            irrelevant.decompose()
        self.text = soup.body.get_text(separator="\n", strip=True)

    def scrape_with_selenium(self):
        options = Options()
        options.add_argument("--headless")
        options.add_argument("--no-sandbox")
        options.add_argument("--disable-dev-shm-usage")
        driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()), options=options
        )

        driver.get(self.url)
        time.sleep(5)  # Wait for JS to render

        soup = BeautifulSoup(driver.page_source, "html.parser")
        self.title = soup.title.string if soup.title else "No title found"
        for irrelevant in soup.body(["script", "style", "img", "input"]):
            irrelevant.decompose()
        self.text = soup.body.get_text(separator="\n", strip=True)

        driver.quit()


system_prompt = "You are an assistant that analyzes the contents of a website and provides a short summary, ignoring text that might be navigation related. Respond in markdown."


def user_prompt_for(website):
    user_prompt = f"You are looking at a website titled {website.title}"
    user_prompt += "\nThe contents of this website is as follows; please provide a short summary of this website in markdown. If it includes news or announcements, then summarize these too.\n\n"
    user_prompt += website.text
    return user_prompt


messageTypes = {
    "1": lambda url: [
        {"role": "system", "content": system_prompt},
        {"role": "user", "content": user_prompt_for(url)},
    ],
    "2": lambda url: [
        {"role": "system", "content": [{"type": "text", "text": system_prompt}]},
        {"role": "user", "content": [{"type": "text", "text": user_prompt_for(url)}]},
    ],
}


def summarize_site(base_url, api_key, model_name, prompt):
    client = OpenAI(
        base_url=base_url,
        api_key=api_key,
    )

    logger.info("Created OpenAI client. Waiting for response.")

    response = client.chat.completions.create(
        extra_body={}, model=model_name, messages=prompt
    )

    logger.info("Got response from client.")

    return response.choices[0].message.content


async def summarizeService(body: SummarizeBody) -> SummarizeResponse:
    data = {**body.model_dump()}
    model = data["model"]
    url = data["url"]
    messageType = data["messageType"]

    logger.info(f"Scrapping Site {url}")
    site = Website(url, use_js=True)

    prompt = messageTypes[f"{messageType}"](site)

    logger.info(
        f"Fetching summary for url: {url} - model: {model} - message type: {messageType}"
    )

    summary = summarize_site(
        config.AI_MODEL_BASE_URL, config.AI_MODEL_KEY, model, prompt
    )

    return {"content": summary}
