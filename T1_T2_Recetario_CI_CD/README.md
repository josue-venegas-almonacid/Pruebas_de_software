# Nombre del Proyecto

Recetario

# Descripción

El enfoque principal del proyecto se basó en:
- Creación y desarrollo de un aplicación web enfocada a alojar recetas de comida, utilizando AngularJS, NodeJS y MongoDB
- Instalación y configuración de una suite de pruebas unitarias utilizando Jasmine Karma
- Instalación y configuración de una suite de pruebas de aplicación web utilizando Maven, JUnit y Selenium WebDriver
- Instalación y configuración de un entorno CI/CD para el frontend utilizando Jenkins
- Instalación y configuración de un entorno para el despliegue del frontend utilizando XAMPP, Apache HTTP Server
- Instalación y configuración de un túnel inverso para exponer Jenkins utilizando NGRok
- Automatización de JOBS de Jenkins utilizando GitHub Webhooks
- Instalación y configuración de un entorno de monitoreo del backend utilizando PM2

# Herramientas necesarias

Se ha comprobado el correcto funcionamiento del proyecto con las siguientes versiones:

## Desarrollo web (AngularJS, NodeJS)
- Git 2.42.0
- Python 2.7.18
- NodeJS 20.11.1
- NPM 10.2.4
- Visual Studio Code 1.86.2

## Testing (Karma Jasmine, Maven/JUnit/Selenium Web Driver)
- Google Chrome 122.0.6261.70
- Java Runtime Environment (JRE) 8.0.4010.10
- Eclipse IDE for Java Developers 2023-12 4.30.0

## CI/CD
- Java Development Kit (JDK) 11.0.21
- Jenkins 2.440.1
- NGRok 3.6.0
- XAMPP 8.0.30

# Instalación y uso
## Desarrollo aplicación
1. Base de datos

1.1. Cree una base de datos en MongoDB

1.2. Obtenga el Connection String y reemplácelo por el que está en el archivo `index.js` ubicado en la carpeta 'backend'

2. Backend
   
2.1. Acceda a la carpeta 'backend'
   
2.2. Instale las librerías necesarias con el comando `npm install`

2.3. Inicie el entorno de desarrollo con el comando `node index.js`. Podrá acceder al recurso en `localhost:8081`

3. Frontend
   
3.1. Acceda a la carpeta 'frontend'

3.2. Instale las librerías necesarias con el comando `npm install`

3.3. Inicie el entorno de desarrollo con el comando `npm start`. Podrá acceder al recurso en `localhost:4200`

## Testing unitario con Karma Jasmine
1. Asegúrese de tener instalado Google Chrome
2. Acceda a la carpeta 'frontend'
3. Instale las librerías necesarias con el comando `npm install`
4. Ejecute la suite de pruebas con el comando `npm run test`. Se abrirá una ventana en su navegador para mostrar los resultados
5. Si desea generar el reporte de cobertura, puede hacerlo con el comando `npm run test-coverage`. El reporte se guardará en la carpeta 'frontend/coverage'

## Testing de aplicación web con Maven, JUnit y Selenium WebDriver
1. Asegúrese de tener instalado Java Runtime Environment (JRE) o Java Development Kit (JDK) y haber agregado la carpeta raíz (por ejemplo C:\Program Files\Java\jdk-11) como JAVA_HOME en las variables del sistema, y haber agregado la carpeta raíz y la carpeta 'bin' (por ejemplo C:\Program Files\Java\jdk-11\bin) al PATH en las variables del sistema
2. Para ejecutar las pruebas puede:
   
2.1. Usar su IDE favorito de Java, abrir la carpeta 'selenium_project/RecetarioTest' como un proyecto tipo Maven y ejecutar el archivo `TestSelenium.java`, ubicado en la carpeta 'selenium_project\RecetarioTest\src\test\java\com\pruebasdesoftware' como un JUnit Test

2.2. Descargar los binarios de Apache Maven, agregar la carpeta 'bin' al PATH en las variables del sistema, acceder a la carpeta 'selenium_project/RecetarioTest' y ejecutar el comando `mvn clean test`

Notas:
- Asegúrese de que Apache HTTP Server `localhost:80` y el backend `localhost:8081` estén encendidos cada vez que desee ejecutar las pruebas, de lo contrario, el testing de Selenium fallará
   
