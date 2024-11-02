const databaseURL = 'https://sgomez-dawm-default-rtdb.firebaseio.com/curriculum.json'; 

let sendData = ( ) => {  

  // Obtén los datos del formulario
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries()); // Convierte FormData a objeto
  // new Date().toLocaleString( locales, options )
  data['saved'] = new Date().toLocaleString('es-CO', { timeZone: 'America/Guayaquil' })
  // Realiza la petición POST con fetch
  fetch(databaseURL, {
    method: 'POST', // Método de la solicitud
    headers: {
        'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
    },
    body: JSON.stringify(data) // Convierte los datos a JSON
  })
  .then(response => {
      if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      return response.json(); // Procesa la respuesta como JSON
  })
  .then(result => {
      alert('Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces'); // Maneja la respuesta con un mensaje
      form.reset()
  })
  .catch(error => {
      alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
  });

}


let ready = () => {
  console.log('DOM está listo')
  //debugger
}

let loaded = ( eventLoaded ) => {
  //console.log('Iframes e Images cargadas')
  let myform = document.getElementById('form');
     
  myform.addEventListener('submit', (eventSubmit) => {
      eventSubmit.preventDefault(); 
            
      const emailElement = document.querySelector('.form-control-lg');
      const emailText = emailElement.value;

/*
      document.querySelector("form").addEventListener("submit", function (event) {
        // Obtener los valores de los campos
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const experiencia = document.getElementById("experiencia").value.trim();
    
        // Validar que los campos requeridos no estén vacíos
        if (!nombre || !email || !experiencia) {
            event.preventDefault(); // Evitar el envío del formulario
            alert("Por favor, complete los campos obligatorios: Nombre, Correo Electrónico y Experiencia Laboral.");
        }
    });
    
*/




      if (emailText.length === 0) {
        emailElement.animate(
          [ 
          //{transform: "translateY(0)"}, 
          {transform: "translateX(0)"},           
          //{ transform: "translateY(50px)" },    
          { transform: "translateX(50px)" },
          //{ transform: "translateY(-50px)" },
          { transform: "translateX(-50px)" },
          //{ transform: "translateY(0)" },    
          { transform: "translateX(0)" }
          ], 
          {
          duration: 250,
          easing: "linear",
          }
        )
      
        emailElement.focus();
        return;
      }
      sendData();
  })
}
window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)


//FALTA TERMINAR