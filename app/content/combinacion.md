
  Nombre de la Tabla: combinacion
  Descripción: null

| Campo          | Tipo | Tamaño    |  Default    | Key | Extra | Description | 
|----------------|------|-----------|-------------|-----|-------|-------------|
|estado| int| null |true |  | | null |
|crema_id| int| null |null | MUL | | null |
|id| int| null |null | PRI | auto_increment| null |
|extra_id| int| null |null |  | | null |
|descripcion| text| 65535 |null |  | | null |
|masaTipo_id| int| null |null | MUL | | null |
|relleno_id| int| null |null | MUL | | null |
|masaSabor_id| int| null |null | MUL | | null |
|nombre| varchar| 200 |null |  | | null |

Relaciones:  fk_combinacion_masaSabor (masaSabor_id) 
Campos Clave: masaSabor_id
