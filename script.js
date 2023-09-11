// JavaScript para o botão de cópia de IP
document.querySelector('.copy-ip-button').addEventListener('click', function() {
    var ipSpan = document.querySelector('.ip-address');
    var ipText = ipSpan.innerText;
    
    var tempInput = document.createElement('input');
    tempInput.value = ipText;
    
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    
    alert('IP copiado para a área de transferência: ' + ipText);
});
