
// hide an element by using this function
function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}

// show a hidden element by this function
function showElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}
//    set a background color function
function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-green-500');
}

//    remove a background color function
function removeBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-amber-400');
}

// get the inner text of an element function 
function getElementTextById(elementId){
    const element =document.getElementById(elementId);
    const text = element.innerText;
}
// set a value as inner text function
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText=value;
}
