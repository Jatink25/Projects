let BASE_URL = "https://v6.exchangerate-api.com/v6/e88274a2bc62766d0495629c/latest/INR";

let dropdowns = document.querySelectorAll(".dropdown select");

const button = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");

window.addEventListener("load",()=>{
    updateExchangeRate();
})


for(let select of dropdowns){
    for(currCode in countryList){
        let newOption  = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name == "from" && currCode == "USD"){
            newOption.selected = "selected";
        }else if(select.name == "to" && currCode == "INR"){
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

//update flag
const updateFlag =(element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

button.addEventListener("click", (evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    // let amount = document.querySelector(".amount input");
    // let amtVal = amount.value;
    // if(amtVal == "" || amtVal < 1){
    //     amtVal = 1;
    //     amount.value = amtVal;
        
    // }


    // const url =`https://v6.exchangerate-api.com/v6/e88274a2bc62766d0495629c/latest/${fromCurr.value}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log(data.conversion_rates);

    // let rate = data.conversion_rates[toCurr.value];
    
    
    // let finalAmount = amtVal * rate;

    // msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${toCurr.value}`; 
});

updateExchangeRate = async()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal == "" || amtVal < 1){
        amtVal = 1;
        amount.value = amtVal;
        
    }


    const url =`https://v6.exchangerate-api.com/v6/e88274a2bc62766d0495629c/latest/${fromCurr.value}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.conversion_rates);

    let rate = data.conversion_rates[toCurr.value];
    
    
    let finalAmount = amtVal * rate;

    msg.innerText = `${amtVal}${fromCurr.value} = ${finalAmount}${toCurr.value}`; 
}

