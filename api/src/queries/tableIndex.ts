export const _getAll = `
    SELECT  id,       
            table_field_id, 
            table_index.constraint,
            table_index.table,
            table_index.column
    FROM    doc.table_index`;
