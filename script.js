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

    // Initialize Cloudinary videos
    initializeCloudinaryVideos();

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

// Initialize Cloudinary Videos
function initializeCloudinaryVideos() {
    // Cloudinary video URLs - Replace with your actual Cloudinary video URLs
    // Formato para videos: https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1234567890/NOMBRE_VIDEO.mp4
    // Formato para video player (recomendado): https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/v1234567890/NOMBRE_VIDEO.mp4
    const cloudinaryVideos = {
        'Full Stack Developer': 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample.mp4',
        'Data Science & Analytics': 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample.mp4',
        'UX/UI Design': 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample.mp4',
        'Cloud Computing & DevOps': 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample.mp4',
        'Mobile Development': 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample.mp4',
        'Cybersecurity': 'https://res.cloudinary.com/demo/video/upload/v1234567890/sample.mp4'
    };

    // Update video elements with Cloudinary URLs
    const courseVideos = document.querySelectorAll('.course-video');
    courseVideos.forEach(video => {
        const courseName = video.getAttribute('data-course');
        const sourceElement = video.querySelector('source');
        
        if (sourceElement && cloudinaryVideos[courseName]) {
            // Actualiza la URL del video con la URL de Cloudinary
            // Formato recomendado: https://res.cloudinary.com/TU_CLOUD_NAME/video/upload/c_fill,w_800,h_450/v1234567890/VIDEO.mp4
            const videoUrl = cloudinaryVideos[courseName];
            sourceElement.src = videoUrl;
            // Recargar el video para aplicar la nueva URL
            video.load();
        }
    });
}

// Google Maps Initialization - DESHABILITADA (ahora usamos p5.js)
// function initMap() {
//     // Default coordinates - Replace with your actual location
//     const defaultLocation = { lat: 19.4326, lng: -99.1332 }; // Example: Mexico City
    
//     // Create map
//     const map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 15,
//         center: defaultLocation,
//         styles: [
//             {
//                 featureType: 'all',
//                 elementType: 'geometry',
//                 stylers: [{ color: '#1e293b' }]
//             },
//             {
//                 featureType: 'all',
//                 elementType: 'labels.text.fill',
//                 stylers: [{ color: '#cbd5e1' }]
//             },
//             {
//                 featureType: 'water',
//                 elementType: 'geometry',
//                 stylers: [{ color: '#0f172a' }]
//             },
//             {
//                 featureType: 'road',
//                 elementType: 'geometry',
//                 stylers: [{ color: '#334155' }]
//             },
//             {
//                 featureType: 'poi',
//                 elementType: 'labels',
//                 stylers: [{ visibility: 'off' }]
//             }
//         ]
//     });

//     // Try to get user's location
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             function(position) {
//                 const userLocation = {
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 };
                
//                 // Center map on user location
//                 map.setCenter(userLocation);
                
//                 // Add marker for user location
//                 new google.maps.Marker({
//                     position: userLocation,
//                     map: map,
//                     title: 'Tu ubicación',
//                     icon: {
//                         url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
//                     }
//                 });
//             },
//             function(error) {
//                 console.log('Error getting location:', error);
//                 // Use default location if geolocation fails
//                 addDefaultMarker(map, defaultLocation);
//             }
//         );
//     } else {
//         // Browser doesn't support geolocation
//         addDefaultMarker(map, defaultLocation);
//     }

//     // Add marker for TALENTO TECH ORIENTE location
//     // Replace these coordinates with your actual business location
//     const businessLocation = { lat: 19.4326, lng: -99.1332 };
    
//     const marker = new google.maps.Marker({
//         position: businessLocation,
//         map: map,
//         title: 'TALENTO TECH ORIENTE',
//         icon: {
//             url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
//         },
//         animation: google.maps.Animation.DROP
//     });

//     // Info window for business location
//     const infoWindow = new google.maps.InfoWindow({
//         content: `
//             <div style="color: #1e293b; padding: 10px;">
//                 <h3 style="margin: 0 0 10px 0; color: #6366f1;">TALENTO TECH ORIENTE</h3>
//                 <p style="margin: 5px 0;"><strong>Dirección:</strong> Calle Principal #123, Zona Oriental</p>
//                 <p style="margin: 5px 0;"><strong>Teléfono:</strong> +123 456 7890</p>
//                 <p style="margin: 5px 0;"><strong>Email:</strong> info@talentotechoriente.com</p>
//             </div>
//         `
//     });

//     marker.addListener('click', function() {
//         infoWindow.open(map, marker);
//     });

//     // Open info window by default
//     infoWindow.open(map, marker);
// }

// function addDefaultMarker(map, location) {
//     new google.maps.Marker({
//         position: location,
//         map: map,
//         title: 'TALENTO TECH ORIENTE',
//         icon: {
//             url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
//         }
//     });
// }

// window.initMap = initMap; // Ya no es necesario

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
