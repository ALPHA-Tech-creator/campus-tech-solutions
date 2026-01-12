// Modern Services Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category Filtering
    const categoryTabs = document.querySelectorAll('.category-tab');
    const serviceCards = document.querySelectorAll('.modern-service-card');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter services
            serviceCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Service Details Data
    const serviceDetails = {
        1: {
            title: "Microsoft Office Installation",
            price: "N$200",
            description: "Complete Microsoft Office 365 installation with lifetime activation. No monthly subscriptions, no recurring fees.",
            features: [
                "Office 365 Professional Plus installation",
                "One-time lifetime activation",
                "All Office apps (Word, Excel, PowerPoint, Outlook, etc.)",
                "Regular updates included",
                "Email setup assistance",
                "30-day support for any issues"
            ],
            process: [
                "Initial consultation and system check",
                "Download and install Office 365",
                "Activation with genuine product key",
                "Custom setup and configuration",
                "Testing all applications",
                "Final verification and handover"
            ]
        },
        2: {
            title: "Windows 10 → 11 Upgrade",
            price: "N$200",
            description: "Seamless Windows 11 upgrade with guaranteed data preservation. All your files, apps, and settings remain intact.",
            features: [
                "Zero data loss guaranteed",
                "All applications preserved",
                "Complete driver updates",
                "System optimization post-upgrade",
                "Compatibility checks",
                "Backup creation before upgrade"
            ],
            process: [
                "System compatibility verification",
                "Complete system backup",
                "Windows 11 download and installation",
                "Driver updates and optimization",
                "Data migration and verification",
                "Final testing and user training"
            ]
        },
        3: {
            title: "Windows Activation",
            price: "N$150",
            description: "Full Windows activation with genuine product key. Unlock all features and personalization options.",
            features: [
                "Genuine Windows product key",
                "Full personalization access",
                "Wallpaper and theme customization",
                "Security updates enabled",
                "Remove activation watermarks",
                "Official Microsoft activation"
            ],
            process: [
                "Current system assessment",
                "Product key activation",
                "Personalization setup",
                "Update configuration",
                "Security settings optimization",
                "Verification and completion"
            ]
        },
        4: {
            title: "PC Optimization",
            price: "From N$180",
            description: "Complete system optimization to fix freezing, lagging, and speed issues. Your PC will perform like new.",
            features: [
                "Speed optimization and tuning",
                "Malware and virus removal",
                "Startup program management",
                "Disk cleanup and defragmentation",
                "Essential software installation",
                "System stability improvements"
            ],
            process: [
                "System performance analysis",
                "Malware scan and removal",
                "Startup optimization",
                "Disk cleanup and organization",
                "Software installation and setup",
                "Performance testing and verification"
            ]
        },
        5: {
            title: "Password Recovery",
            price: "N$250",
            description: "Safe removal of forgotten login credentials without any data loss. 100% data preservation guaranteed.",
            features: [
                "100% data safe recovery",
                "PIN/Password removal",
                "New login creation",
                "User account recovery",
                "No file or data loss",
                "Emergency access restoration"
            ],
            process: [
                "Bootable recovery environment",
                "Password reset tool activation",
                "Credential removal",
                "New login setup",
                "Data integrity verification",
                "System restoration and testing"
            ]
        },
        6: {
            title: "Bitlocker Removal",
            price: "From N$100",
            description: "Professional Bitlocker encryption removal with data recovery options. Regain access to your locked system.",
            features: [
                "Encryption key removal",
                "Data recovery options",
                "System restoration",
                "New Windows installation if needed",
                "Data backup services",
                "Full disk access restoration"
            ],
            process: [
                "Encryption status assessment",
                "Recovery key entry or bypass",
                "Data backup creation",
                "Encryption removal",
                "System restoration",
                "Final access verification"
            ]
        },
        7: {
            title: "Bluescreen Fix",
            price: "From N$150",
            description: "Emergency repair for Blue Screen of Death (BSOD) errors. Prevent data corruption and system failure.",
            features: [
                "BSOD error diagnosis",
                "Driver conflict resolution",
        "System file repair",
                "Hardware compatibility checks",
                "Stability improvements",
                "Preventive measures setup"
            ],
            process: [
                "Error code analysis",
                "Driver updates and fixes",
                "System file repair",
                "Hardware testing",
                "Stability optimization",
                "Monitoring and verification"
            ]
        },
        8: {
            title: "Network & Device Fix",
            price: "N$100",
            description: "Complete connectivity solutions for Wi-Fi, Bluetooth, sound, and graphics issues on Windows systems.",
            features: [
                "Wi-Fi troubleshooting and setup",
                "Bluetooth device pairing",
                "Sound driver installation",
                "Graphics driver updates",
                "Network adapter configuration",
                "Device manager optimization"
            ],
            process: [
                "Connectivity issue diagnosis",
                "Driver updates and installation",
                "Device pairing and setup",
                "Network configuration",
                "Audio/video testing",
                "Final connectivity verification"
            ]
        },
        9: {
            title: "Professional CV Design",
            price: "N$100",
            description: "ATS-friendly CV design tailored to your industry. Modern templates that get noticed by employers.",
            features: [
                "ATS (Applicant Tracking System) optimization",
                "Industry-specific templates",
                "Custom design from scratch",
                "3 rounds of revisions included",
                "Keyword optimization",
                "Professional formatting"
            ],
            process: [
                "Initial consultation and requirements",
                "Template selection and design",
                "Content creation and optimization",
                "First draft delivery",
                "Revision rounds (up to 3)",
                "Final CV delivery in multiple formats"
            ]
        },
        10: {
            title: "Cover Letter Writing",
            price: "N$50",
            description: "Professional cover letters tailored to specific job applications. Perfect complement to your CV.",
            features: [
                "Job-specific tailoring",
                "Professional tone and language",
                "Keyword optimization",
                "Company research included",
                "Multiple format delivery",
                "Quick turnaround time"
            ],
            process: [
                "Job description analysis",
                "Company research",
                "Content creation",
                "Formatting and optimization",
                "Proofreading and editing",
                "Final delivery"
            ]
        },
        11: {
            title: "CV Revamping",
            price: "N$80",
            description: "Modern update and optimization of your existing CV for today's competitive job market.",
            features: [
                "Existing CV analysis",
                "Modern redesign",
                "Content optimization",
                "ATS compliance check",
                "Formatting improvements",
                "Industry updates"
            ],
            process: [
                "Current CV assessment",
                "Redesign planning",
                "Content restructuring",
                "ATS optimization",
                "Formatting updates",
                "Final delivery and review"
            ]
        }
    };
    
    // Show Service Details Modal
    window.showServiceDetails = function(serviceId) {
        const service = serviceDetails[serviceId];
        if (!service) return;
        
        const modalHTML = `
            <div class="service-detail-modal">
                <div class="detail-header">
                    <h2>${service.title}</h2>
                    <div class="detail-price">${service.price}</div>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-info-circle"></i> Description</h3>
                    <p>${service.description}</p>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-star"></i> Key Features</h3>
                    <ul class="detail-features">
                        ${service.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h3><i class="fas fa-cogs"></i> Service Process</h3>
                    <div class="process-steps">
                        ${service.process.map((step, index) => `
                            <div class="process-step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-content">${step}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="detail-actions">
                    <button class="btn-modern-cart" 
                            onclick="addToCart('${service.title}', ${parseInt(service.price.replace('N$', '').replace('From ', ''))}, '${service.description.substring(0, 100)}...')">
                        <i class="fas fa-cart-plus"></i> Add to Cart - ${service.price}
                    </button>
                    <button class="btn-modern-details" onclick="closeServiceModal()">
                        <i class="fas fa-times"></i> Close
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('modalBody').innerHTML = modalHTML;
        document.getElementById('serviceModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    // Close Service Modal
    window.closeServiceModal = function() {
        document.getElementById('serviceModal').classList.remove('active');
        document.body.style.overflow = 'auto';
    };
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeServiceModal();
        }
    });
    
    // Close modal on outside click
    document.getElementById('serviceModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeServiceModal();
        }
    });
    
    // Add CSS for modal details
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .service-detail-modal {
            padding: 1rem;
        }
        
        .detail-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #f1f5f9;
        }
        
        .detail-header h2 {
            margin: 0;
            font-size: 1.8rem;
            color: var(--dark-color);
        }
        
        .detail-price {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-color);
        }
        
        .detail-section {
            margin-bottom: 2rem;
        }
        
        .detail-section h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 1rem;
            color: var(--dark-color);
        }
        
        .detail-section h3 i {
            color: var(--primary-color);
        }
        
        .detail-features {
            list-style: none;
            margin: 0;
            padding: 0;
        }
        
        .detail-features li {
            margin-bottom: 0.8rem;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            color: var(--dark-color);
        }
        
        .detail-features i {
            color: var(--success-color);
            margin-top: 2px;
            flex-shrink: 0;
        }
        
        .process-steps {
            display: grid;
            gap: 1rem;
        }
        
        .process-step {
            display: flex;
            gap: 1rem;
            align-items: flex-start;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 10px;
            border-left: 4px solid var(--primary-color);
        }
        
        .step-number {
            width: 30px;
            height: 30px;
            background: var(--primary-color);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            flex-shrink: 0;
        }
        
        .step-content {
            flex: 1;
            color: var(--dark-color);
        }
        
        .detail-actions {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 2px solid #f1f5f9;
        }
        
        @media (max-width: 768px) {
            .detail-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .detail-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(modalStyle);
});