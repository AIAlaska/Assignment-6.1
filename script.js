// Data for the "Recommended Tools" section
const tools = [
    { name: "OBD-II Scanner", details: "Essential for reading diagnostic trouble codes (DTCs) from the vehicle's computer." },
    { name: "Multimeter", details: "Used for testing voltage, current, and resistance in electrical circuits." },
    { name: "Code Reader", details: "A basic tool for retrieving and clearing engine fault codes." },
    { name: "Brake Bleeder Kit", details: "Allows for one-person brake fluid changes and bleeding." },
    { name: "Fuel Pressure Tester", details: "Helps diagnose issues with the fuel delivery system." },
    { name: "Compression Tester", details: "Measures the compression in each engine cylinder to identify internal problems." }
];

function populateToolsSection(sectionId, items) {
    const section = document.getElementById(sectionId);
    if (!section) return; // Exit if the section element is not found
    
    items.forEach(item => {
        // Create main card container
        const card = document.createElement('div');
        card.className = 'card';
        
        // Create element for the tool name
        const toolName = document.createElement('div');
        toolName.textContent = item.name;
        
        // Create element for the tool details
        const cardDetails = document.createElement('div');
        cardDetails.className = 'card-details';
        cardDetails.textContent = item.details;
        
        // Append the name and details to the card, and the card to the section
        card.appendChild(toolName);
        card.appendChild(cardDetails);
        section.appendChild(card);
    });
}

// Populate the "Recommended Tools" section with the 'tools' data
populateToolsSection('tools-section', tools);

// Add an event listener to the contact form for submission
document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the default submission
    
    const form = event.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const statusElement = document.getElementById('form-status');
    
    // Disable the button and show a "Sending..." message
    submitButton.disabled = true;
    statusElement.textContent = 'Sending...';
    statusElement.style.display = 'block';
    statusElement.style.color = '#3498db';

    try {
        // Send the form data
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        if (response.ok) {
            // On success, show a success message and reset the form
            statusElement.textContent = data.message || 'Your message has been sent successfully!';
            statusElement.style.color = '#2ecc71';
            form.reset();
        } else {
            // On failure, throw an error with the server's message
            throw new Error(data.message || 'An error occurred.');
        }
    } catch (error) {
        // Display any errors in the status element
        statusElement.textContent = error.message || 'Oops! Something went wrong. Please try again.';
        statusElement.style.color = '#e74c3c';
    } finally {
        // Re-enable the submit button and hide the status message after a delay
        submitButton.disabled = false;
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 6000);
    }
});

// Set up an Intersection Observer to animate sections as they scroll into view
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // Starts when 10% of the section is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Logic for the navigation bar's behavior on scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // If scrolling up, show the navbar
        navbar.style.transform = 'translateY(0)';
    }
    // Add a 'scrolled' class to the navbar when not at the top of the page
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    lastScrollY = window.scrollY; // Update the last scroll position
});

// Add smooth scrolling behavior to all navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});