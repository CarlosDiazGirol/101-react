## Instalación

``` bash
npm create vite@latest
```
Si no funciona correctamente

``` bash
npm create vite@latest mi-app -- --template react
```

## Qué es React

React es una librería de JavaScript para construir interfaces de usuario a partir de componentes reutilizables. Permite dividir una aplicación en piezas pequeñas e independientes, cada una con su propia lógica y su propia vista.

## Por qué existe React

React surge para facilitar la creación de interfaces complejas que cambian con frecuencia. En lugar de manipular el DOM manualmente cada vez que cambia un dato, React actualiza la interfaz a partir del estado y vuelve más predecible el desarrollo de aplicaciones interactivas.

## Conceptos clave:

- PWA: aplicación web que puede comportarse como una app instalable, con mejoras como trabajo offline, icono en el dispositivo o mejor experiencia móvil.

- SPA: aplicación de una sola página. El navegador no recarga documentos completos en cada cambio de vista, sino que actualiza partes de la interfaz.

- Virtual DOM: representación virtual del DOM que React usa para comparar cambios y actualizar solo lo necesario en pantalla.

- Key: valor único que React usa en listas para identificar cada elemento renderizado y actualizarlo correctamente.

- Diferencia entre framework y librería: una librería resuelve una parte concreta del problema y tú decides cuándo usarla; un framework marca una estructura más cerrada y suele dirigir más el flujo de la aplicación.

- Props: datos que un componente padre pasa a un componente hijo.

- Children: contenido que se pasa entre la etiqueta de apertura y cierre de un componente.

- Programación declarativa vs imperativa: en declarativa describes qué quieres renderizar según el estado; en imperativa indicas paso a paso cómo modificar la interfaz.

- Componentización: división de la interfaz en componentes pequeños, reutilizables y fáciles de mantener.

- Estado: datos internos de un componente que, al cambiar, provocan un nuevo render. En este proyecto se usa con `useState`.

- Strict Mode: herramienta de desarrollo de React que ayuda a detectar prácticas problemáticas, efectos no seguros y comportamientos antiguos. No afecta a producción, pero en desarrollo fuerza comprobaciones extra.

- Eventos: funciones que responden a acciones del usuario, como escribir en un input o pulsar un botón.

- Renderizado de listas: técnica para pintar varios elementos a partir de un array usando `map`.

- Layout: estructura común de la app, por ejemplo cabecera, contenido y pie.
