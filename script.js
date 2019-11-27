const btnStep1 = document.querySelector("#btn-step-1");
const btnStep2 = document.querySelector("#btn-step-2");
const btnStep3 = document.querySelector("#btn-step-3");
const btnStep4 = document.querySelector("#btn-step-4");
const btnNextStep = document.querySelector("#btn-next-step");

const entityModel = document.querySelector("#entity-model");
const entityScene = document.querySelector("#entity-scene");
const entityDrill = document.querySelector("#entity-drill");
const entityBushes = document.querySelector("#entity-bushes");

const aTextInitial = document.querySelector("#text-inicial")
const aTextMsg = document.querySelector("#text-msg")

//entityModel.pause();
//entityScene.pause();
//entityDrill.pause();
//entityBushes.setAttribute('visible', false);

let activeStep = 0;

const msgs = {
  1: "Verifique se o tripe esta posicionado entre a broca e a parede.",
  2: "Voce devera aproximar o tripe da parede, segurar enquanto realiza o furo.",
  3: "Com isso, o furo ficara sempre reto, evitando furar em local indesejado.",
  4: "Parabens!! Agora seu furo esta como planejado!!"
}

function updateMsg() {
  const totalMsgs = Object.keys(msgs).length;
  
  if(activeStep == totalMsgs) {
    btnNextStep.disabled = true;
    btnNextStep.innerText = `Fim`;
    aTextMsg.setAttribute("value", msgs[activeStep]);
  } else {
    btnNextStep.disabled = false;
    btnNextStep.innerText = `Ir para etapa ${activeStep+1}`;
    aTextMsg.setAttribute("value", msgs[activeStep]);
    return;
  }
  
}

function handleInitSteps() {
  btnStep1.disabled = false;
}

function handleClickStep1() {
  btnStep1.disabled = false;
  activeStep = 1;
  updateMsg();
}

function handleClickStep2() {
  btnStep2.disabled = false;
  activeStep = 2;
  updateMsg();
}

function handleClickStep3() {
  btnStep3.disabled = false;
  activeStep = 3;
  updateMsg();
}

function handleClickStep4() {
  btnStep4.disabled = false;
  activeStep = 4;
  updateMsg();
}

function handleClickNextStep() {
  activeStep = activeStep + 1;  
  switch(activeStep) {
    case 1:
      btnStep1.disabled = false;
      break;
    case 2:
      btnStep2.disabled = false;
      break;
    case 3:
      btnStep3.disabled = false;
      break;
    case 4:
      btnStep4.disabled = false;
      break;
  }  
  updateMsg();  
}

function loadEvents() {
  btnStep1.onclick = handleClickStep1;
  btnStep2.onclick = handleClickStep2;
  btnStep3.onclick = handleClickStep3;
  btnStep4.onclick = handleClickStep4;
  btnNextStep.onclick = handleClickNextStep;
}

loadEvents();
