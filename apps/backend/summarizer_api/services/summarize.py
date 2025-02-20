from summarizer_api.models.summarize import SummarizeBody, SummarizeResponse


async def summarizeService(body: SummarizeBody) -> SummarizeResponse:
    data = {**body.model_dump()}
    url = data["url"]
    model = data["model"]
    messageType = data["messageType"]

    print(url, model, messageType)

    return {"summary": "This is a summary of the text."}
