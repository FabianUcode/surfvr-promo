/**
 * ============================================================================
 * CONFIGURACIÓN DE URLS DE DESCARGA Y DATOS DE SURFVR PROMO
 * Edita las URLs en `DOWNLOADS` para conectar tus tiendas o instaladores.
 * ============================================================================
 */

export interface DownloadPlatform {
  key: 'windows' | 'macos' | 'iphone' | 'android';
  url: string;
  filename?: string;
  external?: boolean;
  smallLabel: string;
  name: string;
  tag: string;
  theme: 'win' | 'apple' | 'apk';
  mobilePriority?: boolean;
}

export const DOWNLOADS: Record<string, DownloadPlatform> = {
  iphone: {
    key: 'iphone',
    url: 'https://apps.apple.com/app/surfvr-ios',
    external: true,
    smallLabel: 'Download on the',
    name: 'App Store',
    tag: 'iPhone & Visor VR',
    theme: 'apple',
    mobilePriority: true
  },
  android: {
    key: 'android',
    url: '/downloads/SurfVR-Android.apk',
    filename: 'SurfVR-Android.apk',
    smallLabel: 'Descarga Directa',
    name: 'Available on Android',
    tag: 'Instalador .APK',
    theme: 'apk',
    mobilePriority: true
  },
  windows: {
    key: 'windows',
    url: '/downloads/SurfVR-Windows-x64.exe',
    filename: 'SurfVR-Windows-x64.exe',
    smallLabel: 'Descargar para PC',
    name: 'Windows',
    tag: 'Instalador .EXE',
    theme: 'win'
  },
  macos: {
    key: 'macos',
    url: 'https://apps.apple.com/app/surfvr-macos',
    external: true,
    smallLabel: 'Download on the',
    name: 'Mac App Store',
    tag: 'macOS Oficial',
    theme: 'apple'
  }
};

export const HERO_SHOTS = [
  {
    src: '/assets/screenshots/barrel_ride.png',
    label: 'Corriendo el Tubo',
    topHud: 'THIS WAVE · EXCELLENT 8.10',
    botHud: '∿ En el Tubo · 32 km/h'
  },
  {
    src: '/assets/screenshots/hop_missions.png',
    label: 'Aventura en la Playa',
    topHud: 'MODO CAMPAÑA EN LA PLAYA',
    botHud: 'Misiones del Salvavidas · +$100'
  },
  {
    src: '/assets/screenshots/beach_selector.png',
    label: '5 Playas Reales',
    topHud: '5 PLAYAS LEGENDARIAS',
    botHud: 'Pronóstico del Mar en Vivo'
  },
  {
    src: '/assets/screenshots/tricks_score.png',
    label: 'Aéreos y Trucos',
    topHud: '360 AIR ^^^^',
    botHud: 'Calificación WSL · 8.10 pts'
  }
];

export const HIGHLIGHTS = [
  {
    img: '/assets/screenshots/whitewater_tube.png',
    caption: 'Olas vivas con tubos profundos y espuma blanca',
    badge: 'HIDRODINÁMICA REAL',
    badgeClass: 'badge-aqua',
    title: 'Lee la ola y entra al tubo',
    desc: 'Rema para atrapar la serie, sumérgete haciendo "el pato" (duck dive) por debajo de las olas que rompen frente a ti y deslízate dentro de tubos huecos mientras buscas la salida a toda velocidad.'
  },
  {
    img: '/assets/screenshots/tricks_score.png',
    caption: 'Giros en el labio, tubos y aéreos 360 calificados del 0 al 10',
    badge: 'MANIOBRAS Y PUNTUACIÓN',
    badgeClass: 'badge-sun',
    title: 'Encadena giros, tubos y aéreos 360°',
    desc: 'Genera velocidad subiendo y bajando por la pared, marca cortes potentes en la cresta y despega por encima del labio. Cada ola recibe una puntuación de 0 a 10 puntos como en el tour mundial.'
  },
  {
    img: '/assets/screenshots/main_menu.png',
    caption: 'Juega en pantalla o con visor de Realidad Virtual',
    badge: 'PANTALLA O REALIDAD VIRTUAL',
    badgeClass: 'badge-mint',
    title: '“Donde miras es hacia donde vas”',
    desc: 'Disfruta en primera o tercera persona desde tu móvil, PC o Mac, o coloca tu teléfono en un visor VR para sentirte dentro del agua dirigiendo la tabla con el movimiento natural de tu cabeza.'
  }
];

