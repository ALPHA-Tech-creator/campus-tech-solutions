// MODERN CART FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart
    let cart = [];
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const closeCart = document.getElementById('closeCart');
    const cartSidebar = document.getElementById('cartSidebar');
    
    // Create cart overlay
    const cartOverlay = document.createElement('div');
    cartOverlay.className = 'cart-overlay';
    document.body.appendChild(cartOverlay);
    
    // Load cart from localStorage
    function loadCart() {
        const savedCart = localStorage.getItem('campusTechCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartDisplay();
            updateCartCount();
        }
    }
    
    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('campusTechCart', JSON.stringify(cart));
    }
    
    // Update cart display
    function updateCartDisplay() {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your service cart is empty</p>
                    <small>Add services from our catalog</small>
                </div>
            `;
            cartTotal.textContent = 'N$0';
            checkoutBtn.disabled = true;
            checkoutBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Add Services First';
            return;
        }
        
        let itemsHTML = '';
        let subtotal = 0;
        
        cart.forEach((item, index) => {
            itemsHTML += `
                <div class="cart-item" data-index="${index}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.description || 'Standard service'}</p>
                    </div>
                    <div class="cart-item-price">
                        <span>N$${item.price}</span>
                        <button class="remove-item" data-index="${index}" onclick="removeFromCart(${index})">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
            subtotal += item.price;
        });
        
        cartItems.innerHTML = itemsHTML;
        cartTotal.textContent = `N$${subtotal}`;
        
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Send via WhatsApp';
        
        saveCart();
    }
    
    // Add item to cart
    window.addToCart = function(name, price, description = '') {
        const item = {
            id: Date.now(),
            name: name,
            price: price,
            description: description,
            timestamp: new Date().toISOString()
        };
        
        cart.push(item);
        updateCartDisplay();
        updateCartCount();
        showCart();
    };
    
    // Remove item from cart
    window.removeFromCart = function(index) {
        if (index >= 0 && index < cart.length) {
            cart.splice(index, 1);
            updateCartDisplay();
            updateCartCount();
        }
    };
    
    // Show cart
    window.showCart = function() {
        cartSidebar.classList.add('open');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    // Hide cart
    function hideCart() {
        cartSidebar.classList.remove('open');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Update cart count
    function updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(element => {
            element.textContent = cart.length;
            element.style.display = cart.length > 0 ? 'flex' : 'none';
        });
    }
    
    // Generate WhatsApp message
function generateWhatsAppMessage() {
    let message = " *Service Request* \n\n";
    message += "*Hello CampusTech Solutions*,\n\n";
    message += "I would like to book these services:\n\n";
    
    let total = 0;
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   • Price: *N$${item.price}*\n`;
        if (item.description) {
            message += `   • Details: ${item.description}\n`;
        }
        message += `\n`;
        total += item.price;
    });
    
    message += `*Total: N$${total}*\n\n`;
    
    message += "*Please confirm availability* and I will provide:\n";
    message += "• *My name*\n";
    message += "• *My location*\n";
    message += "• *Preferred service time*\n\n";
    
    message += "Looking forward to your response!";
    
    return encodeURIComponent(message);
}
    
    // Event Listeners
    if (closeCart) {
        closeCart.addEventListener('click', hideCart);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length === 0) return;
            
            const message = generateWhatsAppMessage();
            const whatsappUrl = `https://wa.me/264814548168?text=${message}`;
            
            // Clear cart
            cart = [];
            updateCartDisplay();
            updateCartCount();
            
            // Close cart
            hideCart();
            
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
        });
    }
    
    // Close cart when clicking overlay
    cartOverlay.addEventListener('click', hideCart);
    
    // Close cart on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cartSidebar.classList.contains('open')) {
            hideCart();
        }
    });
    
    // Initialize
    loadCart();
});