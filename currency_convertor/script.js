let url = "https://v6.exchangerate-api.com/v6/e88274a2bc62766d0495629c/latest/INR";


const dropdowns= document.querySelectorAll(".dropdown select");



let btn = document.querySelector(".btn");
let msg = document.querySelector(".msg");

let enter = document.querySelector("#e_amount input");
let convert = document.querySelector("#c_amount input");

// for (let code in countryList){
//     console.log(code)};
for (let select of dropdowns){
    for(let code in countryList){
        let opt = document.createElement("option");
        opt.innerText=code;
        opt.value=code;
        if((select.name ==="from" && code==="USD")){
            opt.selected="selected";
        }
        else if((select.name ==="to" && code==="INR")){
            opt.selected="selected";
        }
        select.append(opt);
    }

    select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);    
    })

}

const updateFlag=(element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

let amount = document.querySelector(".amount input")
let amtValue= amount.value;

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    if(amtValue=="" || amtValue<1){
        amtValue=1;
        amount.value="1";
    }
let select1= document.querySelector("#select_from").value;
    url=`https://v6.exchangerate-api.com/v6/e88274a2bc62766d0495629c/latest/${select1}`;
    let response= await fetch(url);
let data = await response.json();

console.log(data.conversion_rates);
let con_rates = data.conversion_rates;
let select2 =  document.querySelector("#select_to").value;
await console.log(con_rates[select2]);
let msg = document.querySelector(".msg");
msg.innerText=`1${select1} = ${con_rates[select2]} ${select2}`
value1 = enter.value;
convert.value = value1 * (con_rates[select2]);



})








