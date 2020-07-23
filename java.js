var x=document.getElementById('search');
x.addEventListener('click',()=>{

    const y=document.getElementById('city').value;
    
  var weather=  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${y}&appid=14a4255834a84c7f67d2327264770fbb`)
  
   .then((respode)=>{
  
       if(respode.status==404){console.log('city not found');alert('city not found')}
          return respode.json();
   }).then((res)=>{
    
var s=document.getElementById('respo');

document.getElementById('city').value=' ';

s.innerHTML=`

<h3 id="city_name">city:  <span style="color:red;  ">  ${res.name}</span></h3>
<h4 id="temp">temprature: <span style="color:red;  ">${res.main.temp}</span></h4>
<h4 id="humidity">humidity:   <span style="color:red;  ">${res.main.humidity}</span></h4>
<h4 id="pressure">pressure:  <span style="color:red;  ">${res.main.pressure}</span></h4>
`

 });





     

});