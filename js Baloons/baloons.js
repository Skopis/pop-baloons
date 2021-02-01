console.log('baloons');

// Model:
var gBaloons = [
    { id: 1, bottom: 0, speed: 3 },
    { id: 2, bottom: 0, speed: 2 },
    { id: 3, bottom: 0, speed: 4 },
    { id: 4, bottom: 0, speed: 6 },
    { id: 5, bottom: 0, speed: 5 },
    { id: 6, bottom: 0, speed: 7 },
    { id: 7, bottom: 0, speed: 8 },
    { id: 7, bottom: 0, speed: 9 },
    { id: 7, bottom: 0, speed: 1 }
];
var gIntervalId;

//initiate game
function init() {
    renderBaloons(gBaloons);
}

function startFloat() {
    gIntervalId = setInterval(moveBaloons, 50);
}

function moveBaloons() {

    // Dom:
    var elBaloons = document.querySelectorAll('.baloon');

    for (var i = 0; i < gBaloons.length; i++) {
        // Model:
        var baloon = gBaloons[i];
        // Dom:
        var elBaloon = elBaloons[i];

        // Update Model:
        baloon.bottom += baloon.speed;
        // Update Dom:
        elBaloon.style.marginBottom = baloon.bottom + 'px';

        if (baloon.buttom > 50) { //????
            clearInterval(gIntervalId);
        }
    }
}

function renderBaloons() {
    var strHTML = ''
    for (var i = 0; i < gBaloons.length; i++) {
        strHTML += '<div class="baloon baloon' + (i + 1) +
            '"onclick="popBaloon(' + i + ') " ></div>';
    }

    console.log(strHTML);
    var elSky = document.querySelector('.sky');
    elSky.innerHTML = strHTML;
}

function popBaloon(idx) {
    var elBaloons = document.querySelectorAll('.baloon');
    var elBaloon = elBaloons[idx];
    elBaloon.style.display = 'none';
    var audioElement = new Audio('popsound.wav');
    audioElement.play();
}

