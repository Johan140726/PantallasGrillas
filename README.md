# PantallasGrillas#  Spotify Player - Reverse Engineering

##  Descripción del proyecto

Este proyecto corresponde a una actividad de **Reverse Engineering**, cuyo objetivo es analizar una interfaz existente y realizar una maquetación similar utilizando los componentes y herramientas proporcionados por **Ionic y Angular**.

Para esta actividad se tomó como referencia la pantalla de reproducción de música de **Spotify**.

La interfaz fue dividida mediante el sistema de grillas de Ionic, utilizando principalmente:

- `ion-content`
- `ion-grid`
- `ion-row`
- `ion-col`
- `ion-icon`
- `[ngStyle]`

El objetivo principal no es replicar la funcionalidad completa de Spotify, sino demostrar el uso correcto de **layouts, filas, columnas y estilos dinámicos** para construir una interfaz organizada y adaptable.

---

#  Tecnologías utilizadas

- Ionic
- Angular
- TypeScript
- HTML
- SCSS
- Ionic Grid System

---

#  Pantalla maquetada

La pantalla desarrollada representa un reproductor de música inspirado en Spotify.

Está compuesta por:

1. Encabezado del reproductor.
2. Carátula del álbum.
3. Información de la canción.
4. Barra de progreso.
5. Controles de reproducción.
6. Acciones adicionales.

Toda la interfaz se encuentra organizada dentro de un `ion-grid`.

---

#  Layout principal

Para contener la interfaz se utilizó:

```html
<ion-content>
```

`ion-content` funciona como el contenedor principal de la pantalla.

Dentro de este componente se encuentra la grilla:

```html
<ion-grid class="spotify-grid">
```

La estructura general es:

```text
ION-CONTENT
│
└── ION-GRID
    │
    ├── ROW 1 → Encabezado
    ├── ROW 2 → Carátula
    ├── ROW 3 → Información de la canción
    ├── ROW 4 → Barra de progreso
    ├── ROW 5 → Controles
    └── ROW 6 → Acciones inferiores
```

---

#  Sistema de grillas

Ionic utiliza un sistema de grillas basado en **12 columnas**.

Para organizar la interfaz se utilizaron:

```html
<ion-grid>
<ion-row>
<ion-col>
```

Cada fila se distribuyó teniendo en cuenta que la suma de sus columnas corresponde a **12**.

---

## Fila 1 - Encabezado

La primera fila corresponde al encabezado del reproductor.

```text
┌────────┬────────────────────────┬────────┐
│ COL 2  │         COL 8          │ COL 2  │
│        │                         │        │
│   ↓    │ PLAYING FROM LIBRARY   │   •••  │
│        │      Liked Songs       │        │
└────────┴────────────────────────┴────────┘

              2 + 8 + 2 = 12
```

Estructura:

```html
<ion-row>
  <ion-col size="2"></ion-col>
  <ion-col size="8"></ion-col>
  <ion-col size="2"></ion-col>
</ion-row>
```

La primera columna contiene el icono para minimizar el reproductor.

La columna central contiene la información de la lista desde la cual se reproduce la canción.

La última columna contiene el menú de opciones.

---

## Fila 2 - Carátula

La segunda fila contiene la carátula de la canción.

```text
┌──────────────────────────────────────────┐
│                                          │
│                 COL 12                   │
│                                          │
│                CARÁTULA                  │
│                                          │
│                                          │
└──────────────────────────────────────────┘

                     12
```

Estructura:

```html
<ion-row>
  <ion-col size="12">
    <!-- Carátula -->
  </ion-col>
</ion-row>
```

Se utiliza una sola columna de tamaño `12` porque la carátula ocupa todo el espacio disponible de la fila.

---

## Fila 3 - Información de la canción

Esta fila contiene el nombre de la canción, el artista y el botón de favorito.

```text
┌────────────────────────────────┬─────────┐
│             COL 10             │  COL 2  │
│                                │         │
│ Nombre de la canción           │    ♡    │
│ Nombre del artista             │         │
│                                │         │
└────────────────────────────────┴─────────┘

                  10 + 2 = 12
```

Estructura:

```html
<ion-row>
  <ion-col size="10">
    <!-- Información de la canción -->
  </ion-col>

  <ion-col size="2">
    <!-- Favorito -->
  </ion-col>
</ion-row>
```

