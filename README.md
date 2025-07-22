Proyecto Final - API REST con Node.js y Firebase Firestore

Descripción
Esta aplicación es una API REST desarrollada con Node.js que permite gestionar un catálogo de productos almacenados en Firebase Firestore. Utiliza autenticación mediante JWT para proteger las rutas sensibles.

Tecnologías utilizadas
Node.js (ESModules)
Express
Firebase Firestore
JSON Web Tokens (JWT)
dotenv
CORS
body-parser

Requisitos previos

Tener Node.js instalado en tu máquina

Instalación

Clonar el repositorio

Instalar dependencias con npm install

Crear un archivo .env en la raíz del proyecto con las siguientes variables (completá con tus datos):
PORT=3000
FIREBASE_API_KEY=tu_api_key
FIREBASE_AUTH_DOMAIN=tu_auth_domain
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_STORAGE_BUCKET=tu_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
FIREBASE_APP_ID=tu_app_id
JWT_SECRET=tu_clave_secreta_jwt

Uso
Ejecutar la API con npm run start

Rutas públicas
POST /auth/login
Autenticar usuario y recibir token JWT
Body ejemplo:

{
"username": "admin",
"password": "admin123"
}

Rutas protegidas (requieren token JWT en header Authorization con formato Bearer <token>)
GET /api/products - Obtener todos los productos
GET /api/products/:id - Obtener producto por ID
POST /api/products/create - Crear nuevo producto
Body ejemplo:
{
"id": "prod001",
"name": "Guitarra Fender",
"price": 1200,
"description": "Excelente guitarra"
}
DELETE /api/products/:id - Eliminar producto por ID

Usuarios hardcodeados para login

Username: admin / Password: admin123


username: user / Password: user123

Notas

Las rutas protegidas usan middleware JWT para asegurar acceso solo con token válido.

Manejo de errores con códigos HTTP 401, 403, 404, 400 y 500.

Usa Firestore como base de datos NoSQL en la nube.

Contacto
Para dudas o sugerencias, contacta a [juaneze5games@gmail.com]
