/*let elemento = {
    a:function (){
    console.log("Starting ...")},
    b: function (){
        console.log("Starting ... 2")
    }
}
window.addEventListener("load",elemento);*/
function imprimeHola(){
    console.log("Hola");
}
const imprimeElements = (elementos)=>{
    console.log(`Los elementos: \n ${elementos}`);
}

const imprimeLosDivs = (elementos)=>{
    for(let item of elementos){console.log(item)}
}

const doyEvento = (elementos)=>{
    for(let item of elementos){
        console.log(item)
        /*item.addEventListener("pointerenter",()=>{console.log("elemento ")});*/
        item.addEventListener("pointerenter",(item)=>{console.log("elemento ",item)});
    }
}

function main(){
    console.log("Starting ...")
    const titulo = document.querySelector("h1");
    titulo.addEventListener("pointerenter",imprimeHola);

    const elements = Array.from(
        document.body.querySelectorAll("*")
    );
        imprimeElements(elements);
        imprimeLosDivs(elements);
        doyEvento(elements)
}
/*window.addEventListener("load",main);*/
