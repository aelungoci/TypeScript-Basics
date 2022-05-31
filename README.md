# TypeScript

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podremos ejecutar el proyecto de con el siguiente comando:

```
npm start
```
Para que eso funcione, se debe de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitas cambiarlo porque puede que ese puerto ya esté usado, puedes cambiarlo abriendo el ```package.json``` >> scripts. Ahí verás la instrucción que lanza el servidor de desarrollo.

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambia el puerto por el que necesites y listo. (lógicamente graba los cambios antes de ejecutar el ```npm start``` nuevamente)
