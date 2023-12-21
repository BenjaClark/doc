import prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-sql";
import { Pool } from "pg";
import { dataJSON } from "@/data/tables";

interface tableData {
  id: string;
  name: string;
  description: string;
  column_name: string;
}

interface ColumnData {
  table_name: string;
  column_name: string;
  data_type: string;
  character_maximum_length: number | null;
  is_nullable: string;
  column_default: string | null;
  column_key: string;
  extra: string;
  constraint_name: string | null;
  referenced_table_name: string | null;
  referenced_column_name: string | null;
}

const data: ColumnData[] = dataJSON;

const Home = ({ content }: any) => {
  prism.languages.javascript = prism.languages.js;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export async function getStaticProps() {
  createTables();
  const contentHtml = "Llenando tablas...";
  return {
    props: {
      content: contentHtml,
    },
  };
}

const pool = new Pool({
  user: "postgres",
  host: "138.197.7.205",
  database: "test",
  password: "P0rt4lF1rm4$",
  port: 5432,
});

// Objeto para almacenar la estructura de las tablas
const tables: { [tableName: string]: string[] } = {};

// Recorrer datos
for (const column of data) {
  const {
    table_name,
    column_name,
    data_type,
    character_maximum_length,
    is_nullable,
    column_default,
    column_key,
    extra,
    constraint_name,
    referenced_table_name,
    referenced_column_name,
  } = column;

  // Verificar si la tabla ya está en el objeto 'tables'
  if (!tables[table_name]) {
    // Crear un nuevo arreglo para las columnas
    tables[table_name] = [];
  }
}

async function createTable(tableName: string) {
  const createTableSQL = `INSERT INTO doc.table (name) VALUES ('${tableName}') RETURNING id;`;
  try {
    const client = await pool.connect();
    const result = await client.query(createTableSQL);
    const insertedId = result.rows[0].id;
    console.log(`Tabla ${tableName} creada con éxito`);
    client.release();
    return insertedId;
  } catch (error) {
    console.error(`Error al crear la tabla ${tableName}: ${error}`);
    return undefined;
  }
}

async function createTableField(tableId: string, columnData: ColumnData) {
  const {
    column_name,
    data_type,
    character_maximum_length,
    is_nullable,
    column_default,
    column_key,
    extra,
  } = columnData;

  const createTableFieldSQL = `
    INSERT INTO doc.table_field (
      table_id,
      name,
      type,
      length,
      "default",
      key,
      extra
    ) VALUES (
      '${tableId}',
      '${column_name}',
      '${data_type}',
      ${character_maximum_length || "NULL"},
      ${column_default ? `'${column_default}'` : "NULL"},
      '${column_key}',
      '${extra}'
    ) RETURNING id;
  `;
  try {
    const client = await pool.connect();
    const result = await client.query(createTableFieldSQL);

    if (result.rows && result.rows[0]) {
      const insertedId = result.rows[0].id;
      console.log(`Datos insertados en doc.table_field con éxito`);
      return insertedId;
    } else {
      console.error(
        "Error al insertar en doc.table_field: No se devolvieron filas"
      );
    }
    client.release();
  } catch (error) {
    console.error(`Error al insertar en doc.table_field: ${error}`);
  }
}

async function createTableIndex(tableFieldId: string, columnData: ColumnData) {
  const { constraint_name, referenced_table_name, referenced_column_name } =
    columnData;

  const createTableIndexSQL = `
    INSERT INTO doc.table_index (
      table_field_id,
      "constraint",
      "table",
      "column"
      ) VALUES (
        '${tableFieldId}',
        '${constraint_name}',
      '${referenced_table_name}',
      '${referenced_column_name}'
    );
  `;

  try {
    const client = await pool.connect();
    await client.query(createTableIndexSQL);
    console.log(`Datos insertados en doc.table_index con éxito`);
    client.release();
  } catch (error) {
    console.error(`Error al insertar en doc.table_index: ${error}`);
  }
}

// Recorrer el objeto 'tables' y crear las tablas
async function createTables() {
  for (const tableName in tables) {
    if (Object.prototype.hasOwnProperty.call(tables, tableName)) {
      const tableId = await createTable(tableName);
      if (tableId !== undefined) {
        const columnsForTable = data.filter(
          (column) => column.table_name === tableName
        );
        if (columnsForTable.length > 0) {
          for (const columnData of columnsForTable) {
            const tableFieldId = await createTableField(tableId, columnData);
            if (tableFieldId !== undefined) {
              if (columnData.constraint_name !== null) {
                await createTableIndex(tableFieldId, columnData);
              } else {
                console.log("el campo constraint_name = null");
              }
            }
          }
        } else {
          console.error(`No se encontraron datos para la tabla ${tableName}`);
        }
      }
    }
  }
}
export default Home;
