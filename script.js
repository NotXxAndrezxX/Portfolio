// Scroll to contact section cuando "Hire me" button is clicked
document.getElementById('hire-me-btn').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth'
    });
  });
  
  //  smooth scrolling 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Contact form submission
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Captura de datos del formulario
    const formData = new FormData(e.target);
    const nombre = formData.get('name');
    const email = formData.get('email');
    const mensaje = formData.get('message');
    
    // Puedes agregar aquí la lógica de envío del formulario
    console.log('Formulario enviado:');
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Mensaje:', mensaje);
    
    // Resetear el formulario
    e.target.reset();
  });