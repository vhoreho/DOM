let table = document.querySelector("table");
let addBtn = document.querySelector("button");

addBtn.addEventListener("click", () => {
  let tr = document.createElement("tr");
  let tdFirst = document.createElement("td");
  let tdSecond = document.createElement("td");

  tr.style.color;
  tdFirst.innerText = "new td1";
  tdSecond.innerText = "new td2";
  tr.append(tdFirst, tdSecond);
  table.appendChild(tr);
});
