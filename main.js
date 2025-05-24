let mouseDown = false;
let gridStatus= false;
window.addEventListener("pointerdown", () => mouseDown = true);
window.addEventListener("pointerup", () => mouseDown = false);
function grid(size){
    gridStatus= false;
    let sketch = document.querySelector(".sketch")
    sketch.innerHTML = ""
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i=0;i<Math.pow(size, 2);i++){
    const div = document.createElement("div")
    div.style.backgroundColor="beige"
    div.addEventListener("mouseover",()=>{
        if(mouseDown){
            div.style.backgroundColor="black"
        }
    })
    //
    div.addEventListener("click", () => {
  div.style.backgroundColor = "black";
});
    sketch.appendChild(div)
}
}
document.addEventListener("DOMContentLoaded",()=>grid(16))

const value =document.querySelector("#rangeValue")
const slider = document.querySelector("#range")
slider.oninput=()=>{
    value.textContent=slider.value
    grid(slider.value)
}
 let gd= document.querySelector(".grid")
 let clear = document.querySelector(".clear")
clear.addEventListener("click",function(){
        const block =document.querySelectorAll(".sketch div")
        block.forEach(bk=>{
            bk.style.backgroundColor="beige"

})})
gd.addEventListener("click",function(){
    gridStatus=!gridStatus
    console.log(gridStatus)
     const block = document.querySelectorAll(".sketch div")
    if(gridStatus){
   
    block.forEach((bk)=>{
        bk.style.border="1px solid rgb(0,0,0,0.2)"
    })}
    else{
     block.forEach((bk)=>{
        bk.style.border="0"
    })
    }
})
    