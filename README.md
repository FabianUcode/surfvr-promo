# SurfVR — Landing Page Promocional (Astro Mobile-First Edition)

> **“Where you look is where you go.”** — Página promocional oficial para jugadores de **SurfVR**, construida con **Astro 5** y diseño **Sea Glass Mobile-First**.

## Características Mobile & Desktop

1. **Experiencia Nativa en Mobile**:
   - **Bottom App Dock (iOS / Android)** con *scroll-spy* automático (*Inicio, Campaña, Playas, Tablas, Descargar*) y soporte completo para `safe-area-inset`.
   - **Detección Inteligente de Dispositivo**: En iPhone/iPad o Android muestra automáticamente una tarjeta destacada recomendada para tu dispositivo, además de la cuadrícula compacta 2×2 de las 4 plataformas.
   - **Carruseles Táctiles con `scroll-snap` e Indicadores**: Desliza horizontalmente las tarjetas de física de olas, las **5 playas reales** y el dock de las **7 tablas** directamente encima de la ficha de estadísticas.
   - **Lightbox Táctil con Gestos Swipe**: Navega entre las capturas del juego deslizando con el dedo o con botones Anterior/Siguiente.
   - **Fondo Oceánico Fijo Optimizado para Safari iOS**: Evita el bug de `background-attachment: fixed` en iOS usando un lienzo fijo dedicado de 120Hz.
2. **Arquitectura Modular en Astro**:
   - `src/data/surfvr.ts`: Datos tipados de playas, tablas, tiendas, capturas y URLs de descarga.
   - `src/components/Navbar.astro`: Barra superior flotante *Sea Glass*, cajón móvil animado y dock inferior.
   - `src/components/DownloadGrid.astro`: Cuadrícula multiplataforma (*Windows `.exe`, Mac App Store, iPhone App Store, Android `.apk`*).
   - `src/pages/index.astro`: Página principal y motor reactivo ligero.

## Comandos

```bash
npm install
npm run dev      # Servidor de desarrollo local
npm run build    # Compila el sitio estático en dist/
npm run preview  # Previsualiza la compilación de producción
```

## Despliegue en Vercel

Vercel detecta **Astro** automáticamente (`astro build` → directorio `dist`). Solo importa el repositorio `FabianUcode/surfvr-promo` y haz clic en **Deploy**.
