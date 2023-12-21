export const _getAll = `
    SELECT  id,       
            table_id, 
            name,
            type,
            length,
            table_field.default,
            key,
            extra,
            description
    FROM    doc.table_field`;
