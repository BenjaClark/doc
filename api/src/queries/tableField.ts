export const _getAll = `
    SELECT  id,       
            table_id, 
            name,
            type,
            length,
            "default",
            key,
            extra,
            description
    FROM    doc.table_field`;
