// api='https://ipgeolocation.abstractapi.com/v1/? api_key =bf0eddc85fdf4d4484d8ba81c0f09079&ip_address = 166.171.248.255'
//api key=bf0eddc85fdf4d4484d8ba81c0f09079

async function foo(){
    let geourl=await fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=bf0eddc85fdf4d4484d8ba81c0f09079")
let geodata=await geourl.json();
console.log(geodata);
let ip=geodata.ip_address
let city=geodata.city
let region=geodata.region
let country=geodata.country
var parentdiv=document.createElement('div')
parentdiv.setAttribute('id','main')
var ptag=document.createElement('p')
ptag.innerHTML=`YOUR IP_ADDRESS :${ip}<br>CITY NAME :${city}<br>REGION :${region}<br>COUNTRY :${country}`
parentdiv.append(ptag)
document.body.append(parentdiv)

}
foo()