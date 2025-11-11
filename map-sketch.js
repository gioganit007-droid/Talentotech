// Mapa interactivo con p5.js para TALENTO TECH
// Coordenadas de Cúcuta, Norte de Santander, Colombia
// Av. 3 Este # 13-33, B. Los Caobos

let mapCanvas;
let lat = 7.8942;  // Latitud de Cúcuta
let lon = -72.5039; // Longitud de Cúcuta
let markerX, markerY;
let mapLoaded = false;

function setup() {
    // Crear canvas dentro del contenedor #map
    const mapContainer = select('#map');
    if (mapContainer) {
        mapCanvas = createCanvas(800, 450);
        mapCanvas.parent('map');
        
        // Calcular posición del marcador
        markerX = map(lon, -73, -72, 0, width);
        markerY = map(lat, 8, 7.5, 0, height);
        
        mapLoaded = true;
    }
}

function draw() {
    if (!mapLoaded) return;
    
    // Redibujar mapa base
    drawMapBase();
    
    // Dibujar marcador de ubicación
    drawMarker(markerX, markerY);
    
    // Mostrar información al pasar el mouse
    if (mouseX > markerX - 15 && mouseX < markerX + 15 &&
        mouseY > markerY - 15 && mouseY < markerY + 25) {
        showInfo();
        cursor(HAND);
    } else {
        cursor(ARROW);
    }
}

function drawMapBase() {
    // Fondo del mapa con degradado
    for (let i = 0; i < height; i++) {
        let inter = map(i, 0, height, 0, 1);
        let c = lerpColor(color(180, 200, 220), color(200, 220, 240), inter);
        stroke(c);
        line(0, i, width, i);
    }
    
    // Dibujar calles (líneas horizontales y verticales)
    stroke(160, 160, 160, 150);
    strokeWeight(1);
    
    // Calles horizontales
    for (let i = 0; i < height; i += 40) {
        line(0, i, width, i);
    }
    
    // Calles verticales
    for (let i = 0; i < width; i += 50) {
        line(i, 0, i, height);
    }
    
    // Dibujar área de la ciudad (rectángulo central con bordes)
    fill(210, 230, 210, 180);
    stroke(150, 170, 150);
    strokeWeight(2);
    rect(width * 0.2, height * 0.2, width * 0.6, height * 0.6, 5);
    
    // Etiqueta de la ciudad
    fill(80, 80, 100);
    noStroke();
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLD);
    text('Cúcuta, Norte de Santander', width/2, 30);
    
    // Línea decorativa bajo el título
    stroke(100, 120, 140);
    strokeWeight(2);
    line(width/2 - 150, 35, width/2 + 150, 35);
}

function drawMarker(x, y) {
    // Efecto de pulso animado
    let pulseSize = map(sin(frameCount * 0.1), -1, 1, 25, 35);
    fill(255, 0, 0, 30);
    noStroke();
    ellipse(x, y, pulseSize, pulseSize);
    
    // Dibujar sombra del marcador
    fill(0, 0, 0, 60);
    noStroke();
    ellipse(x + 3, y + 3, 28, 28);
    
    // Dibujar marcador rojo
    fill(220, 20, 20);
    stroke(255);
    strokeWeight(2);
    
    // Forma de pin/marcador
    push();
    translate(x, y);
    
    // Círculo superior
    ellipse(0, -10, 22, 22);
    
    // Triángulo inferior (pin)
    beginShape();
    vertex(0, -10);
    vertex(-10, 12);
    vertex(10, 12);
    endShape(CLOSE);
    
    // Punto central blanco
    fill(255);
    noStroke();
    ellipse(0, -10, 10, 10);
    
    // Reflejo brillante
    fill(255, 255, 255, 150);
    ellipse(-3, -13, 6, 6);
    
    pop();
    
    // Líneas de conexión animadas
    stroke(255, 100, 100, 80);
    strokeWeight(1);
    for (let i = 0; i < 8; i++) {
        let angle = (frameCount * 0.05 + i * 0.5) % TWO_PI;
        let radius = 20 + sin(frameCount * 0.1 + i) * 5;
        let endX = x + cos(angle) * radius;
        let endY = y + 15 + sin(angle) * radius;
        line(x, y + 12, endX, endY);
    }
}

function showInfo() {
    // Mostrar información de la ubicación
    fill(255, 255, 255, 245);
    stroke(100, 150, 200);
    strokeWeight(2);
    rectMode(CORNER);
    
    let infoX = mouseX + 15;
    let infoY = mouseY - 90;
    
    // Ajustar posición si está cerca del borde
    if (infoX + 280 > width) {
        infoX = mouseX - 295;
    }
    if (infoY < 0) {
        infoY = mouseY + 20;
    }
    
    // Fondo con sombra
    fill(0, 0, 0, 30);
    noStroke();
    rect(infoX + 3, infoY + 3, 280, 85, 8);
    
    // Caja de información
    fill(255, 255, 255, 250);
    stroke(100, 150, 200);
    strokeWeight(2);
    rect(infoX, infoY, 280, 85, 8);
    
    // Título
    fill(100, 150, 200);
    textAlign(LEFT);
    textSize(14);
    textStyle(BOLD);
    noStroke();
    text('📍 TALENTO TECH', infoX + 15, infoY + 22);
    
    // Información
    fill(60, 60, 60);
    textSize(11);
    textStyle(NORMAL);
    text('Av. 3 Este # 13-33', infoX + 15, infoY + 40);
    text('B. Los Caobos', infoX + 15, infoY + 55);
    text('Cúcuta, Norte de Santander', infoX + 15, infoY + 70);
    text('Colombia', infoX + 15, infoY + 85);
}

function mousePressed() {
    // Al hacer clic en el marcador, mostrar información
    if (dist(mouseX, mouseY, markerX, markerY) < 20) {
        // Crear efecto visual
        for (let i = 0; i < 10; i++) {
            let angle = (TWO_PI / 10) * i;
            let x = markerX + cos(angle) * 30;
            let y = markerY + sin(angle) * 30;
            // Partículas animadas (opcional)
        }
        
        // Abrir enlace a Google Maps (opcional)
        window.open('https://www.google.com/maps?q=Av.+3+Este+%2313-33,+B.+Los+Caobos,+Cúcuta,+Norte+de+Santander,+Colombia', '_blank');
    }
}

// Ajustar tamaño del canvas si la ventana cambia
function windowResized() {
    if (mapCanvas && mapLoaded) {
        resizeCanvas(800, 450);
        markerX = map(lon, -73, -72, 0, width);
        markerY = map(lat, 8, 7.5, 0, height);
    }
}


