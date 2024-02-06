const smallJugg = document.querySelectorAll('.smallJug');
let full = document.getElementById('fullness');
const smallJugs = Array.from(smallJugg);
const fullNum = document.getElementById('fullness');
const insideTxt = document.getElementById('insideTxt');
let numOfFulls = 0;
let num = 0;


smallJugs.forEach(function(jug,index){
    
    jug.addEventListener('click', function() {
       
        
       
     if(jug.style.backgroundColor == ''){
        for(let i = 0; i<=index;i++){
            smallJugs[i].style.backgroundColor = 'rgb(6, 176, 191)';
        }
     }

     else{
        
        let allAreOrig = true;
        for(let i = smallJugs.length - 1; i> index; i--){
            if(smallJugs[i].style.backgroundColor != '')
            allAreOrig = false;
        }
      
        if(allAreOrig){
            jug.style.backgroundColor = ''
        }
        else{   
        for(let i = smallJugs.length - 1; i>index; i--){
            smallJugs[i].style.backgroundColor = '';
        }
    }
     }

    numOfFulls = 0;
     for(let i = 0; i< smallJugs.length; i++){
        if(smallJugs[i].style.backgroundColor== 'rgb(6, 176, 191)')
        ++numOfFulls;
     }

     changeHeight();
     changeNum();
  
    });
   
});

function changeHeight(){
full.style.height = `${numOfFulls * 12.5}%`;
insideTxt.style.top = `-${numOfFulls * 16.5}px`

}

function changeNum(){
fullNum.innerHTML = `${(num + numOfFulls)* 12.5}%`;
if(numOfFulls == 0){
    fullNum.innerHTML = '';
}

insideTxt.innerHTML = `${2 - numOfFulls * 0.25}L<br>Remaining<br>`
if(numOfFulls == 8){
    insideTxt.innerHTML = ''
}
}












