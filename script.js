

var btn = document.getElementById('Pegar');
btn.addEventListener('click', function(){
    var senha = document.getElementById('NAME').value
    alert('Parabéns, ' + senha.toUpperCase() + ', seu Ebook foi enviado com sucesso !')
})