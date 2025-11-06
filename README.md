# TALENTO TECH ORIENTE - Página Web

Página web moderna y elegante para mostrar cursos y bootcamps de TALENTO TECH ORIENTE, con imágenes de alta calidad y Google Maps integrado.

## 🚀 Características

- ✅ Diseño moderno con colores elegantes y vibrantes
- ✅ Imágenes de alta calidad de Unsplash para cada curso
- ✅ Información detallada de cursos online y presenciales
- ✅ Duración horaria, días y tipos de jornadas de clases
- ✅ Ubicación con Google Maps integrado (Cúcuta, Norte de Santander)
- ✅ Filtros interactivos por modalidad (Online/Presencial)
- ✅ Formulario de contacto funcional
- ✅ Diseño completamente responsive
- ✅ Animaciones y efectos hover suaves

## 📋 Características Técnicas

- **HTML5** semántico y accesible
- **CSS3** con variables personalizadas y animaciones
- **JavaScript vanilla** sin dependencias externas
- **Google Maps API** para mostrar ubicación
- **Fuentes de Google Fonts** (Poppins)
- **Imágenes de Unsplash** optimizadas

## 🛠️ Configuración

### 1. Configurar Google Maps API (Opcional)

El proyecto ya incluye una API Key de Google Maps de demostración. Para usar tu propia API Key:

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **Maps JavaScript API**
4. Crea una **API Key** y restrígela a tu dominio
5. Abre `index.html` y reemplaza la API Key en la línea del script de Google Maps:

```html
<script async defer src="https://maps.googleapis.com/maps/api/js?key=TU_API_KEY_AQUI&callback=initMap"></script>
```

### 2. Personalizar Ubicación del Negocio

La ubicación actual es:
- **Dirección:** Avenida 3 Este # 13-33, Barrio Los Caobos
- **Ciudad:** Cúcuta, Norte de Santander, Colombia
- **Coordenadas:** lat: 7.8942, lng: -72.5039

Para cambiar la ubicación, edita en `script.js`:

```javascript
const talentoTechLocation = { lat: 7.8942, lng: -72.5039 }; // Reemplaza con tus coordenadas
```

