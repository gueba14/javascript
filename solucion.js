// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  
    // 1. Obtenemos el formulario
    const formulario = document.getElementById('registroForm');
    
    // 2. Agregamos el evento submit al formulario
    formulario.addEventListener('submit', function(e) {
      // Prevenimos el envío automático del formulario
      e.preventDefault();
      
      // Validamos todos los campos
      const nombreValido = validarNombre();
      const apellidoValido = validarApellido();
      const edadValida = validarEdad();
      const emailValido = validarEmail();
      const passwordValida = validarPassword();
      const generoValido = validarGenero();
      const interesesValidos = validarIntereses();
      const terminosValidos = validarTerminos();
      
      // Si todo es válido, mostramos mensaje de éxito
      if (nombreValido && apellidoValido && edadValida && emailValido && 
          passwordValida && generoValido && interesesValidos && terminosValidos) {
        mostrarExito();
      }
    });
    
    // 3. Validación para el campo Nombre
    function validarNombre() {
      const nombre = document.getElementById('nombre').value.trim();
      const error = document.getElementById('nombre-error');
      
      // Expresión regular: solo letras y espacios
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
      
      if (nombre === '') {
        error.textContent = 'El nombre es obligatorio';
        return false;
      } else if (!regex.test(nombre)) {
        error.textContent = 'Solo letras (mínimo 3 caracteres)';
        return false;
      } else {
        error.textContent = '';
        return true;
      }
    }
    // 3. Validación para el campo apellido
    function validarApellido() {
      const apellido = document.getElementById('apellido').value.trim();
      const error = document.getElementById('apellido-error');
      
      // Expresión regular: solo letras y espacios
      const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,}$/;
      
      if (apellido === '') {
        error.textContent = 'El apellido es obligatorio';
        return false;
      } else if (!regex.test(apellido)) {
        error.textContent = 'Solo letras (mínimo 3 caracteres)';
        return false;
      } else {
        error.textContent = '';
        return true;
      }
    }
    // validar edad
    function validarEdad() {
      const edadInput = document.getElementById('edad');
      const edad = edadInput.value.trim();
      const error = document.getElementById('edad-error');
    
      if (edad === '') {
        error.textContent = 'La edad es obligatoria';
        return false;
      }
    
      const edadNumero = Number(edad);
    
      if (isNaN(edadNumero)) {
        error.textContent = 'La edad debe ser un número válido';
        return false;
      }
    
      if (edadNumero < 18 || edadNumero > 99) {
        error.textContent = 'La edad debe estar entre 18 y 99 años';
        return false;
      }
    
      error.textContent = '';
      return true;
    }
    
    // 4. Validación para el campo Email
    function validarEmail() {
      const email = document.getElementById('email').value.trim();
      const error = document.getElementById('email-error');
      
      // Expresión regular para email válido
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      
      if (email === '') {
        error.textContent = 'El email es obligatorio';
        return false;
      } else if (!regex.test(email)) {
        error.textContent = 'Formato inválido (ej: usuario@dominio.com)';
        return false;
      } else {
        error.textContent = '';
        return true;
      }
    }
    
    // 5. Validación para la Contraseña
    function validarPassword() {
      const password = document.getElementById('password').value;
      const error = document.getElementById('password-error');

      if (password === '') {
        error.textContent = 'La contraseña es obligatoria';
        return false;
      }

      // Verificamos los requisitos mínimos
      const tieneLongitud = password.length >= 8;
      const tieneNumero = /\d/.test(password);
      const tieneMayuscula = /[A-Z]/.test(password);

      if (!tieneLongitud || !tieneNumero || !tieneMayuscula) {
        error.textContent = 'La contraseña debe tener al menos 8 caracteres, incluir un número y una letra mayúscula';
        return false;
      }

      error.textContent = '';
      return true;
    }

    //6. validar Genero:
    function validarGenero() {
      const genero = document.getElementById('genero').value;
      const error = document.getElementById('genero-error');
    
      if (genero === '') {
        error.textContent = 'Debe seleccionar una opción de género';        
        return false;
      } else {
        error.textContent = '';
        return true;
      }
    }
    
    // 7. Validación para los Intereses (checkbox)
    function validarIntereses() {
      const checkboxes = document.querySelectorAll('input[name="intereses"]:checked');
      const error = document.getElementById('intereses-error');
      
      if (checkboxes.length === 0) {
        error.textContent = 'Selecciona al menos un interés';
        return false;
      } else {
        error.textContent = '';
        return true;
      }
    }
    // 8. validar terminos
    function validarTerminos() {
      const terminos = document.getElementById('terminos');
      const error = document.getElementById('terminos-error');
    
      if (!terminos.checked) {
        error.textContent = 'Debes aceptar los términos y condiciones';
        return false;
      }
    
      error.textContent = '';
      return true;
    }
    
    // 9. Función para mostrar éxito
    function mostrarExito() {
      const mensajeExito = document.getElementById('success-message');
      mensajeExito.textContent = '¡Registro exitoso!';
      mensajeExito.style.display = 'block';
      
      // Opcional: Limpiar el formulario después de 3 segundos
      setTimeout(() => {
        formulario.reset();
        mensajeExito.style.display = 'none';
      }, 3000);
    }
    
    // 9. Agregamos eventos "blur" para validar al salir del campo
    document.getElementById('nombre').addEventListener('blur', validarNombre);
    document.getElementById('nombre').addEventListener('input', validarNombre);

    document.getElementById('apellido').addEventListener('blur', validarApellido);
    document.getElementById('apellido').addEventListener('input', validarApellido);

    document.getElementById('email').addEventListener('blur', validarEmail);
    document.getElementById('edad').addEventListener('blur', validarEdad);
    document.getElementById('password').addEventListener('blur', validarPassword);
    document.getElementById('genero').addEventListener('blur', validarGenero);

    // Genero y términos no siempre reaccionan bien al "blur":
    // Aunque no es un error, ten en cuenta lo siguiente:

    // - El campo "select" (género) puede no disparar "blur" si nunca se enfoca.
    // - El checkbox (términos) responde mejor con el evento "change" que con "blur".

    // Por lo tanto, en lugar de usar "blur" en "terminos":
    //document.getElementById('terminos').addEventListener('blur', validarTerminos);

    // Opcionalmente podrías reemplazarlo por el evento "change":
    document.getElementById('terminos').addEventListener('change', validarTerminos);

    // Para los checkboxes, no se usa "blur" porque no son un solo campo,
    // sino un grupo de inputs. En su lugar, escuchamos el evento "change"
    // en cada uno para validar cuando se selecciona o deselecciona.
    const checkboxes = document.querySelectorAll('input[name="intereses"]');
    checkboxes.forEach(cb => cb.addEventListener('change', validarIntereses));


    
  });

  /*
  Explicación Clave para Alumnos
1. addEventListener
Es el método para "escuchar" eventos en elementos HTML.

Sintaxis: elemento.addEventListener('evento', funcion)

Ejemplos de eventos útiles:

'submit': cuando se envía un formulario

'blur': cuando sales de un campo

'input': cuando escribes en un campo

2. e.preventDefault()
¿Qué hace? Detiene el comportamiento por defecto de un evento.

¿Por qué usarlo en formularios?

Sin esto, la página se recargaría al enviar el formulario.

Nos permite validar primero y decidir si se envía o no.

3. Validaciones Paso a Paso
Nombre/Apellido:

Usamos trim() para quitar espacios al inicio/final.

Con regex verificamos que solo tenga letras.

Email:

La expresión regular verifica: usuario@dominio.ext

Contraseña:

Verificamos 3 condiciones por separado para dar feedback claro.

Checkbox grupo:

querySelectorAll cuenta cuántos están seleccionados.

4. Feedback Visual
Cada función de validación:

Retorna true/false (válido/inválido).

Muestra/oculta mensajes de error.

Consejos para Estudiantes
Empieza por las validaciones simples (nombre, email) antes de las complejas (contraseña).

Usa console.log() para ver qué valores están recibiendo tus funciones.

Prueba cada validación por separado antes de integrarlas.

Consulta la documentación sobre:

Expresiones regulares (regex)

Métodos de strings (trim, test)

Manejo de formularios
  
  
  
  */