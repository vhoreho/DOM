let list = document.querySelector(".list");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("click");
  let li = document.createElement("li");
  li.innerText = "New text";
  list.appendChild(li);
});
