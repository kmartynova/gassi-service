document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  alert('Deine Anfrage wurde gesendet!');

  this.reset();
});
