### Prueba técnica de Jorge González-Páramo para Armadillo Amarillo

Esta aplicación está creada principalmente con 3 pilares principales: **ExpressJS** para el backend, **Ionic/Angular** para el front, y **SQLite** para crear una pequeña base de datos que pudiera desplegar con el propio backend. También se han consumido varias tazas de café durante el desarrollo de la app, aunque su contribución no se refleja en el código o el package.json. 

## Para usar esta app...

Una vez descargado el repositorio, abrir una terminal para cada subdirectorio (/back y /front). Tras instalar las dependencias con `npm install`, lanzar npm run start en cada una de las terminales. El `start` del directorio de front también abrira automáticamente `http://localhost:4200/` en el navegador predeterminado de tu equipo.

## Librerías adicionales utilizadas

Además de la mencionada SQLite, el backend usa otras librerías comunes en projectos creados con ExpressJS:
- **Cors**, para gestionar mejor el acceso de las peticiones del front al servidor.
- **Axios**, para gestionar las peticiones http a los recursos externos (principalmente, las peticiones a los endpoints de The Movie Database).
- **MD5**, para hashear las contraseñas de los usuarios en el backend.
- **body-parser**, para formatear más cómodamente las respuestas de los servicios.

Para el frontend no he añadido ninguna librería, ya que las dependencias de Ionic y de Angular me ofrecían 'out of the box' todo lo que consideraba necesario para las vistas y componentes del proyecto.

## Preguntas teóricas

1. **¿Cómo podría gestionarse la paginación tanto desde el frontend como desde el backend?**

* En el directorio de back, modificaría en `routes/movies` el servicio `/list` para que aceptase opcionalmente un parámetro page, para poder incluirlo en su petición al final de la url (ejemplo, https://api.themoviedb.org/3/movie/now_playing?api_key={API_KEY}&page=1).
* En front, modificaría el controlador y la template del componente en `src/app/pages/movies-list` para incluir la dependencia IonInfiniteScroll de forma que, al llegar el scroll al final de los resultsados de cada página, el controlador volviese a llamar al servicio `getMoviesList` y concatenar los nuevos resultados con la lista ya existente de pelñiculas. Modificaría, a su vez, este servicio para que pudiese aceptar también el parámetro **page** de forma opcional, para incluirlo en su llamada al backend en caso de recibirlo.

2. **Por defecto, ¿que ocurre en una aplicación Ionic funcionando en un dispositivo Android al pulsar el botón físico de Atrás?**

Hasta la versión 3 de Ionic, el comportamiento por defecto era que la aplicación se cerraba independientemente de la página, componente o modal en la que nos encontrásemos. Este comportamiento se corrigió en versiones posteriores y en la actualidad el botón mencionado retrocede un paso en la navegación por cada click.

3. **¿Cómo podría cerrarse la app con dicho botón?**

En un proyecto que use Cordova o Capacitor, se puede anteponer el comportamiento que deseemos en cada componente importando la dependencia **Platform** de `@ionic/angular` en el controlador y posteriormente, en el constructor, utilizar un código similar a éste:

  import { Subscription } from 'rxjs';
  import { Plugins } from '@capacitor/core';
  const { App } = Plugins;
  export class MyComponent {
    public backButtonSubscription = new Subscription();

    constructor(
      private platform: Platform;
    ) {
      this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(100, () => {
        // Declaramos la función o funciones que queremos que haga
        // nuestro componente cuando detecte que se ha pulsado el botón
         App.exitApp();
        });
    }
  }

  ## Detalles adicionales

  En cuanto a estructura del proyecto, en Ionic me decanto por estas preferencias:
  - **pages**: Todo componente que actúe como vista y tenga su propio `.module`, `.routing-module` o entrada en la lista de rutas del app-routing.module. Me ayuda a identificar y tratar adecuadamente estas vistas principales.
  - **page-components**: Todo componente que pueda extraer para aliviar de carga a una vista o página, pero que solo pueda aparecer en el contexto de dicha página, está incluido en un subdirectorio dentro de cada **page**.
  - **shared-components**: En este directorio alojo cualquier componente que pueda ser reutilizable en diferentes puntos de la app.

  Como preferencoa he implementado también dos **Guards** de Angular para que un usuario no pueda volver a la página de Login sin haber hecho logout expresamente, y para que no pueda accederse a la página de movie-list sin haber hecho login, ni siquiera escribiendo la url de la ruta.



## Modelo entidad-relación

He incluido un png del modelo en la carpeta /assets del directorio de front.


