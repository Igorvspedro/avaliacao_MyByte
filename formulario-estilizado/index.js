document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if(!name){
    alert('Por favor insira seu nome.');
    document.getElementById('name').focus();
    return;
  }
  if(!email){
    alert('Por favor insira seu e-mail.');
    document.getElementById('email').focus();
    return;
  }

  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!re.test(email)){
    alert('Por favor insira um e-mail válido.');
    document.getElementById('email').focus();
    return;
  }

  alert('Formulário enviado!');
});
