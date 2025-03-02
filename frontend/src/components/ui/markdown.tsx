import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownProps {
  content: string;
  className?: string;
}

export default function Markdown({ content, className = "" }: MarkdownProps) {
  return (
    <ReactMarkdown
      className={`prose prose-sm max-w-none ${className}`}
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-2xl font-bold mt-6 mb-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-xl font-bold mt-5 mb-3" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-lg font-bold mt-4 mb-2" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="my-3" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-6 my-3" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-6 my-3" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="my-1" {...props} />
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 py-1 my-3 italic" {...props} />
        ),
        pre: ({ node, ...props }) => (
          <pre className="my-4 rounded-md overflow-auto" {...props} />
        ),
        code: ({ node, inline, className, children, ...props }) => {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={atomDark}
              language={match[1]}
              PreTag="div"
              className="rounded-md"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={`${inline ? "bg-gray-100 rounded px-1 py-0.5" : "block p-2 bg-gray-800 text-white rounded-md"} ${className}`} {...props}>
              {children}
            </code>
          );
        },
        a: ({ node, ...props }) => (
          <a className="text-primary underline" {...props} />
        ),
        table: ({ node, ...props }) => (
          <table className="border-collapse border border-gray-300 my-4" {...props} />
        ),
        th: ({ node, ...props }) => (
          <th className="border border-gray-300 px-4 py-2 bg-gray-100" {...props} />
        ),
        td: ({ node, ...props }) => (
          <td className="border border-gray-300 px-4 py-2" {...props} />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
