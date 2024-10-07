let countEl = document.getElementById("Count")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


function decrement(){
    if(count<1){
        
    }
    else{
    count = count-1 ;
    countEl.innerText = count ;
    }

}