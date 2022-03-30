let demo = document.getElementById('demo');
setInterval (function (){
 let date = new Date();
 demo.innerHTML = date.toLocaleTimeString();
},1000)