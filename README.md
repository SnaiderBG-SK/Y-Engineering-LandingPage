# Resumen Landing Page Y Engineering

Este reporte presenta el desarrollo de una landing page diseñada con **Next.js 14.1.4**, que ofrece una experiencia de usuario fluida y eficiente. La interfaz está construida utilizando **Ant Design** como biblioteca de componentes, lo que permite una presentación moderna y adaptable. Para los estilos, se ha implementado **Tailwind CSS**, que proporciona flexibilidad y control en la personalización del diseño.

Para la gestión de correos electrónicos, se implementó **Nodemailer**, facilitando el envío de notificaciones y comunicaciones a los usuarios. En cuanto a la gestión de datos, se utiliza **Supabase** como base de datos, proporcionando una solución robusta y escalable para almacenar y recuperar información de manera efectiva.

Con el objetivo de optimizar la carga y el rendimiento de la página, todas las imágenes han sido convertidas al formato **WebP**, lo que reduce el tamaño de los archivos sin sacrificar la calidad visual.

Este documento servirá como guía para comprender la estructura del proyecto, las funcionalidades implementadas y los servicios integrados, así como para facilitar futuras actualizaciones y el mantenimiento del sitio.

# Estructura del Proyecto

La estructura del proyecto se organiza de la siguiente manera:

- **node_modules**: Contiene todas las dependencias del proyecto instaladas a través de npm, que son necesarias para el funcionamiento del proyecto.

- **.next**: Este directorio es creado automáticamente por Next.js y contiene archivos de construcción y caché para optimizar el rendimiento del sitio.

- **public**: Aquí se almacenan los archivos estáticos que se pueden servir directamente, como imágenes y el favicon del sitio.

- **src**: Esta carpeta contiene el código fuente del proyecto y se divide en varias subcarpetas importantes:

  - **app**: Almacena las páginas de la aplicación. Incluye el archivo `layout.tsx` que define la estructura base de las páginas y el archivo `page.tsx`, que representa la página principal.

  - **api**: Contiene las funciones que manejan las llamadas a las APIs, permitiendo la interacción entre el cliente y el servidor.

  - **components**: Aquí se encuentran los componentes reutilizables de la interfaz de usuario, facilitando la creación de una experiencia de usuario consistente.

  - **css**: Incluye archivos CSS adicionales que se utilizan para aplicar estilos personalizados a la aplicación.

  - **data**: Contiene archivos que pueden incluir datos estáticos o configuraciones necesarias para el funcionamiento de la aplicación.

  - **interfaces**: Define las interfaces TypeScript que estructuran los tipos de datos utilizados en la aplicación, mejorando la robustez del código.

  - **layout**: Incluye componentes o archivos relacionados con el diseño general de la aplicación.

  - **services**: Almacena la lógica relacionada con la comunicación con servicios externos, como la gestión de datos y correos electrónicos.

  - **utils**: Contiene funciones de utilidad y scripts que pueden ser utilizados en diferentes partes de la aplicación. Dentro de `utils`, se encuentra la carpeta `supabase`, que incluye archivos específicos para la integración con Supabase, así como `emailTemplates.ts`, `FormRules.ts`, y `Metadata.ts`, que ayudan a estructurar la lógica y datos relacionados con el correo y formularios.

- **Archivos raíz**: Incluyen archivos de configuración como `package.json`, que maneja las dependencias del proyecto, y otros archivos de configuración para ESLint, TypeScript y Tailwind CSS, que ayudan a mantener el código limpio y organizado.

```
/
├── node_modules/
├── .next/
├── public/
└── src/
    ├── app/
    │   ├── api/
    │   └── (pages)/
    ├── components/
    ├── css/
    ├── data/
    ├── interfaces/
    ├── layout/
    ├── services/
    └── utils/
```

# Framework utilizado: NextJS

**Next.js** es un framework de desarrollo de aplicaciones web basado en React, diseñado para facilitar la creación de aplicaciones y sitios web optimizados. Proporciona características avanzadas como el renderizado del lado del servidor (SSR) y la generación de sitios estáticos (SSG), lo que mejora el rendimiento y la SEO de las aplicaciones.

Entre sus principales beneficios se incluyen:

- **Renderizado Híbrido**: Permite combinar el renderizado del lado del servidor y el del lado del cliente, lo que mejora la velocidad de carga y la experiencia del usuario.

- **Rutas Automáticas**: Next.js simplifica la creación de rutas mediante su sistema de archivos, permitiendo a los desarrolladores enfocarse en la lógica de la aplicación en lugar de en la configuración de rutas.

- **Soporte para API**: Facilita la creación de API utilizando funciones serverless, lo que permite la implementación de lógica del lado del servidor sin necesidad de una configuración compleja.

