
  Nombre de la Tabla: user
  Descripción: null

| Campo          | Tipo | Tamaño    |  Default    | Key | Extra | Description | 
|----------------|------|-----------|-------------|-----|-------|-------------|
|Alter_routine_priv| enum| 1 |false |  | | null |
|Drop_priv| enum| 1 |false |  | | null |
|Index_priv| enum| 1 |false |  | | null |
|password_expired| enum| 1 |false |  | | null |
|Repl_slave_priv| enum| 1 |false |  | | null |
|Update_priv| enum| 1 |false |  | | null |
|Create_priv| enum| 1 |false |  | | null |
|employee_id| varchar| 36 |null |  | | null |
|id| varchar| 36 |null | PRI | | null |
|name| varchar| 150 |null |  | | null |
|ssl_cipher| blob| 65535 |null |  | | null |
|x509_subject| blob| 65535 |null |  | | null |
|createAt| datetime| null |null |  | | null |
|email| varchar| 200 |null |  | | null |
|id| int| null |null | PRI | auto_increment| null |
|max_user_connections| int| null |false |  | | null |
|Process_priv| enum| 1 |false |  | | null |
|ssl_type| enum| 9 |null |  | | null |
|Create_tmp_table_priv| enum| 1 |false |  | | null |
|File_priv| enum| 1 |false |  | | null |
|maternalLastName| varchar| 150 |null |  | | null |
|paternalLastName| varchar| 150 |null |  | | null |
|Show_view_priv| enum| 1 |false |  | | null |
|Create_user_priv| enum| 1 |false |  | | null |
|Execute_priv| enum| 1 |false |  | | null |
|login| varchar| 50 |null |  | | null |
|password_last_changed| timestamp| null |null |  | | null |
|Select_priv| enum| 1 |false |  | | null |
|User| char| 32 |null | PRI | | null |
|Create_routine_priv| enum| 1 |false |  | | null |
|estado| int| null |true |  | | null |
|Lock_tables_priv| enum| 1 |false |  | | null |
|password_lifetime| smallint| null |null |  | | null |
|Show_db_priv| enum| 1 |false |  | | null |
|updateAt| datetime| null |null |  | | null |
|Alter_priv| enum| 1 |false |  | | null |
|Delete_priv| enum| 1 |false |  | | null |
|Host| char| 60 |null | PRI | | null |
|max_updates| int| null |false |  | | null |
|References_priv| enum| 1 |false |  | | null |
|store_id| int| null |null |  | | null |
|Create_tablespace_priv| enum| 1 |false |  | | null |
|Event_priv| enum| 1 |false |  | | null |
|Insert_priv| enum| 1 |false |  | | null |
|password| varchar| 20 |null |  | | null |
|Repl_client_priv| enum| 1 |false |  | | null |
|Trigger_priv| enum| 1 |false |  | | null |
|account_locked| enum| 1 |false |  | | null |
|Create_view_priv| enum| 1 |false |  | | null |
|Grant_priv| enum| 1 |false |  | | null |
|max_questions| int| null |false |  | | null |
|Reload_priv| enum| 1 |false |  | | null |
|Super_priv| enum| 1 |false |  | | null |
|authentication_string| text| 65535 |null |  | | null |
|deleteAt| datetime| null |null |  | | null |
|hash| varchar| 100 |null |  | | null |
|max_connections| int| null |false |  | | null |
|phone| varchar| 20 |null |  | | null |
|Shutdown_priv| enum| 1 |false |  | | null |
|x509_issuer| blob| 65535 |null |  | | null |

Relaciones:  PRIMARY (Host) 
Campos Clave: Host
