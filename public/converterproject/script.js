let form = document.getElementById('input-and-output')
form.addEventListener('keyup', calc);

function calc(e){
    let miles = document.getElementById('miles').value;
    let litres = document.getElementById('litres').value;
    let gallons = litres*0.219969;
    let mpg = miles/gallons;
    
    if(litres > 0 && miles > 0){
        document.getElementById('mpgresult').innerHTML = mpg.toFixed(2);
    } else {
        document.getElementById('mpgresult').innerHTML = '';
    }
}
