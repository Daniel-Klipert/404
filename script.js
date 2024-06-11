const amogus = document.getElementById('amogus');
const imposter = document.getElementById('imposter');

document.addEventListener('keydown', function(event){
    amogusjump();
})

function amogusjump(){
    if (amogus.classList != 'amogusjump'){
        amogus.classList.add('amogusjump');
    }
    setTimeout(function(){
        amogus.classList.remove('amogusjump');
    }, 1000)
}
setInterval(function () {
    let amogusTop = parseInt(window.getComputedStyle(amogus).getPropertyValue('top'));
    let imposterLeft = parseInt(window.getComputedStyle(imposter).getPropertyValue('left'));

    if (imposterLeft < 250 && imposterLeft > 150 && amogusTop > 300) {
        alert("Ты проиграл!!");
    }
}, 5)