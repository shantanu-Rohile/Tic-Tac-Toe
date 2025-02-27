let boxes=document.querySelectorAll(".box");
let h=document.querySelector(".Head");
let true0= true;
let reset=document.querySelector(".reset");
let win_condition=[
                   [0,1,2],
                   [0,3,6],
                   [0,4,7],
                   [3,4,5],
                   [1,4,8],
                   [2,4,6],
                   [6,7,8],
                   [2,5,8]
                ]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(true0){
            box.innerHTML="O"
            true0=false;
        }else{
            box.innerHTML="X"
            true0=true;
        }

        box.disabled=true;
        isWin()
    })
})

let isWin=()=>{
    for(let condition of win_condition){
        let cond1=boxes[condition[0]].innerHTML;
        let cond2=boxes[condition[1]].innerHTML;
        let cond3=boxes[condition[2]].innerHTML;
        console.log(cond1,cond2,cond3)
        if(cond1 !="" && cond2!=""  && cond3!=""){
             if(cond1==cond2 && cond2==cond3){
                  if(cond1=="X"){
                    h.innerHTML="Winner is X"
                    
                  }else{
                    h.innerHTML="Winner is O"
                  }

                  for(box of boxes){
                    box.disabled=true;
                  }
             }
        }
    }
   
}

reset.addEventListener("click",()=>{
    true0= true;
    console.log("Reset")
    for(box of boxes){
        box.innerHTML="";
        box.disabled=false;
    }

    h.innerHTML="Tic Tac Toe";
})