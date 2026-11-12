let growthStage = 1;

const bonsai =
document.getElementById("bonsai");

const growthText =
document.getElementById("growthText");

function growBonsai(){

    bonsai.classList.add("changing");

    setTimeout(() => {

        growthStage++;

        if(growthStage > 6){

            growthStage = 1;

        }

        bonsai.src =
        `images/bonsai${growthStage}.png`;

        growthText.innerText =
        `${growthStage} / 6`;

        bonsai.classList.remove(
            "changing"
        );

    },400);

}

setInterval(() => {

    growBonsai();

},5000);


// =========================
// GIESSEN
// =========================

function waterPlant(){

    const tank =
    document.getElementById(
        "waterTank"
    );

    tank.innerHTML =
    "💧💧";

    setTimeout(() => {

        tank.innerHTML =
        "";

    },1500);

}


// =========================
// LICHT STEUERUNG
// =========================

function lightOn(){

    const light =
    document.getElementById(
        "lightStatus"
    );

    light.innerText = "EIN";

    light.className =
    "status-on";
}

function lightOff(){

    const light =
    document.getElementById(
        "lightStatus"
    );

    light.innerText = "AUS";

    light.className =
    "status-off";
}
