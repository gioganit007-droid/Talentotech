// Course Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            courseCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    const cardTypes = card.getAttribute('data-type');
                    if (cardTypes.includes(filterValue)) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Enroll button functionality
    const enrollButtons = document.querySelectorAll('.btn-enroll');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseCard = this.closest('.course-card');
            const courseName = courseCard.querySelector('h3').textContent;
            
            // Scroll to contact form
            document.getElementById('contacto').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Pre-fill course selection in form
            setTimeout(() => {
                const courseSelect = document.querySelector('select');
                if (courseSelect) {
                    const options = courseSelect.options;
                    for (let i = 0; i < options.length; i++) {
                        if (options[i].text.toLowerCase().includes(courseName.toLowerCase().split(' ')[0].toLowerCase())) {
                            courseSelect.selectedIndex = i;
                            break;
                        }
                    }
                }
            }, 500);
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show success message
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                submitBtn.textContent = '¡Mensaje Enviado!';
                submitBtn.style.background = 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe course cards
    courseCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Google Maps Initialization
function initMap() {
    // Coordenadas de TALENTO TECH ORIENTE
    // Avenida 3 Este # 13-33, Barrio Los Caobos, Cúcuta, Norte de Santander, Colombia
    const talentoTechLocation = { lat: 7.8942, lng: -72.5039 };
    
    // Crear mapa con estilo personalizado
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: talentoTechLocation,
        styles: [
            {
                featureType: 'all',
                elementType: 'geometry',
                stylers: [{ color: '#1e293b' }]
            },
            {
                featureType: 'all',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#cbd5e1' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#0f172a' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#334155' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }]
            }
        ],
        mapTypeControl: false,
        streetViewControl: true,
        fullscreenControl: true
    });

    // Crear marcador personalizado con animación
    const marker = new google.maps.Marker({
        position: talentoTechLocation,
        map: map,
        title: 'TALENTO TECH ORIENTE',
        animation: google.maps.Animation.DROP
    });

    // Ventana de información con estilo elegante
    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="color: #1e293b; padding: 20px; font-family: 'Poppins', sans-serif; max-width: 300px;">
                <h3 style="margin: 0 0 15px 0; color: #667eea; font-size: 20px; font-weight: 700;">
                    🚀 TALENTO TECH ORIENTE
                </h3>
                <div style="line-height: 1.8; color: #334155;">
                    <p style="margin: 8px 0;"><strong>📍 Dirección:</strong></p>
                    <p style="margin: 5px 0;">Avenida 3 Este # 13-33</p>
                    <p style="margin: 5px 0;">Barrio Los Caobos</p>
                    <p style="margin: 5px 0;">Cúcuta, Norte de Santander</p>
                    <p style="margin: 5px 0;">Colombia</p>
                </div>
                <a href="https://www.google.com/maps/dir/?api=1&destination=7.8942,-72.5039" 
                   target="_blank" 
                   style="display: inline-block; margin-top: 15px; padding: 10px 20px; 
                          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                          color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                    Cómo llegar →
                </a>
            </div>
        `
    });

    // Abrir ventana de información al hacer clic en el marcador
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    // Abrir ventana de información por defecto
    infoWindow.open(map, marker);
}

// Hacer la función disponible globalmente para el callback de Google Maps
window.initMap = initMap;

// Add scroll animation for header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
