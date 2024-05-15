***Objetivo:** Practicar con el uso básico de npm (Node Package Manager) en el desarrollo de aplicaciones Node.js. 
Esto incluye aprender a instalar y gestionar paquetes, crear scripts personalizados.***

## Instalación de un paquete:

**1. Instala el paquete lodash utilizando npm en tu proyecto.**
Importa el módulo lodash en un archivo JavaScript y usa alguna de sus funciones, como _.shuffle para mezclar 
un array.

**2. Creación de un script de inicio:**
Crea un archivo index.js en tu proyecto.
Utiliza npm para crear un script de inicio en tu archivo package.json que ejecute node index.js.
En index.js, escribe un programa simple que muestre un mensaje en la consola al ejecutar el script.

**3. Gestión de dependencias:**
Crea un nuevo proyecto npm utilizando npm init e instala el paquete express.
Crea un servidor básico usando Express que responda con un mensaje simple al acceder a la ruta raíz.

**4. Uso de scripts personalizados:**
Agrega un script personalizado en tu package.json que inicie el servidor creado en el ejercicio anterior.
Utiliza npm para ejecutar este script personalizado desde la línea de comandos.

**5. Instalación global de un paquete:**
Instala globalmente el paquete nodemon utilizando npm.
Crea un script en tu package.json que utilice nodemon para ejecutar tu archivo index.js y reinicie 
automáticamente cuando hagas cambios en el código.