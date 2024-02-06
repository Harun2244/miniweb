window.addEventListener("keydown", displayKey);

function displayKey(event){
   
    const container = document.querySelector(".container");
    const startDiv = document.getElementById("insideDiv");
    const scndDiv = document.getElementById("scndDiv");
    const txtAbove = document.getElementById("txtAbove");
     
    let i=0;
    let txts = [event.key, event.keyCode, event.code];
    let aboveText = ["event.key", "event.keyCode", "event.code"];

    if(scndDiv.childElementCount < 3){
    scndDiv.removeChild(startDiv);
    while(i < 3){
        let newDiv = document.createElement("div");
        newDiv.classList.add("style");
        scndDiv.appendChild(newDiv);
        i++;
    }
}

      const styleDivs = Array.from(document.querySelectorAll(".style"));
      const txtDivs = Array.from(document.querySelectorAll(".text"));

     let k=0
     while(k < 3){
        txtDivs[k].textContent = aboveText[k];
        k++;
     }

      scndDiv.style.border = "none";

   

     

      let j=0
      while(j<3){
        styleDivs[j].textContent = txts[j];
        j++;
      }
  
}





