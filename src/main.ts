import { CreateElements } from "./module/createElements";
import { App } from "./module/App";

console.log("Hello World!");

new CreateElements().makeElements();

let userInfo: App[] = []


document.querySelector("#submit").addEventListener("click", (e)=>{
    e.preventDefault()
    const enterNameAndMessage = {

    }
})

/* const img = document.createElement("img");
document.body.append(img); */
/* Detta fungerar inte
img.src = "./img/batcat.jpg"; */

/* const imgUrl = new URL("./img/batcat.jpg", import.meta.url);
img.src = imgUrl.href;
console.log(imgUrl); */
