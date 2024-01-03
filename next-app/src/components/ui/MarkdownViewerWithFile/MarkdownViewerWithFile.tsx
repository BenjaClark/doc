"use client";

import React, { useEffect, useState } from "react";
import MarkdownViewer from "../MarkdownViewer";

const MarkdownViewerWithFile = () => {
  const [contenidoMarkdown, setContenidoMarkdown] = useState<string>("");

  useEffect(() => {
    const obtenerContenidoMarkdown = async () => {
      try {
        const respuesta = await fetch("/caja.md");
        const contenido = await respuesta.text();
        setContenidoMarkdown(contenido);
      } catch (error) {
        console.error("Error al obtener el archivo Markdown:", error);
      }
    };

    obtenerContenidoMarkdown();
  }, []);
  return (
    <div>
      <h2>MarkdownViewer with File</h2>
      <MarkdownViewer markdownContent={contenidoMarkdown} />
    </div>
  );
};

export default MarkdownViewerWithFile;
