// Booking Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                contactNumber: document.getElementById('contactNumber').value,
                email: document.getElementById('email').value || 'Not provided',
                serviceType: document.getElementById('serviceType').value,
                specificServices: document.getElementById('specificServices').value,
                location: document.getElementById('location').value,
                urgency: document.getElementById('urgency').value,
                preferredTime: document.getElementById('preferredTime').value || 'Not specified',
                additionalInfo: document.getElementById('additionalInfo').value || 'None'
            };
            
            // Validate required fields
            if (!formData.fullName || !formData.contactNumber || !formData.serviceType || 
                !formData.specificServices || !formData.location || !formData.urgency) {
                showNotification('Please fill in all required fields!', 'error');
                return;
            }
            
            // Generate WhatsApp message
            const message = generateBookingMessage(formData);
            const whatsappUrl = `https://wa.me/264814548168?text=${message}`;
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            showSuccessMessage();
            
            // Reset form
            bookingForm.reset();
        });
    }
    
    // Generate booking message for WhatsApp
    function generateBookingMessage(formData) {
        let message = "📋 *NEW BOOKING REQUEST* 📋\n\n";
        message += "*Client Information:*\n";
        message += `Name: ${formData.fullName}\n`;
        message += `Contact: ${formData.contactNumber}\n`;
        message += `Email: ${formData.email}\n\n`;
        
        message += "*Service Details:*\n";
        message += `Category: ${getServiceTypeLabel(formData.serviceType)}\n`;
        message += `Specific Services:\n${formData.specificServices}\n\n`;
        
        message += "*Location & Timing:*\n";
        message += `Location: ${getLocationLabel(formData.location)}\n`;
        message += `Urgency: ${formData.urgency}\n`;
        message += `Preferred Time: ${formData.preferredTime}\n\n`;
        
        message += "*Additional Information:*\n";
        message += `${formData.additionalInfo}\n\n`;
        
        message += `---\nSubmitted via CampusTech Solutions Website`;
        
        return encodeURIComponent(message);
    }
    
    // Helper functions
    function getServiceTypeLabel(value) {
        const types = {
            'software': 'PC Software Repair',
            'cv': 'CV Design & Writing',
            'both': 'Both Software & CV Services',
            'consultation': 'Consultation Only'
        };
        return types[value] || value;
    }
    
    function getLocationLabel(value) {
        const locations = {
            'unam': 'UNAM Main Campus (Come to me)',
            'delivery-campus': 'Delivery to UNAM Campus (+N$30)',
            'delivery-office': 'Delivery to Office (+N$30)',
            'delivery-home': 'Delivery to Home (+N$30)',
            'other': 'Other Location in Windhoek'
        };
        return locations[value] || value;
    }
    
    // Show success message
    function showSuccessMessage() {
        const successHTML = `
            <div class="success-message" id="successMessage">
                <i class="fas fa-check-circle"></i>
                <h3>Booking Request Sent!</h3>
                <p>We've opened WhatsApp for you. Please send the pre-filled message to confirm your booking.</p>
                <p>We'll contact you within 1 hour to finalize details.</p>
            </div>
        `;
        
        const form = document.querySelector('.booking-form');
        form.insertAdjacentHTML('beforebegin', successHTML);
        
        // Scroll to success message
        document.getElementById('successMessage').scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
        
        // Remove success message after 10 seconds
        setTimeout(() => {
            const message = document.getElementById('successMessage');
            if (message) {
                message.remove();
            }
        }, 10000);
    }
    
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
    
    // Add CSS for animations if not already added
    if (!document.querySelector('#bookingAnimations')) {
        const style = document.createElement('style');
        style.id = 'bookingAnimations';
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