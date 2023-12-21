# Documentación de la Tabla 'user'

## Descripción

{{description}}

## Estructura de la Tabla 'user'

| id  | name    | paternalLastName | maternalLastName | email            | phone          | store_id | hash   | estado |
| --- | ------- | ---------------- | ---------------- | ---------------- | -------------- | -------- | ------ | ------ |
| 1   | Claudio | Matus            | Alegría          | claudio@matus.cl | +569 9978 1640 | 4        | \*\*\* | 1      |

## Detalles de las Columnas

### id

- **Tipo de Datos:** int (11)
- **Descripción:** Identificador del usuario.

### name

- **Tipo de Datos:** varchar (150)
- **Descripción:** Nombre del usuario.

### paternalLastName

- **Tipo de Datos:** varchar (150)
- **Descripción:** Apellido paterno del usuario.

### maternalLastName

- **Tipo de Datos:** varchar (150)
- **Descripción:** Apellido materno del usuario.

### email

- **Tipo de Datos:** varchar (200)
- **Descripción:** Correo electrónico del usuario, credencial de inicio sesión.

### phone

- **Tipo de Datos:** varchar (20)
- **Descripción:** Numero de teléfono del usuario.

### store_id

- **Tipo de Datos:** int (11)
- **Descripción:** Sucursal a la que pertenece el usuario.

### hash

- **Tipo de Datos:** varchar (100)
- **Descripción:** Contraseña del usuario, credencial de inicio de sesión.

### estado

- **Tipo de Datos:** int (11)
- **Descripción:** Estado actual de este usuario, Activo(1) o Inactivo(0)
