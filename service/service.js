function generateServicesHTML() {
    // Define an array of services
    const services = [
        {
            name: 'Web Development',
            description: 'We provide web development services using React, JavaScript, HTML, CSS, and jQuery.',
        },
        {
            name: 'Backend Development',
            description: 'We offer backend development services using Node.js and Express.js.',
        },
        {
            name: 'Responsive Design',
            description: 'We produce responsive designs that work seamlessly across all devices.',
        },
        {
            name: 'Animations and Effects',
            description: 'We create engaging user experiences with animations and effects.',
        },
    ];

    // Loop through the services array and generate HTML for each service
    let servicesHTML = '';
    services.forEach(service => {
        servicesHTML += `
            <div class="service">
                <h3>${service.name}</h3>
                <p>${service.description}</p>
            </div>
        `;
    });

    // Append the HTML to the service-list div
    document.getElementById('service-list').innerHTML = servicesHTML;
}

// Call the generateServicesHTML function when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateServicesHTML);
