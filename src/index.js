import "./styles.css";

const tombol = document.querySelector(".tombolKalkulator");
const layar = document.querySelector("#layar");
tombol.addEventListener("click", function(e) {
  const clickedTombol = e.target;
  const nilaiTombol = clickedTombol.innerText;

  if (nilaiTombol == "C") {
    layar.value = "";
  } else if (nilaiTombol == "=") {
    layar.value = eval(layar.value);
  } else {
    layar.value = layar.value + nilaiTombol;
  }
});
