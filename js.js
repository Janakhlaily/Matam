


//כפתור הזנת שם מחלקה - סעיף 1
function addClass() {
    className = document.getElementById('classInput').value;
   document.getElementById('text').className = className;
}

//סעיף 2 

function toggleVisibility(elementId) {
    element = document.getElementById(elementId);
       if (element.classList.contains('visible')) {
           element.classList.remove('visible');
           element.classList.add('hidden');
       } 
       else {
        element.classList.remove('hidden');
        element.classList.add('visible');
       }
   }
    
   // כפתור מ"לחץ עליי" ל"לחץ" -סעיף 3 
   function changeButtonText() {
   button = document.getElementById('myButton');
   button.textContent = "Clicked!";
   button.classList.add('unclickable');
}
