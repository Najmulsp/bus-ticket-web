let count =40;
let increase =0;
const seats =document.getElementsByClassName('chair');
for(const seat of seats){
    seat.addEventListener("click", function(){
        seat.classList.add('bg-green-500');
        
        count =count-1;
        document.getElementById('remain-seats').innerText=count;
        
        increase =increase + 1;
        document.getElementById('increase-selected').innerText=increase;
        
    })
}


function chooseTicket(){
    showElementById('ticketing');   
}