- **Optimización de Imágenes**: Incluye características de optimización automática para imágenes, lo que ayuda a mejorar la velocidad de carga y la eficiencia.

En resumen, Next.js es una herramienta poderosa que simplifica el desarrollo web moderno, proporcionando un conjunto de funcionalidades que permiten crear aplicaciones rápidas, eficientes y fáciles de mantener.

# Librerías importantes

## Ant Design

**Ant Design** es una biblioteca de componentes de interfaz de usuario diseñada para crear aplicaciones web con una estética moderna y coherente. Desarrollada por Alibaba, ofrece un conjunto completo de componentes listos para usar, lo que acelera el proceso de desarrollo. Entre sus características destacan:

- **Diseño de Interfaz Coherente**: Proporciona directrices de diseño y estilos consistentes que ayudan a mantener la uniformidad en toda la aplicación.

- **Componentes Ricos**: Incluye una amplia variedad de componentes, como formularios, tablas, modales y botones, que son altamente personalizables y fáciles de integrar.

- **Experiencia de Usuario Mejorada**: Los componentes están optimizados para ofrecer una interacción fluida y rápida, lo que mejora la experiencia del usuario final.

En resumen, Ant Design es ideal para desarrolladores que buscan crear aplicaciones web con una apariencia profesional y funcionalidad robusta sin tener que diseñar cada componente desde cero.

## Tailwind CSS

**Tailwind CSS** es un framework de diseño de CSS de utilidad primero, que permite a los desarrolladores crear interfaces personalizadas de manera rápida y eficiente. A diferencia de otros frameworks que proporcionan estilos predefinidos, Tailwind permite una mayor flexibilidad en el diseño. Algunas de sus características incluyen:

- **Clases de Utilidad**: Ofrece una amplia gama de clases de utilidad que pueden combinarse para crear diseños únicos sin necesidad de escribir CSS adicional.

- **Personalización**: Facilita la personalización a través de un archivo de configuración, permitiendo a los desarrolladores ajustar colores, tamaños y otros estilos según sus necesidades.

- **Responsive Design**: Incluye herramientas integradas para crear diseños responsivos fácilmente, lo que garantiza que las aplicaciones se vean bien en todos los dispositivos.

En resumen, Tailwind CSS es perfecto para aquellos que buscan un enfoque más flexible y centrado en la utilidad para el desarrollo de estilos, permitiendo una personalización rápida y sencilla.

## Nodemailer

**Nodemailer** es un módulo para Node.js que permite enviar correos electrónicos de manera sencilla y eficiente. Es ampliamente utilizado en aplicaciones web para la gestión de notificaciones y comunicaciones. Algunas de sus características más destacadas son:

- **Fácil de Usar**: Proporciona una API simple que permite enviar correos electrónicos con solo unas pocas líneas de código.

- **Soporte para Diferentes Transportes**: Permite utilizar varios servicios de transporte de correo, como SMTP, y se integra fácilmente con proveedores de correo populares como Gmail, SendGrid y otros.

- **Manejo de Archivos Adjuntos**: Facilita el envío de correos electrónicos con archivos adjuntos, lo que lo hace útil para aplicaciones que necesitan enviar documentos o imágenes.

En resumen, Nodemailer es una solución robusta y flexible para la gestión de correos electrónicos en aplicaciones Node.js, ideal para desarrolladores que buscan implementar funcionalidades de mailing de forma rápida y eficaz.

# Descripción de las Funcionalidades

La landing page desarrollada presenta las siguientes funcionalidades:

## Visualización de Información

La página se encarga de mostrar de manera dinámica la información almacenada en Supabase. Cada vez que un usuario accede a la página, se realiza una consulta a la base de datos para obtener y mostrar los datos relevantes en la interfaz.

## Sección de Contacto

La landing page incluye una sección de contacto que permite a los usuarios enviar mensajes y consultas. Dependiendo del flujo de interacción, esta sección puede gestionar diferentes tipos de correos electrónicos:

- **Bienvenida al Newsletter**: Los usuarios que se suscriben a la lista de correo reciben un correo de bienvenida, informándoles sobre lo que pueden esperar en términos de contenido y actualizaciones.

- **Formulario de Contacto**: Cuando un usuario completa el formulario de contacto, se envía un correo electrónico a la empresa con la información proporcionada, facilitando la comunicación.

- **Acceso al Portafolio**: Los usuarios que solicitan acceder al portafolio de la empresa reciben un correo con detalles y enlaces pertinentes.

## Interfaz Intuitiva

La página está diseñada para ser atractiva y fácil de navegar, asegurando que los visitantes puedan acceder rápidamente a la información deseada.

## Optimización de Imágenes

Todas las imágenes utilizadas en el proyecto están en formato **WebP**, garantizando tiempos de carga más rápidos y una mejor experiencia de usuario.

