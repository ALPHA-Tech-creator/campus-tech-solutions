// Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('active');
            
            // Close other FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== this) {
                    otherQuestion.parentElement.classList.remove('active');
                }
            });
        });
    });
    
    // Quick Contact Form
    const quickForm = document.getElementById('quickForm');
    
    if (quickForm) {
        quickForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('quickName').value.trim();
            const phone = document.getElementById('quickPhone').value.trim();
            const message = document.getElementById('quickMessage').value.trim();
            
            if (!name || !phone || !message) {
                showNotification('Please fill in all fields!', 'error');
                return;
            }
            
            // Generate WhatsApp message
            const whatsappMessage = `Hi CampusTech Solutions!%0A%0A*Quick Inquiry*%0AName: ${name}%0APhone: ${phone}%0A%0AMessage: ${message}%0A%0APlease contact me back.`;
            const whatsappUrl = `https://wa.me/264814548168?text=${whatsappMessage}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            showNotification('Opening WhatsApp with your message...', 'success');
            
            // Reset form
            quickForm.reset();
        });
    }
    
    // Show map directions function
    window.showMapDirections = function() {
        const address = "University of Namibia Main Campus, Windhoek";
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapsUrl, '_blank');
    };
    
    // Show notification
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? 'var(--danger-color)' : 'var(--success-color)'};
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add click handler for location card button
    const locationBtn = document.querySelector('.btn-contact[onclick*="showMapDirections"]');
    if (locationBtn) {
        locationBtn.addEventListener('click', function(e) {
            if (!e.target.closest('a')) {
                window.showMapDirections();
            }
        });
    }
    
    // Add CSS for animations
    if (!document.querySelector('#contactAnimations')) {
        const style = document.createElement('style');
        style.id = 'contactAnimations';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
});