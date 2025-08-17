let btn = document.querySelector(".buttonadd");
let inp = document.querySelector(".input");
let ul = document.querySelector("ul");
let divList = document.querySelector(".divList");
let alertBox = document.querySelector("alert");
let img = document.querySelector(".trashImg");

function enterlist() {
  if (inp.value.trim() === "") {
    alertBox.style.display = "block";
    alertBox.innerHTML = `
      <div class="alert alert-danger" role="alert">
        <b>Enter a task bhosdike..!!</b>
      </div>`;

    setTimeout(() => {
      alertBox.style.display = "none";
      alertBox.innerHTML = "";
    }, 3000);
    return;
  }

  if (ul.children.length >= 8) {
    alertBox.style.display = "block";
    alertBox.innerHTML = `<div class="alert alert-danger" role="alert">
        <b>Maximum Task's added...!!! </b>
      </div>`;

    setTimeout(() => {
      alertBox.style.display = "none";
      alertBox.innerHTML = "";
    }, 3000);
    return;
  }

  //libox code
  liBox = document.createElement("li");
  liBox.innerText = inp.value;
  liBox.classList.add("liBox");
  ul.appendChild(liBox);

  //dlete image code
  let newImg = img.cloneNode(true);
  newImg.classList.add("trashImg");
  liBox.appendChild(newImg);

  newImg.addEventListener("click", function () {
    this.parentElement.remove(".liBox");
  });

  inp.value = "";
}

btn.addEventListener("click", () => {
  return enterlist();
});

inp.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    return enterlist();
  }
});
