const form = document.querySelector("#riskForm");
const riskResult = document.querySelector("#riskResult");
const resultContainer = document.querySelector("#resultContainer");
const clearButton = document.querySelector("#btnClear");
const submitButton = document.querySelector("#btnSubmit")
const finImpact = document.querySelector("#financialImpact");
const repImpact = document.querySelector("#reputationalImpact");
const riskTitle = document.querySelector("#riskTitle");
const finImpactNum = document.querySelector("#finImpactNum"); 

let finImpactState = false;
let repImpactState = false;
let numImpact = 0;

let impactLang = [];
let impactResult = "";


finImpact.addEventListener('change',function(e){
    finImpactState = finImpact.checked;
    if(finImpact.checked) {
        finImpactNum.style.display = "block";
        numImpact +=1}
    else{
        finImpactNum.style.display = "none";
        finImpactAmt.value = "";
        numImpact -=1
        }
})

repImpact.addEventListener('change',function(e){
    repImpactState = finImpact.checked;
    if(repImpact.checked) {
        numImpact +=1
    } else {
        numImpact -=1;
    }
})



form.addEventListener('submit',async function(e){
    e.preventDefault();
    riskResult.innerText="";
    let riskEvent = form.elements.riskEvent.value;
    let riskConseq = form.elements.riskConseq.value;
    let riskCause = form.elements.riskCause.value;
    let riskProb = form.elements.prob.value;
    let title = form.elements.riskTitle.value;
    let finImpactAmt = form.elements.finImpactAmt.value;
    if(finImpact.checked) {impactLang.push(`financial impact of $${finImpactAmt}.00`)};
    if(repImpact.checked) {impactLang.push("reputational impact")};
    if(impactLang.length <= 0) {impactResult = "no impact"}
    else {
        impactLang.forEach(function(item){
            let i = impactLang.length-1;
            if (item != impactLang[i]){
                impactResult += `${item} and `
            } else {impactResult += `${item}`}
        })};
    riskTitle.append(`Risk Title: ${title}`);
    riskResult.append(`The risk of ${riskEvent} due to ${riskCause} with a probability of occurrence of ${riskProb}%, may result in ${riskConseq} with ${impactResult}.`);
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
     form.elements.finImpactAmt.value = "";
     finImpactNum.style.display = "none";
     form.elements.prob.value = 50;
     finImpact.checked = false;
     repImpact.checked = false;
     impactLang = [];
     impactResult = "";
     submitButton.disabled=false;
    });


