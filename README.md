# Portfolio — Lautaro Desouches

Código fuente del portafolio personal de Lautaro Desouches. Arquitectura web moderna orientada a máximo rendimiento (Lighthouse 100/100), accesibilidad WCAG y cero JavaScript innecesario en cliente.

## 🚀 Stack Tecnológico

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / Architecture of Islands)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Estilos**: CSS3 Puro & CSS Modules con convención BEM
- **Animaciones**: [GSAP 3](https://greensock.com/gsap/) (ScrollTrigger)
- **Iconografía**: [Lucide Astro](https://lucide.dev/)
- **Tipografías**: Self-hosted locales (Clash Display, General Sans, JetBrains Mono)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js 20+
- [pnpm](https://pnpm.io/)

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/lautarodesouches/lautarodesouches-com.git
cd lautarodesouches-com
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Iniciar el servidor de desarrollo:
```bash
pnpm dev
```

4. Construir para producción:
```bash
pnpm build
```

5. Previsualizar la build de producción:
```bash
pnpm preview
```

## 📜 Scripts Disponibles

- `pnpm dev`: Inicia el servidor local de desarrollo.
- `pnpm build`: Genera la compilación estática de producción en `dist/`.
- `pnpm preview`: Sirve localmente el directorio `dist/`.
- `pnpm check`: Ejecuta la verificación estricta de tipos con TypeScript (`tsc --noEmit`).

## 📂 Estructura del Proyecto

```
├── public/              # Tipografías WOFF2, capturas de proyectos y assets estáticos
│   ├── fonts/
│   └── projects/
├── src/
│   ├── components/      # Componentes UI reutilizables
│   ├── data/            # Fuente de verdad de datos estructurados (portfolio.data.ts)
│   ├── layouts/         # Layouts base (BaseLayout.astro)
│   ├── pages/           # Rutas estáticas (index.astro)
│   └── styles/          # Variables, reset y estilos globales (global.css)
├── master-profile.json  # Datos maestros de trayectoria y perfil profesional
└── astro.config.mjs     # Configuración de Astro e integraciones
```

---

Desarrollado por [Lautaro Desouches](https://lautarodesouches.com).
