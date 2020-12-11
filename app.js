const form = document.querySelector("#riskForm");
const riskResult = document.querySelector("#riskResult");
const resultContainer = document.querySelector("#resultContainer");
const clearButton = document.querySelector("#btnClear");
const submitButton = document.querySelector("#btnSubmit")
const finImpact = document.querySelector("#financialImpact");
const repImpact = document.querySelector("#reputationalImpact");
const riskTitle = document.querySelector("#riskTitle");

// let resultFinancialImpact = false;
let impactLang = [];
let impactResult = "";

// finImpact.addEventListener('change', function(e){
//     resultFinancialImpact = finImpact.checked;
//     if(resultFinancialImpact = true) {
//         impactLang.push("financial");
//     }})


form.addEventListener('submit',async function(e){
    e.preventDefault();
    riskResult.innerText="";
    let riskEvent = form.elements.riskEvent.value;
    let riskConseq = form.elements.riskConseq.value;
    let riskCause = form.elements.riskCause.value;
    let riskProb = form.elements.prob.value;
    let title = form.elements.riskTitle.value;
    if(finImpact.checked) {impactLang.push("financial")};
    if(repImpact.checked) {impactLang.push("reputational")};
    impactLang.forEach(element => impactResult += `${element},`);
    riskTitle.append(`Risk Title: ${title}`);
    riskResult.append(`The risk of ${riskEvent} due to ${riskCause} with a probability of occurrence of ${riskProb}%, may result in ${riskConseq} with ${impactLang} impact`);
    resultContainer.style.display = "block";
    submitButton.disabled=true;
    })

clearButton.addEventListener('click',async function(e){
     e.preventDefault();
     riskResult.innerText="";
     riskTitle.innerText="";
     resultContainer.style.display = "none";
     form.elements.riskEvent.value = "";
     form.elements.riskConseq.value = "";
     form.elements.riskCause.value = "";
     form.elements.riskTitle.value = "";
     form.elements.prob.value = 50;
     finImpact.checked = false;
     repImpact.checked = false;
     impactLang = [];
     impactResult = "";
     submitButton.disabled=false;
    })