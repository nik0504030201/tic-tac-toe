let containerNode = document.querySelector(`.container`)
for (let i = 1; i <= 9; i++) {
    containerNode.innerHTML += `<div class="container__area" id="container_${i}"></div>`
}
let queue = 0
containerNode.addEventListener("click", function(evt) {
    if (evt.target.classList.contains(`container__area`))
    if (queue == 0) {
        evt.target.innerHTML = `КРЕСТИК`
        evt.target.value = `a`
        queue = 1
    } else if (queue == 1) {
        evt.target.innerHTML = `НОЛИК`
        evt.target.value = `b`
        queue = 0
    }
    if (
        document.querySelector(`#container_1`).value + document.querySelector(`#container_2`).value + document.querySelector(`#container_3`).value == `aaa`
        ||
        document.querySelector(`#container_4`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_6`).value == `aaa`
        ||
        document.querySelector(`#container_7`).value + document.querySelector(`#container_8`).value + document.querySelector(`#container_9`).value == `aaa`
        ||
        document.querySelector(`#container_1`).value + document.querySelector(`#container_4`).value + document.querySelector(`#container_7`).value == `aaa`
        ||
        document.querySelector(`#container_2`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_8`).value == `aaa`
        ||
        document.querySelector(`#container_3`).value + document.querySelector(`#container_6`).value + document.querySelector(`#container_9`).value == `aaa`
        ||
        document.querySelector(`#container_1`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_9`).value == `aaa`
        ||
        document.querySelector(`#container_3`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_7`).value == `aaa`
    ) {
        document.querySelector(`.result`).innerHTML = `ПОБЕДИЛИ КРЕСТЫ`
        for (let i = 0; i <= 9; i++) {
            document.querySelector(`#container_${i+1}`).value = ``
            document.querySelector(`#container_${i+1}`).innerHTML = ``
        }
    } else if (
        document.querySelector(`#container_1`).value + document.querySelector(`#container_2`).value + document.querySelector(`#container_3`).value == `bbb`
        ||
        document.querySelector(`#container_4`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_6`).value == `bbb`
        ||
        document.querySelector(`#container_7`).value + document.querySelector(`#container_8`).value + document.querySelector(`#container_9`).value == `bbb`
        ||
        document.querySelector(`#container_1`).value + document.querySelector(`#container_4`).value + document.querySelector(`#container_7`).value == `bbb`
        ||
        document.querySelector(`#container_2`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_8`).value == `bbb`
        ||
        document.querySelector(`#container_3`).value + document.querySelector(`#container_6`).value + document.querySelector(`#container_9`).value == `bbb`
        ||
        document.querySelector(`#container_1`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_9`).value == `bbb`
        ||
        document.querySelector(`#container_3`).value + document.querySelector(`#container_5`).value + document.querySelector(`#container_7`).value == `bbb`
    ) {
        document.querySelector(`.result`).innerHTML = `ПОБЕДИЛИ НУЛИ`
        for (let i = 0; i <= 9; i++) {
            document.querySelector(`#container_${i+1}`).value = ``
            document.querySelector(`#container_${i+1}`).innerHTML = ``
        }
    }
})