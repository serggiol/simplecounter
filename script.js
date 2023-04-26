const value = document.querySelector('#value')

function onAdd() {
    value.innerHTML = `${parseInt(value.innerText) + 1}`;
}

function onRemove() {
    value.innerHTML = `${parseInt(value.innerText) - 1}`;
}