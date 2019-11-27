const btnStep1 = document.querySelector("#btn-step-1");
const btnStep2 = document.querySelector("#btn-step-2");
const btnStep3 = document.querySelector("#btn-step-3");
const btnStep4 = document.querySelector("#btn-step-4");

const entityModel = document.querySelector("#entity-model");
const entityScene = document.querySelector("#entity-scene");
const entityDrill = document.querySelector("#entity-drill");
const entityBushes = document.querySelector("#entity-bushes");

//entityModel.pause();
//entityScene.pause();
//entityDrill.pause();
//entityBushes.setAttribute('visible', false);

let activeStep = 1;

function handleClickStep1() {
  alert("aaaa")
}

function handleClickStep2() {
  alert("bbbb")
}

function handleClickStep3() {
  alert("cccc")
}

function handleClickStep4() {
  alert("dddd")
}

function loadEvents() {
  btnStep1.onclick = handleClickStep1;
  btnStep2.onclick = handleClickStep2;
  btnStep3.onclick = handleClickStep3;
  btnStep4.onclick = handleClickStep4;
}

loadEvents();