Se asignaron `10` columnas a la información porque es el elemento que necesita mayor espacio.

Las `2` columnas restantes contienen el icono de favorito.

---

## Fila 4 - Barra de progreso

Esta fila contiene el progreso de reproducción y los tiempos de la canción.

```text
┌──────────────────────────────────────────┐
│                 COL 12                   │
│                                          │
│ ━━━━━━━━━━━━━──────────────              │
│                                          │
│ 0:00                                3:45 │
└──────────────────────────────────────────┘
```

Estructura:

```html
<ion-row>
  <ion-col size="12">
    <!-- Barra de progreso -->
  </ion-col>
</ion-row>
```

La barra utiliza las `12` columnas disponibles para aprovechar el ancho del reproductor.

---

## Fila 5 - Controles de reproducción

La quinta fila contiene los controles principales del reproductor.

```text
┌───────┬───────┬────────────┬───────┬───────┐
│ COL 2 │ COL 2 │   COL 4    │ COL 2 │ COL 2 │
│       │       │            │       │       │
│  🔀   │  ⏮   │     ▶      │  ⏭   │  🔁   │
│       │       │            │       │       │
└───────┴───────┴────────────┴───────┴───────┘

              2 + 2 + 4 + 2 + 2 = 12
```

Estructura:

```html
<ion-row>
  <ion-col size="2"></ion-col>
  <ion-col size="2"></ion-col>
  <ion-col size="4"></ion-col>
  <ion-col size="2"></ion-col>
  <ion-col size="2"></ion-col>
</ion-row>
```

Los controles laterales utilizan `2` columnas cada uno.

El botón principal de reproducción utiliza `4` columnas para darle mayor protagonismo y mantenerlo centrado.

---

## Fila 6 - Acciones inferiores

Finalmente se creó una fila para las opciones adicionales.

```text
┌──────────────────────┬──────────────────────┐
│        COL 6         │        COL 6         │
│                      │                      │
│          📱          │         ⇧  ☷         │
│                      │                      │
└──────────────────────┴──────────────────────┘

                       6 + 6 = 12
```

Estructura:

```html
<ion-row>
  <ion-col size="6"></ion-col>
  <ion-col size="6"></ion-col>
</ion-row>
```

La primera mitad contiene la opción relacionada con dispositivos.

La segunda mitad contiene las opciones de compartir y lista de reproducción.

---

#  Representación general de la maquetación

La distribución completa de la pantalla puede representarse de la siguiente manera:

```text
┌──────────────────────────────────────────────┐
│                 ION-CONTENT                  │
│                                              │
│  ┌──────────────── ION-GRID ──────────────┐  │
│  │                                        │  │
│  │ ROW 1 - ENCABEZADO                     │  │
│  │ ┌──────┬────────────────────┬──────┐   │  │
│  │ │COL 2 │       COL 8        │COL 2 │   │  │
│  │ └──────┴────────────────────┴──────┘   │  │
│  │                                        │  │
│  │ ROW 2 - CARÁTULA                       │  │
│  │ ┌──────────────────────────────────┐   │  │
│  │ │              COL 12              │   │  │
│  │ │                                  │   │  │
│  │ │            CARÁTULA              │   │  │
│  │ │                                  │   │  │
│  │ └──────────────────────────────────┘   │  │
│  │                                        │  │
│  │ ROW 3 - INFORMACIÓN                    │  │
│  │ ┌──────────────────────────┬───────┐   │  │
│  │ │          COL 10          │ COL 2 │   │  │
│  │ │ Canción / Artista        │   ♡   │   │  │
│  │ └──────────────────────────┴───────┘   │  │
│  │                                        │  │
│  │ ROW 4 - PROGRESO                       │  │
│  │ ┌──────────────────────────────────┐   │  │
│  │ │              COL 12              │   │  │
│  │ │  ━━━━━━━━━──────────             │   │  │
│  │ │  0:00                       3:45 │   │  │
│  │ └──────────────────────────────────┘   │  │
│  │                                        │  │
│  │ ROW 5 - CONTROLES                      │  │
│  │ ┌────┬────┬────────┬────┬────┐        │  │
│  │ │  2 │  2 │   4    │  2 │  2 │        │  │
│  │ │ 🔀 │ ⏮ │   ▶    │ ⏭ │ 🔁 │        │  │
│  │ └────┴────┴────────┴────┴────┘        │  │
│  │                                        │  │
│  │ ROW 6 - ACCIONES                       │  │
│  │ ┌─────────────────┬────────────────┐   │  │
│  │ │      COL 6      │     COL 6      │   │  │
│  │ │        📱       │       ⇧ ☷      │   │  │
│  │ └─────────────────┴────────────────┘   │  │
│  │                                        │  │
│  └────────────────────────────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

---

#  Uso de ngStyle

Para cumplir con el uso de estilos dinámicos de Angular se utilizó la directiva:

```html
[ngStyle]
```

Los estilos se definieron desde el archivo:

```text
home.page.ts
```

Por ejemplo:

```typescript
estiloFondo = {
  '--background':
    'linear-gradient(180deg, #477b56 0%, #17291d 35%, #090909 68%, #000000 100%)'
};

