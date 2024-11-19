# Desafío Musache Backend
Configuración de manera local
## Requisitos Previos
- Node.js (versión 14 o superior)
- npm (incluido con Node.js)
- Git

Construido Con 🛠️
- Node.js
- Express.js
## ¿Cómo correr el proyecto en local?

### Clona el repositorio
Usa este comando en tu terminal:
```bash
git clone https://github.com/sangaselu/DesafioMusacheBackEnd.git
```
### Ve al directorio del proyecto
Usa este comando en tu terminal:
```bash
cd DesafioMusacheBackEnd
```
### Instalación de dependecias 🔧
Usa este comando en tu terminal:
```bash
npm install
```
## Configura las variables de entorno ⚙️
El proyecto usa variables de entorno para manejar configuraciones como la URL de la API. Copiar el archivo de ejemplo y crea tu archivo .env:
```bash
DB_HOST=xxxx
DB_USER=xxxx
DB_PASSWORD=xxxx
DB_NAME=xxxx
DB_PORT=xxxx
```
## Levanta el servidor de desarrollo 🚀
```bash
npm run dev
```
Luego se abrirá de manera automática en el localhost con su respectivo puerto permitido

# Base de datos 🔩
Realizada con MYSQL
## Creación de base de datos 🗃️

```bash
CREATE DATABASE musache_db CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE musache_db;
```
## Creación de tabla 🗃️
```bash
CREATE TABLE Resources (
    id INT AUTO_INCREMENT PRIMARY KEY,         
    title VARCHAR(255) NOT NULL,              
    description TEXT NOT NULL,                 
    imageUrl VARCHAR(255) NOT NULL,            
    youtubeUrl VARCHAR(255) DEFAULT NULL,     
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP, 
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);
```
## Ejecución en el proyecto de la base de datos
```bash
 node src/index.js
```
Conexión exitosa 
![image](https://github.com/user-attachments/assets/0f6cb117-7b3e-4168-b26a-c157e682cc01)

# Ejecución de Pruebas 🔩

## Instalar Dependencias 🔧
Instalar Jest
```bash
npm install --save-dev jest
```
Revisar package.json o acualizar con lo siguiente
```bash
npm install --save-dev jest
```
Instalar librería Supertest 
```bash
"scripts": {
  "test": "jest"
}
```
Instalar Babel
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```
## Ejecutar pruebas ⌨️
```bash
npm test
```
![me](resourceApi.test.js-MusachePrueba-Visual-Studio-Code-2024-11-19-14-51-55.gif)

# Despliegue de api en Render on Live
- Crear cuenta o loguearse, de preferencia con github en Render https://dashboard.render.com
- Conectar con el repositorio en especifico para que pueda desplegar correctament y sea más fácil de detectar el commit reciente
- Configurar las variables de entorno para que detecta la base de datos (hostname, host, dbname, pssword), puerto
- Configurar el Build Command para que puede hacer la instalación correspondiente de packages para el proyecto y el Start command, para poder levantar el API.
    En este caso se usará NPM por el gestor que maneja con REACT
Build Command
```Build Command
npm install
```
Start Command
```Build Command
npm start
```
- Configurar el .env creado apuntando hacia el link generado por Render que será consumir la API
- Realizar deploy
![image](https://github.com/user-attachments/assets/400282eb-01ac-4a85-ab24-30c1953d95e1)

Probar en este caso que esté respondiendo correctamente con methods creados que se verá reflejado en la app publicada por parte del front como también su propia ruta

<img width="917" alt="image" src="https://github.com/user-attachments/assets/744766ae-db60-4396-948a-618e7abc7a23">


