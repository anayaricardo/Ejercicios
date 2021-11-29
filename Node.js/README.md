# Node.js

![node](./img/logo.png)

Node.js® es un entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.

Nodejs es una aplicación escrita en C++ que embebe el motor V8 en su código. Por lo tanto puede interpretar código javascript, 'traducirlo' a lenguaje de máquina y finalmente ejecutarlo. Pero eso no es lo mejor de Nodejs, lo mejor es que el creador agregó algunas features que no están definidos en el estándar. Javascript originalmente estaba diseñado para correr en el browser, o sea que nadie pensó en que pudiera leer archivos, o conectarse a una base de datos, etc... Justamente estas features son las que Nodejs agrega usando código C++. O sea, crea nuevas funciones Javascript que envuelven en realidad funciones de C++, como por ejemplo la función de leer un archivo del filesystem.

Esto hace que Nodejs sea muy poderoso. Gracias a esto, Nodejs tienen todas las features necesarias para poder manejar un servidor.

* Maneras de organizar nuestro código para que sea reusable
* Poder leer y escribir archivos (input/output)
* Leer y escribir en Bases de Datos
* Poder enviar y recibir datos de internet
* Poder interpretar los formatos estándares
* Alguna forma de manejas procesos que lleven mucho tiempo, asíncronos.

## Instalas Nodejs

Para instalar node vamos a ir [acá](http://node.js.org/en/) y seguir las instrucciones según el sistema operativo que estés usando.
 
Una vez terminada la instalación, podemos probar si funciona correctamente escribiendo el siguiente comando en la consola:

```
node -v
```

Si el resultado es algo similar a `v6.3.1` entonces habremos instalado Node de manera correcta

## Core libraries

Nodejs cuenta con un set de librerias (les vamos a llamar módulos) que vienen por defecto en la instalación. Básicamente es código escrito para hacer tareas muy comunes. Podemos separar estas librerias en las que están escritas en _C++_ y las que son nativas o están escritas en _javascript_.