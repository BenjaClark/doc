import fs from "fs";
import path from "path";
import axios from "axios";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-sql";

interface TableData {
  id: string;
  name: string;
  description: string;
}

interface TableFieldData {
  id: string;
  table_id: string;
  name: string;
  type: number;
  length: number;
  default: boolean;
  key: string;
  extra: string;
  description: string;
}

interface TableIndexData {
  id: string;
  table_field_id: string;
  constraint: string;
  table: string;
  column: string;
}

interface CombinedData {
  tableData: TableData;
  fieldData?: TableFieldData;
  indexData?: TableIndexData;
}

const generateMarkdownFile = async (combinedData: CombinedData) => {
  const { tableData, fieldData, indexData } = combinedData;

  let markdownContent = `
  Nombre de la Tabla: ${tableData.name}
  Descripción: ${tableData.description}
`;

  if (fieldData !== undefined) {
    markdownContent += `
| Campo          | Tipo | Tamaño    |  Default    | Key | Extra | Description | 
|----------------|------|-----------|-------------|-----|-------|-------------|
`;
    fieldData.forEach((field) => {
      const {
        name,
        type,
        length,
        default: defaultValue,
        key,
        extra,
        description,
      } = field;
      markdownContent += `|${name}| ${type}| ${length} |${defaultValue} | ${key} | ${extra}| ${description} |\n`;
    });
  }

  if (indexData) {
    const { id, table_field_id, constraint } = indexData;

    // Buscar todos los campos relacionados con este índice
    const camposRelacionados = fieldData?.filter(
      (field) => field.id === table_field_id
    );

    // Agregar relaciones y campos clave para cada campo relacionado
    camposRelacionados.forEach((campoRelacionado) => {
      markdownContent += `
Relaciones:  ${constraint} (${campoRelacionado.name}) 
Campos Clave: ${campoRelacionado.name}
`;
    });
  }
  const markdownPath = path.join(
    process.cwd(),
    "content",
    `${tableData.name}.md`
  );
  fs.writeFileSync(markdownPath, markdownContent, "utf-8");
};

export async function getStaticProps() {
  const apiTablesUrl = "http://localhost:3001/api/table/getAllTable/";
  const apiFieldUrl = "http://localhost:3001/api/table/getAllTableField/";
  const apiIndexUrl = "http://localhost:3001/api/table/getAllTableIndex/";

  try {
    // Extraer datos de la API
    const tableResponse = await axios.get(apiTablesUrl);
    const apiData: TableData[] = tableResponse.data.data;

    const fieldResponse = await axios.get(apiFieldUrl);
    const apiFieldData: TableFieldData[] = fieldResponse.data.data;

    const indexResponse = await axios.get(apiIndexUrl);
    const apiIndexData: TableIndexData[] = indexResponse.data.data;

    // Generar un solo archivo para cada tabla
    apiData.forEach((tableData) => {
      const matchingFieldData = apiFieldData.filter(
        (fieldData) => fieldData.table_id === tableData.id
      );

      let matchingIndexData;

      matchingFieldData.forEach((fieldData) => {
        const foundIndexData = apiIndexData.find(
          (indexData) => indexData.table_field_id === fieldData.id
        );

        if (foundIndexData) {
          matchingIndexData = foundIndexData;
        }
      });

      generateMarkdownFile({
        tableData,
        fieldData: matchingFieldData,
        indexData: matchingIndexData,
      });
    });

    return {
      props: {
        content: "Archivos Markdown generados correctamente",
      },
    };
  } catch (error) {
    console.error("Error fetching data from API", error);
    return {
      props: {
        content: "Error fetching data from API",
      },
    };
  }
}

export default function Home({ content }: any) {
  prism.languages.javascript = prism.languages.js;

  return (
    <div>
      <div>{content}</div>
    </div>
  );
}
