# Desafío Musache Backend

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
