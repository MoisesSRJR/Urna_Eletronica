//Função que será adicionada em todos os elementos da classe .btn
document.querySelectorAll('.btn').forEach((button) => {
    document.getElementById(button.id).addEventListener('click', () => {
        voting (button);
    });
});

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let sondNumber = document.getElementById('sondNumber');
let sondConfirm = document.getElementById('sondConfirm');

function voting (button) {
    if (!num1.value) {
        num1.innerHTML = button.value;
        num1.value = button.value;
        sondNumber.play();
        return
    }
    else if (!num2.value) {
        num2.innerHTML = button.value;
        num2.value = button.value;
        sondNumber.play();
        showCandidate();
    }
}

let nameTitle = document.getElementById('nameTitle');
let nameCandidate = document.getElementById('nameCandidate');
let broken = document.getElementById('brokenCandidate');
let img = document.getElementById('imgPresident');
let legend = document.getElementById('legend');

function showCandidate() {
    if (num1.value == '1' && num2.value == '3') {
        nameTitle.innerText = candidato.lula.name;
        nameCandidate.innerHTML = `name: <b>${candidato.lula.nameComplete}</b>`;
        broken.innerHTML = `Partido: <b>${candidato.lula.broken}</b>`;
        img.style.backgroundImage = candidato.lula.img;
        legend.style.display = 'flex';
    }

    else if (num1.value == '2' && num2.value == '2') {
        nameTitle.innerText = candidato.bolsonaro.name;
        nameCandidate.innerHTML = `name: <b>${candidato.bolsonaro.nameComplete}</b>`;
        broken.innerHTML = `Partido: <b>${candidato.bolsonaro.broken}</b>`;
        img.style.backgroundImage = candidato.bolsonaro.img;
        legend.style.display = 'flex';
    }

    else if (num1.value == '1' && num2.value == '2') {
        nameTitle.innerText = candidato.ciro.name;
        nameCandidate.innerHTML = `name: <b>${candidato.ciro.nameComplete}</b>`;
        broken.innerHTML = `Partido: <b>${candidato.ciro.broken}</b>`;
        img.style.backgroundImage = candidato.ciro.img;
        legend.style.display = 'flex';
    }

    else {
        nameTitle.innerText = 'INVALIDO';
        nameCandidate.innerText = 'INVALIDO';
        broken.innerText = 'INVALIDO';
        img.style.backgroundImage = "url('./images/person-icon.png')";
        legend.style.display = 'none';
        num1.value = null;
        num2.value = null;
    }
}

document.getElementById('btnConfirm').addEventListener('click', confirmVote);

function confirmVote() {

    if (document.getElementById('end').style.display == 'flex') {
        correct();
    } else {

        if (num1.value != null && num2.value != null) {
            document.getElementById('end').style.display = 'flex';
            sondConfirm.play()
        } else {
            console.log('INVALIDO')
        }
    }
}

document.getElementById('btnReplace').addEventListener('click', correct);

function correct() {
    nameTitle.innerText = 'CANDIDATO';
    nameCandidate.innerText = 'Nome:';
    broken.innerText = 'Partido:';
    num1.innerText = '';
    num2.innerText = '';
    num1.value = null;
    num2.value = null;
    sondNumber.play();
    img.style.backgroundImage = "url('./images/person-icon.png')";
    legend.style.display = 'none';
    document.getElementById('end').style.display = 'none';
}

document.getElementById('btnWhite').addEventListener('click', voteWhite);

function voteWhite() {
    nameTitle.innerText = 'VOTAR EM BRANCO';
    nameCandidate.innerText = '';
    broken.innerText = '';
    num1.innerText = '0';
    num2.innerText = '0';
    num1.value = '0';
    num2.value = '0';
    sondNumber.play();
    img.style.backgroundImage = "url('./images/person-icon.png')";
    legend.style.display = 'none';
}

let candidato = {

    lula: {
        name: 'LULA',
        nameComplete: 'LUIS INÁCIO LULA DA SILVA',
        broken: 'PT',
        img: "url('./images/lula.jpg')",
    },

    bolsonaro: {
        name: 'BOLSONARO',
        nameComplete: 'JAIR MESSIAS BOLSONARO',
        broken: 'PSL',
        img: "url('./images/bolsonaro.jpg')",
    },

    ciro: {
        name: 'CIRO GOMES',
        nameComplete: 'CIRO FERREIRA GOMES',
        broken: 'PDT',
        img: "url('./images/ciro.jpg')",
    },
}