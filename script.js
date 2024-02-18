const craetName = document.querySelector(".enter-name");
const craetEmail = document.querySelector(".enter-email");
const craetIMG = document.querySelector(".enter-img");
const create = document.querySelector(".create");
const block = document.querySelector(".block");
createElem();
function createElem() {
  block.innerHTML = "";
  let task = JSON.parse(localStorage.getItem("task")) || [];
  task.map((el) => {
    console.log(el);
    block.innerHTML += `
<div>
<h1>Cotacts</h1>
<img src="" alt="">


</div>

     <div>
     <h1>${el.crtEmail}</h1>
     <h1>${el.crtName}</h1>

     </div>
     `;
  });
}
create.addEventListener("click", () => {
  let task = JSON.parse(localStorage.getItem("task")) || [];
  let newCraet = {
    id: 1,
    crtName: craetName.value,
    crtEmail: craetEmail.value,
    crtImg: craetIMG.value,
  };
  task.push(newCraet);
  localStorage.setItem("task", JSON.stringify(task));
  craetName.value = "";
  craetEmail.value = "";

  craetIMG.value = "";
  createElem();
});
