# SurfVR — Landing Page Promocional

> **“Where you look is where you go.”** — Página promocional oficial para jugadores de **SurfVR**.

## Descripción

Landing page **promocional orientada al jugador** de **SurfVR**, construida con estética **Sea Glass** y componentes interactivos ligeros sin dependencias externas, lista para desplegarse en Vercel.

### Características Principales

1. **Hero & Descarga Directa Multiplataforma**: Tarjetas de descarga para **Windows (`.exe`)**, **Mac App Store**, **App Store (iPhone & Visor VR)** y **Android (`.apk`)**, además de visor interactivo de capturas.
2. **Olas Vivas y Física Realista**: Presentación visual de tubos, sistema de calificación de maniobras (0 a 10 puntos) y modo Realidad Virtual.
3. **Modo Campaña (*Hop Into The Beach*) & *Free Surf***: Conmutador interactivo con simulador de desafíos del salvavidas y selector de entrada al agua (*Lineup, Paddle in, Drop in*).
4. **Las 5 Playas Reales**: *Teahupo'o, Pipeline, Nazaré, Chicama y Jeffreys Bay*.
5. **Colección de 7 Tablas**: Inspector interactivo con barras de sensación en el agua y desbloqueo mediante monedas de misión.
6. **Taller de Pintura en Vivo, Editor de Surfista y 4 Tiendas Oficiales**: Personalización interactiva de tabla SVG (*Fill, Rail, Fins*) y galería ampliable.

## Estructura del Proyecto

```text
surfvr-promo/
├── index.html          # Landing page promocional principal
├── styles.css          # Hoja de estilos "Sea Glass" (edición promocional)
├── app.js              # Lógica interactiva y configuración de descargas
├── vercel.json         # Configuración lista para despliegue en Vercel
├── assets/
│   ├── beaches/        # Fotografías de las 5 playas reales
│   ├── fonts/          # Tipografía local Manrope (Medium, SemiBold, Bold, ExtraBold)
│   ├── logos/          # Emblemas oficiales de las 4 Surf Shops
│   └── screenshots/    # Capturas promocionales del juego
└── downloads/          # Carpeta para instaladores directos (.exe / .apk)
```

## Despliegue en Vercel

Este repositorio está listo para importarse directamente en **Vercel** sin configuración adicional (*Framework Preset: Other*, *Output Directory: `.`*).
