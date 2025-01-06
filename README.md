# NexosoftDev Website

## 🚀 Descripción

NexosoftDev es una plataforma web moderna desarrollada con Next.js y NextUI que ofrece soluciones tecnológicas innovadoras para negocios. El sitio presenta una interfaz elegante y responsiva con modo claro/oscuro, animaciones fluidas y navegación optimizada.

## ✨ Características

- 🎨 Diseño responsivo y moderno
- 🌓 Modo claro/oscuro
- 🔄 Navegación del lado del cliente (Client-side navigation)
- 💫 Animaciones con Framer Motion
- 📱 Interfaz móvil adaptativa
- 🎯 Componentes reutilizables
- 🔍 SEO optimizado
- 📧 Sistema de contacto por email
- 🎠 Carrusel interactivo
- 🖼️ Galería de proyectos

## 🛠️ Tecnologías

- [Next.js](https://nextjs.org/) - Framework de React
- [NextUI](https://nextui.org/) - Biblioteca de componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Framer Motion](https://www.framer.com/motion/) - Biblioteca de animaciones
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript tipado
- [Nodemailer](https://nodemailer.com/) - Módulo para envío de emails
- [Handlebars](https://handlebarsjs.com/) - Motor de plantillas para emails

## 📦 Estructura del Proyecto

### 📂 Páginas (`/pages`)

- `index.tsx` - Página principal
- `nosotros/index.tsx` - Página Acerca de Nosotros
- `proyectos/index.tsx` - Página de Proyectos
- `api/sendEmail.ts` - Endpoint para envío de emails

### 🧩 Componentes (`/components`)

#### Componentes Principales
- `Navbar.tsx` - Barra de navegación principal
- `Footer.tsx` - Pie de página
- `ComponenteTitulo.tsx` - Sección principal de la página de inicio

#### Secciones
- `Servicios/ComponenteServicios.tsx` - Muestra los servicios ofrecidos
- `Nosotros/ComponenteNosotros.tsx` - Información sobre la empresa
- `Proyectos/ComponenteProyectos.tsx` - Galería de proyectos
- `Elegirnos/ComponenteElegirnos.tsx` - Razones para elegir NexosoftDev
- `Contacto/ComponenteFormulario.tsx` - Formulario de contacto

#### Utilidades
- `Animacion/ComponenteAnimacion.tsx` - Componente HOC para animaciones
- `Carrusel/ComponenteCarrusel.tsx` - Carrusel interactivo
- `ThemeSwitch.tsx` - Selector de tema claro/oscuro

### 🛠️ Utilidades (`/utils`)

- `proyectos.ts` - Datos de proyectos
- `servicios.ts` - Información de servicios
- `elegirnos.ts` - Datos para la sección "Por qué elegirnos"
- `icons/index.tsx` - Íconos del sistema

### 📧 Plantillas de Email (`/templates`)

- `correo_mio.hbs` - Plantilla para notificaciones internas
- `correo_usuario.hbs` - Plantilla para respuestas automáticas

### 🎨 Estilos

- `styles/globals.css` - Estilos globales
- Uso extensivo de Tailwind CSS para estilos en componentes

## 🚀 Características Principales

### Sistema de Temas
- Implementación de modo claro/oscuro
- Transiciones suaves entre temas
- Persistencia de preferencias del usuario

### Animaciones
- Animaciones de entrada y salida con Framer Motion
- Transiciones suaves entre secciones
- Efectos de hover y focus

### Formulario de Contacto
- Validación de campos en tiempo real
- Envío de emails automáticos
- Plantillas HTML personalizadas
- Feedback visual para el usuario

### Carrusel Interactivo
- Navegación manual y automática
- Indicadores de posición
- Transiciones animadas
- Soporte para imágenes y contenido

## 🔧 Configuración

### Requisitos Previos
- Node.js >= 14.x
- npm o yarn
