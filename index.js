let Input1=document.getElementById("Input")
let ul=document.getElementById("ul")
function clickHere() {

 let div=document.createElement("div")
 div.classList.add("innerDiv")
 let li=document.createElement("li")
 li.style.padding="1rem"
 let button=document.createElement("button")
 button.innerText="delete"
 button.setAttribute("onclick","delete1(this)")


 let Input=document.getElementById("Input").value

 let liNode=document.createTextNode(Input)

 
 li.appendChild(liNode)
 div.appendChild(li)
 div.appendChild(button)
 ul.appendChild(div)

 Inpute1.value=""
}


function delete1(ref){

ref.parentElement.remove();
}
