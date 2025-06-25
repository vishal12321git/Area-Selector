const main = document.querySelector(".main");
function renderBox(){
    main.innerHTML="";
    for(let row=1;row<=11;row++){
        for(let col=1;col<=22;col++){
            const div = document.createElement("div");
            div.id = `${row}/${col}`;
            div.classList.add("h-14","w-14","border-1");
            div.textContent= `${row}/${col}`;
            main.appendChild(div);
        }
    }
}
renderBox();
let clicked=false;
let initialClickedId="";
main.addEventListener("mousedown",(e)=>{
    clicked=true;
    initialClickedId=e.target.id;
})
main.addEventListener("mouseover",(e)=>{
    if(clicked==true){
        renderBox();
        select(e.target.id);
    }
        
})
main.addEventListener("mouseup",(e)=>{
    clicked=false;
    initialClickedId="";
    renderBox();
})
function select(id){
    if(!clicked) return;
    let rowStart = Math.min(+initialClickedId.split("/")[0],+id.split("/")[0]);
    let colStart = Math.min(+initialClickedId.split("/")[1],+id.split("/")[1]);
    let rowEnd = Math.max(+initialClickedId.split("/")[0],+id.split("/")[0]);
    let colEnd = Math.max(+initialClickedId.split("/")[1],+id.split("/")[1]);
    for(let row=rowStart;row<=rowEnd;row++){
        for(let col=colStart;col<=colEnd;col++){
            let element=document.getElementById(`${row}/${col}`);
            element.classList.toggle("bg-blue-200");
            console.log(element)
        }
    }
}