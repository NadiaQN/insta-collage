$(document).ready(function() {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal({
    dismissible: false
  });
  $('#modal1').modal('open');
  $('#btn-sesion').click(validateInputs);
});

function validateInputs() {
  if ($('#password').val().length < 6 || $('input').val() === ' ' || $('#password').val() === '123456' || $('#first_name').val().length === 0) {
    $('#btn-sesion').attr('disabled');
  } else {
    $('#btn-sesion').addClass('modal-action modal-close');
  }
};

// Con esta función permitimos que los elementos puedan ser arrastrados a otros
function allowDrop(ev) {
  ev.preventDefault();
};

// Con esta función toma el tipo de dato, que es de"texto" y el id del elemento arrastrable
function drag(ev) {
  ev.dataTransfer.setData('text', ev.target.id);
};

// La primera linea de la funcion evita que al soltar el elemento se abra un link
// La segunda linea nos permite obtener el dato que en este caso es de texto
// La tercera linea ingresa el elemento que es arrastable al elemento con el evento drop asignado
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData('text');
  ev.target.appendChild(document.getElementById(data));
};
