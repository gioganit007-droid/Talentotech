# TALENTO TECH ORIENTE - Página Web

Página web moderna y elegante para mostrar cursos y bootcamps de TALENTO TECH ORIENTE, con integración de videos de Cloudinary y Google Maps en tiempo real.

## 🚀 Características

- ✅ Diseño moderno con colores elegantes y vibrantes
- ✅ Información detallada de cursos online y presenciales
- ✅ Duración horaria, días y tipos de jornadas de clases
- ✅ Videos integrados con Cloudinary para cada curso
- ✅ Ubicación en tiempo real con Google Maps
- ✅ Filtros interactivos por modalidad (Online/Presencial)
- ✅ Formulario de contacto funcional
- ✅ Diseño completamente responsive

## 📋 Requisitos Previos

1. **Cuenta de Google Cloud** para obtener una API Key de Google Maps
2. **Cuenta de Cloudinary** para alojar los videos de los cursos
3. Navegador web moderno (Chrome, Firefox, Safari, Edge)

## 🛠️ Configuración

### 1. Configurar Google Maps API

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Maps JavaScript API**
4. Crea una **API Key** y restringirla a tu dominio
5. Abre `index.html` y reemplaza `YOUR_API_KEY` en la línea del script de Google Maps:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY_AQUI&callback=initMap" async defer></script>
```

### 2. Configurar Videos de Cloudinary

1. Crea una cuenta en [Cloudinary](https://cloudinary.com/)
2. Sube tus videos de cursos a Cloudinary
3. Abre `script.js` y actualiza la función `initializeCloudinaryVideos()` con tus URLs de video:

```javascript
const cloudinaryVideos = {
    'Full Stack Developer': 'https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1234567890/fullstack.mp4',
    'Data Science & Analytics': 'https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1234567890/datascience.mp4',
    // ... más videos
};
```

**Formato de URL de Cloudinary:**
```
https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1234567890/NOMBRE_VIDEO.mp4
```

### 3. Personalizar Ubicación del Negocio

En `script.js`, actualiza las coordenadas de tu ubicación:

```javascript
const businessLocation = { lat: 19.4326, lng: -99.1332 }; // Reemplaza con tus coordenadas
```

Para obtener tus coordenadas:
- Usa [Google Maps](https://www.google.com/maps) y busca tu dirección
- Haz clic derecho en el marcador y selecciona las coordenadas

También actualiza la información en `index.html`:
- Dirección en la sección de ubicación
- Teléfono y email en el formulario de contacto

## 📁 Estructura de Archivos

```
.
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con diseño elegante
├── script.js           # JavaScript para interactividad
└── README.md          # Este archivo
```

## 🎨 Personalización de Colores

Los colores principales están definidos en `styles.css` en la sección `:root`. Puedes personalizar:

- `--primary-color`: Color principal (azul índigo)
- `--secondary-color`: Color secundario (rosa)
- `--accent-color`: Color de acento (verde)
- `--accent-orange`: Color naranja para badges presenciales
- `--dark-bg`: Color de fondo oscuro

## 📱 Cursos Incluidos

La página incluye 6 cursos de ejemplo:

1. **Full Stack Developer** - 480 horas (Online y Presencial)
2. **Data Science & Analytics** - 360 horas (Online)
3. **UX/UI Design** - 240 horas (Presencial)
4. **Cloud Computing & DevOps** - 320 horas (Online y Presencial)
5. **Mobile Development** - 400 horas (Online)
6. **Cybersecurity** - 500 horas (Presencial)

Puedes modificar, agregar o eliminar cursos editando el HTML en la sección `#cursos`.

## 🚀 Uso

1. Abre `index.html` en tu navegador
2. Asegúrate de tener conexión a internet para:
   - Cargar Google Maps
   - Cargar videos de Cloudinary
   - Cargar fuentes de Google Fonts

## 📝 Notas Importantes

- **Google Maps API Key**: Es necesario para que el mapa funcione. Sin la clave, verás un error en la consola.
- **Videos de Cloudinary**: Los videos de ejemplo usan URLs de demostración. Reemplázalos con tus propios videos.
- **Formulario de Contacto**: Actualmente muestra un mensaje de éxito simulado. Deberás conectarlo a tu backend para procesar los envíos reales.

## 🔧 Funcionalidades JavaScript

- **Filtros de Cursos**: Filtra cursos por modalidad (Todos, Online, Presencial)
- **Smooth Scroll**: Navegación suave entre secciones
- **Google Maps**: Mapa interactivo con marcador de ubicación
- **Formulario**: Validación y envío de formulario de contacto
- **Animaciones**: Efectos de entrada para las tarjetas de cursos

## 📞 Soporte

Para más información o soporte, contacta a:
- Email: info@talentotechoriente.com
- Teléfono: +123 456 7890

## 📄 Licencia

Este proyecto es propiedad de TALENTO TECH ORIENTE.

---

¡Disfruta de tu nueva página web! 🎉