export const BEACHES = [
  {
    name: "Teahupo'o",
    country: 'Tahití, Polinesia Francesa',
    photo: '/assets/beaches/teahupoo.png',
    size: '3.5 – 13 pies',
    dir: '← Izquierda',
    iconic: true,
    cond: 'VERY GOOD',
    pips: 4,
    color: '#38BDF8',
    desc: 'Una ola poderosa y hueca sobre arrecife de coral cristalino, famosa por sus tubos intensos.'
  },
  {
    name: 'Pipeline',
    country: 'Oahu, Hawaii',
    photo: '/assets/beaches/pipeline.png',
    size: '3 – 12 pies',
    dir: '← Izquierda',
    iconic: true,
    cond: 'EPIC',
    pips: 5,
    color: '#2DD4BF',
    desc: 'El templo mundial del tubo. Olas cilíndricas perfectas que rompen cerca de la arena dorada.'
  },
  {
    name: 'Nazaré',
    country: 'Praia do Norte, Portugal',
    photo: '/assets/beaches/nazare.png',
    size: 'Hasta 40 pies (12 m)',
    dir: '↔ Ambos lados',
    iconic: true,
    cond: 'GOOD',
    pips: 4,
    color: '#34D399',
    desc: 'El cañón submarino de las olas gigantes. Paredes descomunales para poner a prueba tu valor.'
  },
  {
    name: 'Chicama',
    country: 'Puerto Malabrigo, Perú',
    photo: '/assets/beaches/chicama.png',
    size: '2.5 – 7 pies',
    dir: '← Izquierda',
    iconic: false,
    cond: 'VERY GOOD',
    pips: 4,
    color: '#38BDF8',
    desc: 'La izquierda más larga del mundo: paredes nobles e interminables para encadenar decenas de giros.'
  },
  {
    name: 'Jeffreys Bay',
    country: 'Supertubes, Sudáfrica',
    photo: '/assets/beaches/jbay.png',
    size: '3 – 9 pies',
    dir: '→ Derecha',
    iconic: false,
    cond: 'GOOD',
    pips: 4,
    color: '#34D399',
    desc: 'Una derecha larga, rápida y perfecta que te permite volar por la línea y buscar tubos largos.'
  }
];

export const BOARDS = [
  {
    name: 'FUNBOARD',
    measures: '7\'10" · 45 Litros',
    price: 0,
    story: 'Tu primera tabla fiel: estable, fácil de remar y muy noble para atrapar olas temprano y fluir con suavidad.',
    badges: ['Fácil de Remar', 'Estable', 'Todo Terreno'],
    stats: [3, 4, 4, 3, 4],
    where: 'Incluida gratis desde tu primera sesión.',
    fill: '#FFF9D2',
    rail: '#5CE6E0'
  },
  {
    name: 'SOFTBOARD',
    measures: '8\'0" · 75 Litros',
    price: 150,
    story: 'Tabla de espuma de gran flotación. Ideal para aprender sin esfuerzo y aprovechar hasta las olas más pequeñas.',
    badges: ['Máxima Flotación', 'Aprendizaje', 'Olas Pequeñas'],
    stats: [2, 5, 5, 1, 5],
    where: 'Consíguela en las tiendas de Pipeline y Chicama.',
    fill: '#FFE07D',
    rail: '#FF9E3D'
  },
  {
    name: 'FISH',
    measures: '5\'7" · 33 Litros',
    price: 300,
    story: 'Corta, ancha y con cola de golondrina. Acelera rapidísimo en secciones planas y es súper divertida de girar.',
    badges: ['Cola Golondrina', 'Muy Rápida', 'Ágil'],
    stats: [4, 3, 4, 2, 5],
    where: 'Consíguela en las tiendas de Chicama y Jeffreys Bay.',
    fill: '#7CE8A2',
    rail: '#1FB5C1'
  },
  {
    name: 'TWIN',
    measures: '6\'4" · 27 Litros',
    price: 350,
    story: 'Diseñada con dos quillas para soltar la cola con facilidad y dibujar giros libres con sensación de skate en el agua.',
    badges: ['Dos Quillas', 'Giros Libres', 'Estilo Fluido'],
    stats: [5, 2, 3, 2, 4],
    where: 'Consíguela en las tiendas de Pipeline y Jeffreys Bay.',
    fill: '#FF9CEE',
    rail: '#C59BFF'
  },
  {
    name: 'SHORTBOARD',
    measures: '6\'11" · 28 Litros',
    price: 400,
    story: 'La tabla de competición por excelencia: afilada, reactiva y explosiva para tubos profundos y aéreos 360°.',
    badges: ['Alto Rendimiento', 'Tubos y Aéreos', 'Agresiva'],
    stats: [5, 2, 2, 4, 2],
    where: 'Consíguela en Pipeline, Nazaré y Jeffreys Bay.',
    fill: '#FFFFFF',
    rail: '#FF6B5B'
  },
  {
    name: 'LONGBOARD',
    measures: '9\'0" · 65 Litros',
    price: 500,
    story: 'Un clásico de 9 pies con una sola quilla central. Planeo infinito para recorrer olas largas con elegancia.',
    badges: ['Clásica 9 Pies', 'Planeo Infinito', 'Olas Largas'],
    stats: [2, 5, 5, 2, 5],
    where: 'Exclusiva de la tienda de Chicama (Perú).',
    fill: '#F5E9D3',
    rail: '#6478C8'
  },
  {
    name: 'GUN',
    measures: '9\'6" · 50 Litros',
    price: 900,
    story: 'El cañón definitivo para olas gigantes. Larga y firme para mantener el control bajando paredes de 40 pies en Nazaré.',
    badges: ['Olas Gigantes', 'Máximo Control', 'Especial Nazaré'],
    stats: [2, 4, 4, 5, 1],
    where: 'Exclusiva de la tienda de Nazaré (Portugal).',
    fill: '#26303D',
    rail: '#FFC65A'
  }
];