## Entorno CI/CD con Jenkins y XAMPP, Apache HTTP Server
1. Asegúrese de tener instalado Java Runtime Environment (JRE) o Java Development Kit (JDK) y haber agregado la carpeta raíz (por ejemplo C:\Program Files\Java\jdk-11) como JAVA_HOME en las variables del sistema, y haber agregado la carpeta raíz y la carpeta 'bin' (por ejemplo C:\Program Files\Java\jdk-11\bin) al PATH en las variables del sistema
2. Asegúrese de tener instalado Jenkins. Para este proyecto se ha instalado de forma local en el puerto 8080. Podrá acceder al recurso en `localhost:8080`
3. Asegúrese de tener instalado Apache HTTP Server. Para este proyecto se ha instalado XAMPP, que configura automáticamente Apache HTTP Server en el puerto 80 y así desplegar los binarios del frontend. Podrá acceder al recurso en `localhost:80`
4. Instale los plugins de Jenkins para el testing: Maven Integration Plugin Version 3.23 y Pipeline Maven Integration Plugin Version 1376.v18876d10ce9c y luego vaya a Configuración de Herramientas de Jenkins para activar la instalación automática de Maven 3.9.6 para cada JOB
5. Instale los plugins de Jenkins para el despliegue: NodeJS Plugin Version 1.6.1 y GitHub
7. Cree un JOB de tipo pipeline en Jenkins, y conéctelo al repositorio en GitHub (por ejemplo https://github.com/josue-venegas-almonacid/Pruebas_de_software.git) usando un GitHub Access Token. No olvide apuntar a la rama `*/main` y al script `T1_T2_Recetario_CI_CD/Jenkinsfile`
8. Ejecute el JOB cada vez que quiera desplegar el frontend en el directorio de Apache HTTP Server

Notas:
- Asegúrese de que Apache HTTP Server `localhost:80` y el backend `localhost:8081` estén encendidos cada vez que desee ejecutar el JOB, de lo contrario, el testing de Selenium fallará

## Automatización en la ejecución del JOB con GitHub Webhooks
1. Debido a que Jenkins está instalado de forma local, hay que exponerlo a Internet para que GitHub Webhooks pueda enviarle las notificaciones de los eventos, puede hacer esto utilizando NGRok
2. Asegúrese de tener instalado NGRok y haber agregado la carpeta raíz al PATH en las variables del sistema
3. Ejecute el comando `ngrok http 8080`. NGRok creará una URL pública apuntando a Jenkins
4. Vaya al repositorio en GitHub y cree un Webhook apuntando a `URL_pública/github-webhook/` (por ejemplo https://dd322040.ngrok-free.app/github-webhook/), con `Content type` `application/json`
5. Vaya a Jenkins y active la opción `GitHub hook trigger for GITScm polling` en la configuración del JOB creado en la sección anterior
6. Cada vez que haga un push a su repositorio en GitHub, GitHub Webhooks enviará una señal a Jenkins para ejecutar el JOB

Notas:
- Asegúrese de mantener abierta la terminal en la que ejecutó NGRok, de lo contrario, la URL pública apuntando a Jenkins expirará y GitHub Webhooks no podrá comunicarse con Jenkins
- Asegúrese de que Apache HTTP Server `localhost:80` y el backend `localhost:8081` estén encendidos cada vez realice un push al repositorio, de lo contrario, el testing de Selenium fallará

## Monitoreo de backend con PM2
1. Acceda a la carpeta 'backend'
2. Instale las librerías necesarias con el comando `npm install`
3. Instale PM2 con el comando `npm install pm2 -g`
4. Inicie PM2 con el comando `pm2 start index.js`
5. Empiece a monitorear el backend con `pm2 monit`. Se abrirá una ventana en su navegador para crear un Bucket de monitoreo
6. Si accede al frontend desde el entorno de desarrollo `localhost:4200` o desde los binarios alojados en Apache HTTP Server `localhost:80` podrá ver que la aplicación se está conectando correctamente al backend. Esto es porque PM2 está ejecutando el backend en segundo plano. Puede acceder al recurso en `localhost:8081`
7. Cada vez que haga un push a su repositorio en GitHub, podrá notar una alerta en la interfaz de monitoreo indicando la última versión. Como el backend monitoreado es el mismo que el backend del repositorio en GitHub, sólo deberá reiniciar la aplicación presionando en 'Restart apps'
8. Si desea ver los logs generados por el backend, puede hacerlo mediante el botón 'Show logs'

## Disponibilizar frontend y backend en todo momento
1. Active la opción para iniciar XAMPP y APACHE HTTP Server automáticamente al iniciar el sistema operativo
2. Active el incio automático de PM2 con el comando `pm2 startup`
3. El frontend estará disponible en `localhost:80` y el backend estará disponible en `localhost:8081`

## Disponibilizar Jenkins en todo momento
1. Asegúrese de que el servicio de Jenkins se ejecute automáticamente al iniciar el sistema operativo
2. Si desea mantener la ejecución automática del JOB por medio de GitHub Webhooks, deberá crear un script que ejecute NGRok automáticamente al iniciar el sistema operativo y actualizar la URL guardada en el GitHub Webhook por la recién generada
