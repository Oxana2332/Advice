document.addEventListener("DOMContentLoaded",
function(event) {
fetch("https://api.adviceslip.com/advice")
.then(response => response.json())
.then(slip => 
    {
        document.getElementById('id').innerText=slip.slip.id;
        document.getElementById('advice').innerText=slip.slip.advice;
    })
.catch(error => console.log(error));
});