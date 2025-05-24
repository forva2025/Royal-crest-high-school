// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll(".lazy-load");
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
const mobileDarkModeToggle = document.getElementById("mobileDarkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
const mobileDarkModeIcon = document.getElementById("mobileDarkModeIcon");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
    mobileDarkModeIcon.classList.remove('fa-moon');
    mobileDarkModeIcon.classList.add('fa-sun');
}

function toggleDarkMode() {
    // Add rotation animation
    darkModeIcon.classList.add('dark-mode-toggle-rotate');
    mobileDarkModeIcon.classList.add('dark-mode-toggle-rotate');
    
    // Toggle dark mode
    body.classList.toggle("dark-mode");
    
    // Toggle icon
    darkModeIcon.classList.toggle("fa-moon");
    darkModeIcon.classList.toggle("fa-sun");
    mobileDarkModeIcon.classList.toggle("fa-moon");
    mobileDarkModeIcon.classList.toggle("fa-sun");
    
    // Save theme preference
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Remove rotation animation class after animation completes
    setTimeout(() => {
        darkModeIcon.classList.remove('dark-mode-toggle-rotate');
        mobileDarkModeIcon.classList.remove('dark-mode-toggle-rotate');
    }, 500);
}

darkModeToggle.addEventListener("click", toggleDarkMode);
mobileDarkModeToggle.addEventListener("click", toggleDarkMode);

// Add dark mode transition class to all elements that need it
document.querySelectorAll('.bg-white, .text-gray-800, .bg-gray-100, .border-gray-200, .shadow-md').forEach(element => {
    element.classList.add('dark-mode-transition');
});

// Enhanced smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', () => {
        const targetId = anchor.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Add offset for fixed header
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Update active state in navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('school-accent');
                if (link.getAttribute('href') === targetId) {
                    link.classList.add('school-accent');
                }
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        content.classList.toggle('active');
        icon.style.transform = content.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
    });
});

// News Section Toggle
const viewAllNewsBtn = document.getElementById('viewAllNewsBtn');
const moreNews = document.getElementById('moreNews');

viewAllNewsBtn.addEventListener('click', () => {
    moreNews.classList.toggle('hidden');
    viewAllNewsBtn.textContent = moreNews.classList.contains('hidden') 
        ? 'View All News' 
        : 'Show Less News';
    
    // Smooth scroll to the newly revealed content
    if (!moreNews.classList.contains('hidden')) {
        moreNews.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});

// Departments expand/collapse
const loadMoreDepartmentsBtn = document.getElementById('loadMoreDepartments');
const moreDepartments = document.getElementById('moreDepartments');

loadMoreDepartmentsBtn.addEventListener('click', () => {
    moreDepartments.classList.toggle('hidden');
    loadMoreDepartmentsBtn.textContent = moreDepartments.classList.contains('hidden') 
        ? 'View More Departments' 
        : 'Show Less Departments';
});

// Student Leaders expand/collapse
const loadMoreLeadersBtn = document.getElementById('loadMoreLeaders');
const moreStudentLeaders = document.getElementById('moreStudentLeaders');

loadMoreLeadersBtn.addEventListener('click', () => {
    moreStudentLeaders.classList.toggle('hidden');
    loadMoreLeadersBtn.textContent = moreStudentLeaders.classList.contains('hidden') 
        ? 'View More Leaders' 
        : 'Show Less Leaders';
});

// Gallery Filtering
document.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Update active button
        document.querySelectorAll('[data-category]').forEach(btn => {
            btn.classList.remove('bg-accent-gold', 'text-white');
        });
        button.classList.add('bg-accent-gold', 'text-white');
        
        // Filter gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Gallery View More Functionality
const viewMorePhotosBtn = document.getElementById('viewMorePhotosBtn');
const moreGalleryItems = document.getElementById('moreGalleryItems');

viewMorePhotosBtn.addEventListener('click', () => {
    moreGalleryItems.classList.toggle('hidden');
    viewMorePhotosBtn.textContent = moreGalleryItems.classList.contains('hidden') 
        ? 'View More Photos' 
        : 'Show Less Photos';
    
    // Smooth scroll to the newly revealed content
    if (!moreGalleryItems.classList.contains('hidden')) {
        moreGalleryItems.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}); 