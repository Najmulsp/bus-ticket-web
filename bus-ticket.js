let count =40;
let increase =0;
const seats =document.getElementsByClassName('chair');
for(const seat of seats){
   seat.addEventListener("click", function(){

    seat.setAttribute("disabled",false);

    const jajaho =document.getElementById('increase-selected').innerText
    if(jajaho >3){
        alert('you could not pursage more than four tickets');
        return
    }
    
        seat.classList.add('bg-green-500');
        // show available seats
        count =count-1;
        document.getElementById('remain-seats').innerText=count;

        
        // show selected count
        increase =increase + 1;
   const ektaMan = document.getElementById('increase-selected').innerText=increase;
//         if (ektaMan <= 4) {
   
        // create and append choosed seat
        const yourSeat =document.getElementById('your-seat');
        const li =document.createElement("li");
        const p1 =document.createElement("p");
        p1.innerText=seat.innerText;
        const p2 =document.createElement("p");
        p2.innerText='Economy';
        const p3 =document.createElement("p");
        p3.innerText='550';
        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);
        
        li.classList.add('flex');
        li.classList.add('gap-8');
        li.classList.add('lg:gap-24');
        yourSeat.appendChild(li);
// add total price
const totalPrice =document.getElementById('total-price').innerText;
const totalPriceNumber =parseInt(totalPrice); 
document.getElementById('total-price').innerText = totalPriceNumber + 550;
// add grand total price
const grandPrice =document.getElementById('grand-price').innerText;
const grandPriceNumber =parseInt(grandPrice); 
document.getElementById('grand-price').innerText = grandPriceNumber + 550;


})
        
}   


  


//document.getElementsByClassName('chair').classList.add('disabled');
// document.getElementsByClassName('chair').disabled = true;

    


// const fourSeats = document.getElementById('increase-selected').innerText;
// const fourSeatsNumber =parseInt(fourSeats);
// console.log(fourSeatsNumber)
// if(fourSeatsNumber > 4){
//     seat.setAttribute.setAttribute("disabled", "");
// } 

function discountCoupon(){
    const finalPrice =document.getElementById('total-price').innerText;
    const finalPriceNumber =parseInt(finalPrice);

    // get the value of coupon input
    const couponValue =document.getElementById('coupon').value;
    if(couponValue === "NEW15"){
        const discountPrice = finalPriceNumber * 0.15;
         document.getElementById('grand-price').innerText =finalPrice -discountPrice;
         document.getElementById('coupon').classList.add('hidden');
         document.getElementById('apply').classList.add('hidden'); 
    }
    
    else if(couponValue === "Couple20"){
        const discountedPrice = finalPriceNumber * 0.2;
        document.getElementById('grand-price').innerText =finalPrice -discountedPrice;
          document.getElementById('coupon').classList.add('hidden');
          document.getElementById('apply').classList.add('hidden'); 
    }

}
