console.log('connected');
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

const seatsString =['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
// get the seat randomly
function getRandomSelectedSeat(){
    // const seatsString =['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
for (let seat = 0; seat < seatsString.length; seat++) {
    const element = seatsString[seat];
    console.log(element);
}
}