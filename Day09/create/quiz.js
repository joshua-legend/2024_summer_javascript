//1. container 만들고 flex 줘야함
const container = document.createElement("div");
container.style.display = "flex";
const makeBox = (x) => {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = x;
  return box;
};

const colors = prompt("색깔 ㄱ").split(" ");
colors.forEach((x) => {
  container.appendChild(makeBox(x));
});
document.body.appendChild(container);
