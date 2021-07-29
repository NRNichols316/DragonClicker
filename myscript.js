var myClick = document.getElementById("spAir");

    myClick.addEventListener("click", myFunctionAir);
    let intCounter = 0 ;
    function myFunctionAir() {
        intCounter = intCounter + 1;
        document.getElementById('lblCounterAir').innerHTML = intCounter;
       
    }

    var myClick2 = document.getElementById("spEarth");

    myClick2.addEventListener("click", myFunctionEarth);
    let intCounter2= 0 ;
    function myFunctionEarth() {
        intCounter2++;
        document.getElementById('lblCounterEarth').innerHTML = intCounter2;
       
    }