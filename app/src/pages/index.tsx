import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import axios from "axios";
import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-sql";

interface tableData {
  table_id: string;
  table_name: string;
  table_description: string;
  table_field_id: string;
  table_field_name: string;
  table_field_type: number;
  table_field_length: number;
  table_field_default: number;
  table_field_key: string;
  table_field_extra: string;
  table_index_id: string;
  table_index_table: string;
  table_index_column: string;
}

const generateMarkdownFile = async (tableData: tableData) => {
  const {
    table_id,
    table_name,
    table_description,
    table_field_id,
    table_field_name,
    table_field_type,
    table_field_length,
    table_field_default,
    table_field_key,
    table_field_extra,
    table_index_id,
    table_index_table,
    table_index_column,
  } = tableData;

  // Genera el contenido del archivo Markdown
  const markdownContent = `
## Tabla '${table_name}'
${table_id}
#### Descripción

${table_description}

### Estructura de la Tabla '${table_name}'




### Detalles de las Columnas
${table_field_name}
${table_field_type}

`;

  // Define la ruta al archivo Markdown que se va a crear
  const markdownPath = path.join(process.cwd(), "content", `${table_name}.md`);

  // Escribe el contenido en el archivo
  fs.writeFileSync(markdownPath, markdownContent, "utf-8");
};

const Home = ({ content }: any) => {
  prism.languages.javascript = prism.languages.js;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export async function getStaticProps() {
  const apiTableUrl = "http://localhost:3001/api/table/getAllTablesData/";

  try {
    // Extraer datos de la API
    const tableResponse = await axios.get(apiTableUrl);
    if (tableResponse.status === 200) {
      const apiData = tableResponse.data.data;

      // Generar archivos Markdown para cada tabla
      apiData.forEach((tableData) => {
        generateMarkdownFile(tableData);
      });

      // Procesa el Markdown a HTML
      const result = await remark().use(html).process();

      const contentHtml = result.toString();
      return {
        props: {
          content: contentHtml,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data from API");
    return {
      props: {
        content: "Error fetching data from API",
      },
    };
  }
}

export default Home;
