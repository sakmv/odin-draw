let color="black"
let mouseDown = false;
let gridStatus= false;
let eraser = true;
let random = false;
let shading = false;

const button4 = document.querySelector("#btn4")
const button3=document.querySelector("#btn3")
const button2=document.querySelector("#btn2")
const button1 = document.querySelector("#btn1")
const sketch = document.querySelector(".sketch")
const value =document.querySelectorAll("#rangeValue")
const slider = document.querySelector("#range")
const gd= document.querySelector(".grid")
const clear = document.querySelector(".clear")
const colorpick = document.querySelector("#colorPicker")

//BUTTON( 1-4 )CLICK ACTIONS
button1.addEventListener("click",function(){
    eraser=!eraser
    random=false;
    shading=false;
    button2.style.boxShadow="none"
    button3.style.boxShadow="none"
    if(eraser){
        button1.style.boxShadow = "0 0 20px rgb(250, 185, 8)"
    }
    else if(!eraser){
        button1.style.boxShadow="none"
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
button4.addEventListener("click",function(){
    eraser=false;
    random=false;
    shading=false;
    button1.style.boxShadow="none"
    button2.style.boxShadow="none"
    button3.style.boxShadow="none"
})

//TO ENABLE DRAG AND DRAW FEATURE
window.addEventListener("pointerdown", () => mouseDown = true);
window.addEventListener("pointerup", () => mouseDown = false);

//TO PREVENT GHOST IMAGE DRAG DURING DRAWING ON THE SKETCHBOARD
sketch.addEventListener("pointerdown", (e) => {
  e.preventDefault();
});

//FUNCTION TO CREATE GRID AND ADD EVENT LISTENERS TO DRAW
function grid(size){
    gridStatus= true
    sketch.innerHTML=""
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i=0;i<Math.pow(size, 2);i++){
    const div = document.createElement("div")
    div.style.backgroundColor="beige"
    div.style.border="1px solid rgb(0,0,0,0.2)"
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

//LOADS GRID OF DIMENSION 16X16 AFTER DOM HAS LOADED
document.addEventListener("DOMContentLoaded",()=>grid(16))

//TO FORM GRID ON THE INPUT FROM SLIDER
slider.oninput=()=>{
    value.forEach(val=>{
        val.innerHTML=slider.value
    })
    grid(slider.value)
}

//CLEARS THE GRID
clear.addEventListener("click",function(){
        const block =document.querySelectorAll(".sketch div")
        block.forEach(bk=>{
            bk.style.opacity="1"
            bk.style.backgroundColor="beige"

})})

//GRID BORDER TURN ON AND OFF
gd.addEventListener("click",function(){
    gridStatus=!gridStatus
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

//TAKE COLOR AS INPUT
colorpick.oninput=function(){
    color=colorpick.value
}


    