En resumen, la landing page se centra en la presentación efectiva de información y en facilitar la comunicación a través de la sección de contacto, sin la necesidad de autenticación o autorización de usuarios.

# Integración de Servicios Externos

## Newsletter

El proyecto integra **Beehiiv** como servicio de newsletter, facilitando a los usuarios la suscripción a actualizaciones y contenido relevante de la empresa. La empresa contratante ya contaba con este servicio, lo que permitió una integración sencilla y efectiva en la landing page. Las características de esta integración incluyen:

- **Formulario de Suscripción**: En la sección del footer, los usuarios pueden llenar un formulario para expresar su interés en unirse al newsletter.

- **Redirección a Beehiiv**: Al enviar el formulario, la página web redirige automáticamente a los usuarios a la plataforma de Beehiiv, donde pueden completar el proceso de suscripción. Esto asegura que los usuarios se añadan a la lista de correo de manera eficiente, aprovechando las funcionalidades que ofrece Beehiiv para la gestión de newsletters.

- **Facilidad de Uso**: Esta integración permite una experiencia fluida para el usuario, minimizando la fricción en el proceso de suscripción al newsletter y asegurando que puedan acceder a la información y actualizaciones de manera sencilla.

## Hosting

El sitio web está alojado en **Netlify**, una plataforma de despliegue y gestión de aplicaciones web que permite a los desarrolladores implementar sitios estáticos y aplicaciones frontend de manera rápida y eficiente. Algunas de las características clave de Netlify incluyen:

- **Despliegue Continuo**: Netlify permite la integración con repositorios de Git, lo que facilita el proceso de despliegue continuo. Cada vez que se realiza un cambio en la rama asignada del repositorio (como `main` o `master`), Netlify detecta automáticamente la actualización y vuelve a compilar el sitio web. Esto garantiza que la versión más reciente del código esté siempre disponible para los usuarios.

- **Configuración Sencilla**: La configuración de un sitio en Netlify es intuitiva y rápida. Los desarrolladores pueden conectar su repositorio de GitHub, GitLab o Bitbucket, y configurar las opciones de despliegue en pocos pasos.

- **Funciones Adicionales**: Además del despliegue, Netlify ofrece características como gestión de formularios, redirecciones, funciones serverless y optimización automática de imágenes, lo que permite a los desarrolladores agregar funcionalidad adicional sin complicaciones.

- **Escalabilidad y Rendimiento**: Netlify proporciona un CDN (Content Delivery Network) integrado que distribuye el contenido a nivel global, mejorando la velocidad de carga del sitio web y asegurando una experiencia de usuario fluida.

## Base de datos

El proyecto utiliza **Supabase** como su solución de base de datos, aprovechando las diversas facilidades que este servicio ofrece para la creación y gestión de bases de datos SQL. Algunas de las características más destacadas de Supabase incluyen:

- **Generación Automática de Endpoints API**: Supabase genera automáticamente endpoints API RESTful para cada tabla creada en la base de datos. Esto permite una interacción sencilla y directa con los datos sin necesidad de escribir código adicional para la gestión de las operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

- **Interfaz de Dashboard Intuitiva**: Supabase proporciona un dashboard web donde los desarrolladores pueden gestionar la base de datos de manera visual. Desde este dashboard, es posible crear y editar tablas, insertar datos y realizar consultas SQL, facilitando el manejo de la información.

- **Autenticación y Seguridad**: Aunque el proyecto actual no incluye autenticación, Supabase ofrece herramientas de autenticación listas para usar, lo que permite implementar funciones de acceso y control de usuarios en el futuro. También proporciona características de seguridad como la gestión de roles y permisos para asegurar que solo los usuarios autorizados puedan acceder a ciertos datos.

- **Integración de Funciones en Tiempo Real**: Supabase permite la suscripción a eventos en tiempo real, lo que significa que los cambios en la base de datos pueden reflejarse instantáneamente en la interfaz del usuario sin necesidad de recargar la página.

- **Escalabilidad y Rendimiento**: Como una solución basada en PostgreSQL, Supabase garantiza un alto rendimiento y escalabilidad, lo que lo hace adecuado para aplicaciones que requieren manejar grandes volúmenes de datos.

- **Facilidad de Integración**: Supabase se integra fácilmente con otras tecnologías y frameworks, lo que lo convierte en una opción versátil para desarrolladores que trabajan en aplicaciones modernas.

# Estructura de Tablas

La base de datos está organizada en varias tablas, cada una diseñada para almacenar diferentes tipos de información relevante para la landing page. A continuación, se describen las tablas observadas:

- **about_information**: Almacena información relacionada con la sección "Acerca de" de la landing page, posiblemente describiendo la misión, visión o historia de la empresa.

