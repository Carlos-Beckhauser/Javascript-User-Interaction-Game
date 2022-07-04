const handleClick = () => {
  const body = document.querySelector("body");

  body.innerHTML = `
        <h1>Hello Javascript!!!<h1>
    `;

  body.style.backgroundColor = "#000";
  body.style.color = "#fff";
};

const el = document.getElementById("btn-start");

el.addEventListener("mouseover", () => {
  el.style.position = "absolute";
  el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 30))}px`;
  el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 84))}px`;
});
el.addEventListener("click", () => handleClick());
