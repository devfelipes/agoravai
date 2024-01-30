
document.addEventListener('DOMContentLoaded', function() {

    function reiniciarAnimacao() {
        var wpp = document.getElementById('whatsapp-button');
        wpp.classList.remove('vibrar');

        setTimeout(function() {
            wpp.classList.add('vibrar');
        }, 2000);
      }
      reiniciarAnimacao();
      setInterval(reiniciarAnimacao, 4000);

      reiniciarAnimacao();
});