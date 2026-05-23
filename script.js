// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach((item) => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// WhatsApp
const whatsappNumber = '27610423655';

function setupWhatsApp() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    if (whatsappFloat) whatsappFloat.href = `https://wa.me/${whatsappNumber}`;
    const whatsappLink = document.getElementById('whatsappLink');
    if (whatsappLink) whatsappLink.href = `https://wa.me/${whatsappNumber}`;
}
setupWhatsApp();

// Contact Form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        let whatsappMessage = `Hello Lee's Designs! I'm interested in your tailoring services.%0A%0A`;
        whatsappMessage += `*Name:* ${name}%0A`;
        if (email) whatsappMessage += `*Email:* ${email}%0A`;
        if (phone) whatsappMessage += `*Phone:* ${phone}%0A`;
        whatsappMessage += `*Request:* ${message}%0A%0A(From your website)`;
        window.open(
            `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
            '_blank'
        );
        alert('Thank you! You will be redirected to WhatsApp.');
        contactForm.reset();
    });
}

// ==========================================
// GALLERY - FIXED PATHS FOR GITHUB
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    
    // Get the base URL of the current site
    const baseUrl = window.location.origin + window.location.pathname.replace(/\/$/, '');
    
    // YOUR EXACT IMAGE FILENAMES - Using the correct path for GitHub
    const galleryImages = [
        { src: 'gallery/bonnet.png', alt: 'Beautiful Bonnet' },
        { src: 'gallery/bonnets.png', alt: 'Bonnets Collection' },
        { src: 'gallery/jacket1.png', alt: 'Custom Jacket 1' },
        { src: 'gallery/jacket2.png', alt: 'Custom Jacket 2' },
        { src: 'gallery/traditionalAttire.png', alt: 'Traditional Attire' },
        { src: 'gallery/uniform2.png', alt: 'Custom Uniform' },
    ];

    const galleryGrid = document.getElementById('galleryGrid');

    if (galleryGrid) {
        // Clear the loading text or placeholder
        galleryGrid.innerHTML = '';

        // Add each image to the gallery
        for (let i = 0; i < galleryImages.length; i++) {
            const image = galleryImages[i];
            
            // Create div for the image
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            
            // Create img element
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            img.loading = 'lazy';
            
            // Add error handling to see which images fail
            img.onerror = function() {
                console.error('Failed to load image: ' + image.src);
                console.log('Make sure the file exists at: ' + window.location.origin + '/Lee-s-Designs/' + image.src);
                // Show a placeholder when image fails
                this.src = 'https://placehold.co/400x300/4a1d6d/ffffff?text=Image+Coming+Soon';
            };
            
            img.onload = function() {
                console.log('Loaded: ' + image.src);
            };
            
            // Add image to div
            galleryItem.appendChild(img);
            
            // Add div to gallery grid
            galleryGrid.appendChild(galleryItem);
        }
        
        console.log('Gallery loaded with ' + galleryImages.length + ' images');
        console.log('Site URL: ' + window.location.href);
    } else {
        console.log('Gallery grid not found - check that id="galleryGrid" exists');
    }
});

// Add CSS for gallery images
const galleryStyle = document.createElement('style');
galleryStyle.textContent = `
    .gallery-item {
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        transition: transform 0.3s;
        background: #f8f8f8;
    }
    .gallery-item:hover {
        transform: scale(1.03);
    }
    .gallery-item img {
        width: 100%;
        height: 280px;
        object-fit: cover;
        display: block;
    }
`;
document.head.appendChild(galleryStyle);

console.log("Lee's Designs website loaded!");
