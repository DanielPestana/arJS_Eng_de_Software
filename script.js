const btnStep1 = document.querySelector("#btn-step-1");
const btnStep2 = document.querySelector("#btn-step-2");
const btnStep3 = document.querySelector("#btn-step-3");

const entityModel = document.querySelector("#entity-model");
const entityScene = document.querySelector("#entity-scene");
const entityDrill = document.querySelector("#entity-drill");

const entityDrillStep2 = document.querySelector("#entity-drill-step-2");
const entityDrillStep3 = document.querySelector("#entity-drill-step-3");

const animationDrill = document.querySelector("#animation-drill");


const aTextInitial = document.querySelector("#text-inicial")
const aTextMsg = document.querySelector("#text-msg")

let activeStep = 1;

const msgs = {
  1: "POSICIONE O TRIPE",
  2: "APROXIME A FURADEIRA",
  3: "REALIZE A FURACAO",
}

function updateMsg() {
  const totalMsgs = Object.keys(msgs).length;
  
  if(activeStep == totalMsgs) {
    aTextMsg.setAttribute("value", msgs[activeStep]);
  } else {
    aTextMsg.setAttribute("value", msgs[activeStep]);
    return;
  }
  
}

function handleInitSteps() {
  btnStep1.disabled = false;
}

function handleClickStep1() {
  entityDrillStep2.setAttribute('visible', false);
  entityDrillStep3.setAttribute('visible', false);
  btnStep1.disabled = true;
  btnStep2.disabled = false;
  btnStep3.disabled = false;
  activeStep = 1;
  updateMsg();
}

function handleClickStep2() {
  entityDrillStep2.setAttribute('visible', true);
  entityDrillStep3.setAttribute('visible', false);
  
  btnStep2.disabled = true;
  btnStep1.disabled = false;
  btnStep3.disabled = false;
  activeStep = 2;
  updateMsg();
}

function handleClickStep3() {
  entityDrillStep2.setAttribute('visible', false);
  entityDrillStep3.setAttribute('visible', true);
  
  btnStep3.disabled = true;
  btnStep1.disabled = false;
  btnStep2.disabled = false;
  activeStep = 3;
  updateMsg();
}

function loadEvents() {
  btnStep1.onclick = handleClickStep1;
  btnStep2.onclick = handleClickStep2;
  btnStep3.onclick = handleClickStep3;
}

loadEvents();
updateMsg();
