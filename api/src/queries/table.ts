export const _getAll = `
    SELECT  id,       
            name, 
            description
    FROM    doc.table
    ORDER BY name`;

export const _update = `
    UPDATE doc.table
    SET    description = $2
    WHERE  id = $1`;

export const _getAllTablesData = `
    SELECT  t.id AS table_id,
            t.name AS table_name,
            t.description AS table_description,
            tf.id AS field_id,
            tf.name AS field_name,
            tf.type AS field_type,
            tf.length AS field_length,
            tf.default AS field_default,
            tf.key AS field_key,
            tf.extra AS field_extra,
            ti.id AS index_id,
            ti.constraint AS index_constraint,
            ti.table AS index_table,
            ti.column AS index_column
    FROM    doc.table t
    JOIN    doc.table_field tf ON t.id = tf.table_id
    JOIN    doc.table_index ti ON tf.id = ti.table_field_id
    ORDER BY t.name, tf.name;

`;
