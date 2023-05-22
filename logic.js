var a = Math.floor(Math.random() * 10);
var numberOfAttempt = 3;


if (a == 0)
    window.location.href = "treasure_game.html";


function restart() {
    window.location.href = "treasure_game.html";
}


function check(b) {
    var at = document.getElementById("n");
    var st = document.getElementById("v");
    var flag = 0;
    var refButton = document.getElementById(b);
    if (b == a) {
        refButton.style.backgroundImage = "url(treasure.jpg)"
        st.innerText = "YOU WIN!!!";
        flag = 1;
        disabledAll();
    }

    if (flag == 0) {
        refButton.disabled = true;
        refButton.style.opacity = 0;
    //    refButton.style.backgroundImage = "url(thumbDown.png)"
    //    refButton.style.backgroundRepeat = "no-repeat"
    //    refButton.style.border = 0 + "px";
    }
    numberOfAttempt--;

    n.innerText = numberOfAttempt;


    if (numberOfAttempt == 0 && flag != 1) {
        st.innerText = "YOU LOSE!!!";
        disabledAll();
    }
}

function disabledAll() {
    document.getElementById(1).disabled = true;
    document.getElementById(2).disabled = true;
    document.getElementById(3).disabled = true;
    document.getElementById(4).disabled = true;
    document.getElementById(5).disabled = true;
    document.getElementById(6).disabled = true;
    document.getElementById(7).disabled = true;
    document.getElementById(8).disabled = true;
    document.getElementById(9).disabled = true;

}