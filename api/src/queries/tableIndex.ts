export const _getAll = `
    SELECT  id,       
            table_field_id, 
            "constraint",
            "table",
            "column"
    FROM    doc.table_index`;
