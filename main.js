let color="black"
let mouseDown = false;
let gridStatus= false;
let eraser = false;
let random = false;
let shading = false;
let sketch = document.querySelector(".sketch")
sketch.addEventListener("pointerdown", (e) => {
  e.preventDefault();
});
const button3=document.querySelector("#btn3")
const button2=document.querySelector("#btn2")
const button1 = document.querySelector("#btn1")
button3.addEventListener("click",function(){
    shading=!shading
    random=false;
    eraser=false;
    button2.style.boxShadow="none"
    button1.style.boxShadow="none"
    if(shading){
        button3.style.boxShadow = "0 0 20px rgb(250, 185, 8)"
    }
    else if(!shading){
        button3.style.boxShadow="none"
    }

})
button1.addEventListener("click",function(){
    random=false;
    shading=false;
    button2.style.boxShadow="none"
    button3.style.boxShadow="none"
    eraser=!eraser
    if(eraser){
        button1.style.boxShadow = "0 0 20px rgb(250, 185, 8)"
    }
    else if(!eraser){
        button1.style.boxShadow="none"
    }
})
window.addEventListener("pointerdown", () => mouseDown = true);
window.addEventListener("pointerup", () => mouseDown = false);
function grid(size){
    gridStatus= false
    sketch.innerHTML=""
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i=0;i<Math.pow(size, 2);i++){
    const div = document.createElement("div")
    div.style.backgroundColor="beige"
    div.addEventListener("mouseover",()=>{
        if(mouseDown&&!eraser&&!random&&!shading){
            div.style.opacity="0.7"
            div.style.backgroundColor=color
        }
        else if(mouseDown&&eraser&&!random){
            div.style.backgroundColor="beige"
            div.style.opacity=1
        }
        else if(mouseDown&&!eraser&&random&&!shading){
            div.style.opacity="0.7"
            const hue = Math.floor(Math.random() * 360);
            div.style.backgroundColor=`hsl(${hue}, 50%, 60%)`
        }
        else if(mouseDown&&shading&&(parseFloat(div.style.opacity)<1)){
            div.style.opacity=parseFloat(div.style.opacity)+0.05
        }
    })
    div.addEventListener("click", () => {
        if(!eraser&&!random&&!shading){
            div.style.opacity="0.7"
  div.style.backgroundColor = color
        }
        else if(eraser){
            div.style.opacity="1"
            div.style.backgroundColor="beige"
        }
        else if(random){
            div.style.opacity="0.7"
            const hue = Math.floor(Math.random() * 360);
            div.style.backgroundColor=`hsl(${hue}, 70%, 80%)`
        }
        else if(shading&&(parseFloat(div.style.opacity)<1)){
            div.style.opacity=parseFloat(div.style.opacity)+0.05
        }
});
    sketch.appendChild(div)
}
}
document.addEventListener("DOMContentLoaded",()=>grid(16))

const value =document.querySelectorAll("#rangeValue")
const slider = document.querySelector("#range")
slider.oninput=()=>{
    value.forEach(val=>{
        val.innerHTML=slider.value
    })
    grid(slider.value)
}
 const gd= document.querySelector(".grid")
 const clear = document.querySelector(".clear")
clear.addEventListener("click",function(){
        const block =document.querySelectorAll(".sketch div")
        block.forEach(bk=>{
            bk.style.opacity="1"
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
button2.addEventListener("click",()=>{
    random=!random
    shading=false;
    eraser=false;
    button1.style.boxShadow="none"
    button3.style.boxShadow="none"
    if(random){
        button2.style.boxShadow = "0 0 20px rgb(250, 185, 8)"
    }
    else if(!random){
        button2.style.boxShadow="none"
    }
})
const colorpick = document.querySelector("#colorPicker")
colorpick.oninput=function(){
    color=colorpick.value
}
const button4 = document.querySelector("#btn4")
button4.addEventListener("click",function(){
    button1.style.boxShadow="none"
    button2.style.boxShadow="none"
    button3.style.boxShadow="none"
    eraser=false;
    random=false;
    shading=false;
})
    