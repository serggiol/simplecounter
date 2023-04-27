const valueElement = document.getElementById("value");

function onAdd() {
  value.innerHTML = `${parseInt(value.innerText) + 1}`;
}

function onRemove() {
  value.innerHTML = `${parseInt(value.innerText) - 1}`;
}
