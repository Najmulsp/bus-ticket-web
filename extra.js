// document.getElementById('seat').addEventListener('click',function(){
    //     setBackgroundColorById('seat');
    // })
    const faltu =document.getElementById('')
    function getSelectedSeat(){
        const seatsString =['A1', 'A2', 'A3', 'A4', 'B1', 'B2', 'B3', 'B4', 'C1', 'C2', 'C3', 'C4', 'D1', 'D2', 'D3', 'D4', 'E1', 'E2', 'E3', 'E4', 'F1', 'F2', 'F3', 'F4', 'G1', 'G2', 'G3', 'G4', 'H1', 'H2', 'H3', 'H4', 'I1', 'I2', 'I3', 'I4', 'J1', 'J2', 'J3', 'J4'];
    
        for(seat of seatsString){
            document.getElementById('seat').addEventListener('click',function(){
                setBackgroundColorById('seat');
            })
        }
    }
    const remainSeats =document.getElementById('remain-seats').innerText;
    const remainSeatsNumber =parseInt(remainSeats);
    console.log(count)
    // const remainingSeats -1 = remainSeatsNumber;
    // console.log(remainingSeats)







