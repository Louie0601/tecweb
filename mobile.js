function openNav() {
  document.getElementById("mobile__menu").style.width = "60%";
}

function closeNav() {
  document.getElementById("mobile__menu").style.width = "0";
}

function openDrop() {
  document.querySelector(".mobile__dropdown").classList.toggle("open");
}

let lan_en = true;

function lan() {
  if (lan_en == true) {
    lan_en = false;
    document.getElementById("lan-en").style.backgroundColor = "#e0e0e0";
    document.getElementById("lan-en").style.color = "#666666";
    document.getElementById("lan-ch").style.backgroundColor = "#50c8d7";
    document.getElementById("lan-ch").style.color = "#fff";
  } else if (lan_en == false) {
    lan_en = true;
    document.getElementById("lan-ch").style.backgroundColor = "#e0e0e0";
    document.getElementById("lan-ch").style.color = "#666666";
    document.getElementById("lan-en").style.backgroundColor = "#50c8d7";
    document.getElementById("lan-en").style.color = "#fff";
  }
}