Para obtener tus coordenadas:
- Usa [Google Maps](https://www.google.com/maps) y busca tu dirección
- Haz clic derecho en el marcador y selecciona las coordenadas

También actualiza la información de contacto en `index.html`:
- Dirección en la sección de ubicación
- Teléfono y email en las tarjetas de información

### 3. Cambiar Imágenes de los Cursos

Las imágenes actuales vienen de Unsplash. Para usar tus propias imágenes:

1. Abre `index.html`
2. Busca las etiquetas `<img>` dentro de `.course-image`
3. Reemplaza las URLs con las de tus propias imágenes:

```html
<img src="TU_IMAGEN_AQUI.jpg" alt="Nombre del Curso">
```

**Imágenes actuales:**
- Full Stack Developer: Laptop con código
- Data Science: Gráficos y analytics
- UX/UI Design: Mesa de diseño
- Cloud Computing: Tecnología espacial
- Mobile Development: Dispositivos móviles
- Cybersecurity: Seguridad digital

## 📁 Estructura de Archivos

```
.
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con diseño elegante
├── script.js           # JavaScript para interactividad y Google Maps
└── README.md          # Este archivo
```

## 🎨 Personalización de Colores

Los colores principales están definidos en `styles.css` en la sección `:root`. Puedes personalizar:

```css
:root {
    --primary-color: #6366f1;      /* Color principal (azul índigo) */
    --secondary-color: #ec4899;    /* Color secundario (rosa) */
    --accent-color: #10b981;       /* Color de acento (verde) */
    --accent-orange: #f59e0b;      /* Color naranja para badges */
    --accent-purple: #8b5cf6;      /* Color púrpura */
    --dark-bg: #0f172a;            /* Fondo oscuro */
    --dark-card: #1e293b;          /* Tarjetas oscuras */
}
```

## 📱 Cursos Incluidos

La página incluye 6 cursos:

1. **Full Stack Developer** - 480 horas
   - Modalidad: Online y Presencial
   - Jornada: Matutina (8:00 AM - 12:00 PM)
   - Días: Lunes a Viernes

2. **Data Science & Analytics** - 360 horas
   - Modalidad: Online
   - Jornada: Nocturna (6:00 PM - 10:00 PM)
   - Días: Martes y Jueves

3. **UX/UI Design** - 240 horas
   - Modalidad: Presencial
   - Jornada: Intensiva (9:00 AM - 5:00 PM)
   - Días: Sábados

4. **Cloud Computing & DevOps** - 320 horas
   - Modalidad: Online y Presencial
   - Jornada: Vespertina (2:00 PM - 6:00 PM)
   - Días: Lunes, Miércoles y Viernes

5. **Mobile Development** - 400 horas
   - Modalidad: Online
   - Jornada: Matutina (8:00 AM - 12:00 PM)
   - Días: Lunes a Viernes

6. **Cybersecurity** - 500 horas
   - Modalidad: Presencial
   - Jornada: Nocturna (6:00 PM - 10:00 PM)
   - Días: Lunes a Viernes

### Agregar o Modificar Cursos

Para agregar un nuevo curso, copia esta estructura en `index.html` dentro de la sección `.courses-grid`:

```html
<div class="course-card" data-type="online presencial">
    <div class="course-badge online-badge">Online</div>
    <div class="course-badge presencial-badge">Presencial</div>
    <div class="course-image">
        <img src="URL_DE_TU_IMAGEN" alt="Nombre del Curso">
        <div class="course-overlay">
            <span class="course-icon">🚀</span>
        </div>
    </div>
    <div class="course-content">
        <h3>Nombre del Curso</h3>
        <p class="course-description">Descripción del curso...</p>
        <div class="course-details">
            <div class="detail-item"><span class="icon">⏱️</span> <span><strong>Duración:</strong> XXX horas</span></div>
            <div class="detail-item"><span class="icon">📅</span> <span><strong>Días:</strong> Días de la semana</span></div>
            <div class="detail-item"><span class="icon">🕐</span> <span><strong>Jornada:</strong> Horario</span></div>
            <div class="detail-item"><span class="icon">📚</span> <span><strong>Modalidad:</strong> Online/Presencial</span></div>
        </div>
        <button class="btn-enroll">Inscribirse</button>
    </div>
</div>
```

## 🚀 Uso

1. Descarga o clona los archivos
2. Abre `index.html` en tu navegador web
3. Asegúrate de tener conexión a internet para:
   - Cargar Google Maps
   - Cargar imágenes de Unsplash
   - Cargar fuentes de Google Fonts

### Abrir en Servidor Local (Recomendado)

Para evitar problemas con CORS, es recomendable usar un servidor local:

**Opción 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Opción 2: Node.js (http-server)**
```bash
npm install -g http-server
http-server
```

**Opción 3: VS Code Live Server**
1. Instala la extensión "Live Server" en VS Code
2. Haz clic derecho en `index.html` > "Open with Live Server"

Luego accede a `http://localhost:8000` (o el puerto correspondiente).

## 📝 Notas Importantes

### Google Maps
- La API Key incluida es una clave de demostración pública
- Para producción, **debes usar tu propia API Key**
- Restringe la API Key a tu dominio para evitar uso no autorizado

### Imágenes
- Las imágenes de Unsplash son gratuitas para uso comercial
- Se cargan desde los servidores de Unsplash (requiere internet)
- Considera descargar y alojar las imágenes localmente para mejor rendimiento

### Formulario de Contacto
- Actualmente muestra un mensaje de éxito simulado
- Para producción, conecta el formulario a un backend (PHP, Node.js, etc.)
- Considera usar servicios como Formspree, EmailJS o Netlify Forms

## 🔧 Funcionalidades JavaScript

### Navegación y Filtros
- **Smooth Scroll**: Navegación suave entre secciones
- **Filtros de Cursos**: Filtra cursos por modalidad (Todos, Online, Presencial)
- **Scroll Header**: El header cambia de estilo al hacer scroll

### Google Maps
- **Mapa interactivo** con ubicación de TALENTO TECH ORIENTE
- **Marcador personalizado** con animación de caída
- **Info Window** con información de contacto y botón de direcciones
- **Estilos personalizados** oscuros que coinciden con el diseño de la página

### Interacciones
- **Botón Inscribirse**: Lleva automáticamente al formulario de contacto
- **Validación de formulario**: Campos requeridos antes de enviar
- **Animaciones de entrada**: Las tarjetas aparecen con animaciones al hacer scroll
- **Efectos hover**: Zoom en imágenes y elevación de tarjetas

## 📞 Información de Contacto

**TALENTO TECH ORIENTE**
- 📍 Dirección: Avenida 3 Este # 13-33, Barrio Los Caobos, Cúcuta, Norte de Santander, Colombia
- 📧 Email: info@talentotechoriente.com
- 📱 Teléfono: +57 XXX XXX XXXX
- ⏰ Horario: Lunes a Viernes 8:00 AM - 8:00 PM, Sábados 9:00 AM - 5:00 PM

## 🌐 Navegadores Soportados

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Opera (últimas 2 versiones)

## 📱 Responsive Design

La página está completamente optimizada para:
- 📱 Móviles (320px - 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

## 🐛 Solución de Problemas

### El mapa de Google Maps no se muestra
1. Verifica que tienes conexión a internet
2. Revisa la consola del navegador para ver si hay errores de API Key
3. Asegúrate de que la Maps JavaScript API está habilitada en Google Cloud Console

### Las imágenes no cargan
1. Verifica tu conexión a internet
2. Comprueba que las URLs de Unsplash sean correctas
3. Considera usar imágenes locales si tienes problemas frecuentes

### El formulario no funciona
1. El formulario actual es solo una demostración
2. Para enviar emails reales, necesitas configurar un backend
3. Puedes usar servicios como Formspree, EmailJS o tu propio servidor

## 📄 Licencia

Este proyecto es propiedad de TALENTO TECH ORIENTE.

---

## 🔄 Cambios Recientes

### Versión 2.0 (Actualización Reciente)

✅ **Agregado:**
- Imágenes de alta calidad de Unsplash para cada curso
- Google Maps completamente funcional con ubicación real
- Efectos hover con zoom en imágenes
- Overlays con iconos en las tarjetas de cursos
- Estilos de gradiente animados para textos
- Ventana de información en Google Maps con botón de direcciones

✅ **Mejorado:**
- Estructura HTML más limpia y semántica
- Estilos CSS más organizados y mantenibles
- JavaScript optimizado para Google Maps
- Mejor responsive design en móviles

✅ **Eliminado:**
- Dependencia de p5.js (ya no es necesaria)
- Referencias a videos de Cloudinary (ahora usa imágenes)
- Código duplicado y archivos innecesarios

---

¡Disfruta de tu nueva página web! 🎉

Para cualquier consulta o soporte adicional, no dudes en contactarnos.