estiloCaratula = {
  'background':
    'linear-gradient(135deg, #55d769 0%, #1eaa42 100%)'
};
```

Posteriormente se aplicaron desde el HTML.

### Fondo del reproductor

```html
<ion-content
  [fullscreen]="true"
  [ngStyle]="estiloFondo">
```

### Carátula

```html
<div
  class="album-cover"
  [ngStyle]="estiloCaratula">
```

De esta manera, Angular permite controlar estilos visuales desde el componente TypeScript sin tener que definirlos directamente como estilos estáticos en el HTML.

---

#  Estilos SCSS

El archivo:

```text
home.page.scss
```

se utiliza para definir la apariencia visual de la interfaz, incluyendo:

- Tamaños.
- Márgenes.
- Espaciados.
- Tipografía.
- Alineación.
- Tamaño de iconos.
- Botón de reproducción.
- Barra de progreso.
- Diseño responsive.

La estructura principal de la interfaz se realiza mediante las grillas de Ionic, mientras que SCSS se utiliza para complementar su presentación visual.

---

#  Diseño responsive

La aplicación cuenta con ajustes mediante `@media` para adaptar algunos elementos cuando el ancho disponible de la pantalla disminuye.

Ejemplo:

```scss
@media (max-width: 400px) {
  .spotify-grid {
    padding: 15px 18px;
  }

  .cover-row {
    margin-top: 30px;
  }

  .song-row {
    margin-top: 25px;
  }

  .play-button {
    width: 58px;
    height: 58px;
  }
}
```

Esto permite mantener una distribución adecuada en diferentes tamaños de pantalla.

---

#  Estructura principal del proyecto

```text
SpotifyScreen/
│
├── src/
│   ├── app/
│   │   │
│   │   ├── home/
│   │   │   ├── home-routing.module.ts
│   │   │   ├── home.module.ts
│   │   │   ├── home.page.html
│   │   │   ├── home.page.scss
│   │   │   ├── home.page.spec.ts
│   │   │   └── home.page.ts
│   │   │
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   │
│   ├── assets/
│   ├── theme/
│   └── global.scss
│
├── angular.json
├── capacitor.config.ts
├── ionic.config.json
├── package.json
└── README.md
```

---

#  Ejecución del proyecto

Primero se deben instalar las dependencias:

```bash
npm install
```

Posteriormente se puede ejecutar el proyecto mediante:

```bash
ionic serve
```

La aplicación estará disponible normalmente en:

```text
http://localhost:8100
```

---

#  Resultado

Como resultado se obtuvo una interfaz inspirada en el reproductor de Spotify utilizando el sistema de grillas proporcionado por Ionic.

La pantalla demuestra la utilización de:

- Layout con `ion-content`.
- `ion-grid` como contenedor de la grilla.
- `ion-row` para dividir la interfaz en filas.
- `ion-col` para distribuir los elementos utilizando el sistema de 12 columnas.
- `ion-icon` para representar los diferentes controles.
- `[ngStyle]` para aplicar estilos dinámicos desde Angular.
- SCSS para complementar la presentación visual.
- Diseño responsive para adaptar la interfaz.

---

#  Integrantes

- Danna Valentina Pulido
- Johan Stivens Rojas
- Leidy Vanessa Zambrano
- Edison Fabian Garzon




