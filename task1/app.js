let btn = document.querySelector("button");
let header = document.querySelector("h1");

if (btn) {
  btn.addEventListener("click", () => {
    if (header) {
      header.innerText = "Hello world";
    }
  });
}