- **contact_information**: Contiene datos de contacto, como direcciones, números de teléfono o correos electrónicos, que permiten a los usuarios ponerse en contacto con la empresa.

- **counters**: Utilizada para llevar un registro de métricas o estadísticas importantes que pueden ser mostradas en la página, como la cantidad de usuarios, visitas o proyectos.

- **faq**: Almacena preguntas frecuentes que ayudan a los usuarios a encontrar respuestas a sus inquietudes comunes, mejorando la experiencia del usuario.

- **home_information**: Contiene información que corresponde a la sección principal de la página de inicio, mostrando contenido destacado o mensajes clave para los visitantes.

- **languages**: Almacena los idiomas soportados por el proyecto, permitiendo una posible implementación de opciones de localización para usuarios de diferentes regiones.

- **pages**: Registra las diferentes páginas disponibles dentro del proyecto, facilitando la navegación y estructuración del contenido.

- **portfolio_projects**: Contiene información sobre los proyectos del portafolio de la empresa, mostrando ejemplos del trabajo realizado y testimonios de clientes.

- **reviews**: Almacena reseñas o testimonios de clientes, proporcionando prueba social y fomentando la confianza en los visitantes.

- **service_sections**: Contiene secciones que describen los servicios ofrecidos por la empresa, posiblemente organizados en categorías.

- **services**: Almacena detalles sobre los servicios específicos que la empresa ofrece, proporcionando información detallada a los usuarios interesados.

- **skills_services_other**: Registra habilidades adicionales o servicios complementarios que la empresa puede ofrecer, enriqueciendo la oferta presentada.

- **team_members**: Almacena información sobre los miembros del equipo, incluyendo sus roles, experiencias y contribuciones, lo que ayuda a humanizar la empresa ante los usuarios.

# Conexión a la Base de Datos

La conexión a la base de datos de Supabase en el proyecto se puede realizar de dos maneras:

## Inicio de Sesión en Supabase

Los desarrolladores pueden iniciar sesión directamente en el dashboard de Supabase para acceder a la base de datos. Este método requiere que el usuario tenga las credenciales adecuadas y los permisos necesarios para realizar acciones en la base de datos, como crear, leer, actualizar o eliminar información. Es útil para la gestión y supervisión directa de los datos desde la interfaz de Supabase.

## Conexión a través de Claves Proporcionadas

El proyecto utiliza dos claves proporcionadas por Supabase para establecer la conexión desde la aplicación. Estas claves son variables de entorno proporcionadas dentro del código del proyecto:

- **NEXT_PUBLIC_SUPABASE_URL**: La URL del proyecto en Supabase.
- **NEXT_PUBLIC_SUPABASE_ANON_KEY**: La clave anónima que permite el acceso a la base de datos.

Este método está diseñado para ser utilizado desde la landing page, permitiendo que la aplicación interactúe con la base de datos sin requerir que los usuarios ingresen credenciales. Sin embargo, este acceso está restringido a operaciones que no comprometan la seguridad, asegurando que solo se pueda realizar la lectura y escritura de datos permitidos.

# Repositorio:
1. **Clona el repositorio (ssh key):**
   ```bash
   git clone git@github.com:HouseCham/Y-Engineering-LandingPage.git
   ```
2. **Navega a la carpeta del proyecto:**
    ```bash
    cd Y-Engineering-LandingPage/
    ```
3. **Instala las librerías (usa npm o yarn):**
    ```bash
    npm install        # Using npm
    yarn install      # Using yarn
    ```
4. **Configura Supabase:**
* Crea un archivo .env.local en la raiz de tu proyecto.
* Agrega las credenciales de Supabase al archivo .env.local:

    ```
    NEXT_PUBLIC_SUPABASE_URL=supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=supabase_anon_key
    ```
6. **Corre la aplicacion en DEV:**
    ```bash
    npm run dev        # Using npm
    yarn dev          # Using yarn
    ```
7. **Compila la aplicación:**
    ```
    npm run build
    ```
8. **Corre la aplicacion localmente simulando producción:**
    ```
    npm run start
    ```

## ¿Tienes alguna pregunta?
Información de contacto del desarrollador:
**Ramsés Ramírez Vallejo**

<img src="https://ramsesramva.com/img/ramsesrmz-bg-white.webp" alt="Y Engineering Logo" width="150">

* Email: <a href="mailto:ramsesramirezvallejo@gmail.com">ramsesramirezvallejo@gmail.com</a>
* Portfolio: <a href="https://ramsesramva.com/" target="_blank">ramsesramva.com</a>
* LinkedIn: <a href="https://www.linkedin.com/in/rams%C3%A9s-ram%C3%ADrez-vallejo-701367229/" target="_blank">Ramsés Ramírez Vallejo</a>