export const SHOPS = [
  {
    logo: '/assets/logos/logo_pipeline.png',
    badge: 'Hawaii · Tendero: Kai',
    name: 'North Shore Surf Shack',
    desc: 'Hogar de la Shortboard, la Twin y las prendas exclusivas de Pipeline.'
  },
  {
    logo: '/assets/logos/logo_nazare.png',
    badge: 'Portugal · Tendero: Tiago',
    name: 'Praia do Norte Big Wave',
    desc: 'Consigue aquí la legendaria tabla Gun para olas gigantes y el neopreno de tormenta.'
  },
  {
    logo: '/assets/logos/logo_chicama.png',
    badge: 'Perú · Tendero: Lucho',
    name: 'Malabrigo Surf Club',
    desc: 'El club de la izquierda más larga del mundo, con el Longboard clásico y la rápida Fish.'
  },
  {
    logo: '/assets/logos/logo_jbay.png',
    badge: 'Sudáfrica · Tendero: Sipho',
    name: 'Supertubes Board Room',
    desc: 'Tablas veloces para derechas perfectas y trajes con el emblema oficial de Jeffreys Bay.'
  }
];

export const GALLERY_SHOTS = [
  { src: '/assets/screenshots/barrel_ride.png', label: 'Corriendo el Tubo', caption: 'Dentro del tubo a 32 km/h' },
  { src: '/assets/screenshots/beach_selector.png', label: 'Las 5 Playas Reales', caption: 'Selecciona entre las 5 playas reales del mundo' },
  { src: '/assets/screenshots/hop_missions.png', label: 'Modo Campaña en la Playa', caption: 'Modo Campaña: camina hacia la torre del salvavidas' },
  { src: '/assets/screenshots/board_picker.png', label: 'Las 7 Tablas', caption: 'Showroom con las 7 tablas del juego' },
  { src: '/assets/screenshots/board_showroom.png', label: 'Personalización de Tablas', caption: 'Taller de pintura para personalizar tus tablas' },
  { src: '/assets/screenshots/character_editor.png', label: 'Editor de Surfista', caption: 'Editor completo de surfista y trajes' },
  { src: '/assets/screenshots/surf_shop.png', label: 'Tiendas en la Playa', caption: 'Interior de la tienda North Shore Surf Shack' },
  { src: '/assets/screenshots/tricks_score.png', label: 'Aéreos y Puntuación', caption: 'Aéreos 360 y calificación de olas' }
];

export const PAINT_COLORS = [
  '#FFFFFF', '#F5E9D3', '#FFE07D', '#FFAA4C', '#FF6B5B', '#FF9CEE', '#C59BFF',
  '#6478C8', '#6CB4FF', '#BCE6FF', '#5CE6E0', '#7CE8A2', '#A8B2BD', '#26303D'
];
