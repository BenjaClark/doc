
  Nombre de la Tabla: torta
  Descripción: null

| Campo          | Tipo | Tamaño    |  Default    | Key | Extra | Description | 
|----------------|------|-----------|-------------|-----|-------|-------------|
|imagen| text| 65535 |null |  | | null |
|id| int| null |null | PRI | auto_increment| null |
|combinacion_id| int| null |null |  | | null |
|masaTipo_id| int| null |null | MUL | | null |
|masaSabor_id| int| null |null |  | | null |
|estado| int| null |true |  | | null |
|sabor_id| int| null |null |  | | null |

Relaciones:  torta_masaTipo_id_IDX (sabor_id) 
Campos Clave: sabor_id
