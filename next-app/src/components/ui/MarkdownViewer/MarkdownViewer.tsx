import React, { useEffect, useState } from "react";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";

interface MarkdownViewerProps {
  markdownContent: string;
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdownContent }) => {
  const [renderedMarkdown, setRenderedMarkdown] = useState<JSX.Element | null>(
    null
  );

  useEffect(() => {
    const renderMarkdown = async () => {
      try {
        const result = await unified()
          .use(rehypeParse)
          .use(rehypeReact, {
            createElement: React.createElement,
            components: {
              table: (props) => (
                <table className="table">{props.children}</table>
              ),
              thead: (props) => <thead>{props.children}</thead>,
              tbody: (props) => <tbody>{props.children}</tbody>,
              tr: (props) => <tr>{props.children}</tr>,
              th: ({ isHeader, align, children }) =>
                isHeader ? (
                  <th style={{ textAlign: align }}>{children}</th>
                ) : (
                  <td style={{ textAlign: align }}>{children}</td>
                ),
            },
          })
          .process(markdownContent);

        setRenderedMarkdown(React.createElement(result.result as any));
      } catch (error) {
        console.error("Error al renderizar el Markdown:", error);
      }
    };

    renderMarkdown();
  }, [markdownContent]);

  return <div>{renderedMarkdown}</div>;
};

export default MarkdownViewer;
