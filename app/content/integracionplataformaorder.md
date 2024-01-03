
  Nombre de la Tabla: integracionplataformaorder
  Descripción: null

| Campo          | Tipo | Tamaño    |  Default    | Key | Extra | Description | 
|----------------|------|-----------|-------------|-----|-------|-------------|
|buyerRut| varchar| 10 |null |  | | null |
|productId| varchar| 36 |null |  | | null |
|deliveryDate| datetime| null |null |  | | null |
|productName| varchar| 200 |null |  | | null |
|email| varchar| 150 |null |  | | null |
|sucursalId| int| null |null |  | | null |
|id| bigint| null |null | PRI | auto_increment| null |
|variationId| varchar| 36 |null |  | | null |
|buyerEmail| varchar| 150 |null |  | | null |
|name| varchar| 200 |null |  | | null |
|variationName| varchar| 200 |null |  | | null |
|integrationId| int| null |null |  | | null |
|buyerName| varchar| 100 |null |  | | null |
|orderDetailId| varchar| 36 |null | UNI | | null |
|buyerPhone| varchar| 20 |null |  | | null |
|phone| varchar| 20 |null |  | | null |
|correlativo| int| null |null |  | | null |
|price| int| null |null |  | | null |
|rut| varchar| 10 |null |  | | null |

Relaciones:  integracionplataformaorder_orderDetailId_IDX (orderDetailId) 
Campos Clave: orderDetailId
