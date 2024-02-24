let containerNode = document.querySelector(`.container`)
let XwinsNode = 0
let OwindNode = 0
let tiesNode = 0

let queueShow = function (queue) {
    switch (queue) {
        case 0:
            document.querySelector(`#queue`).innerHTML = `<img src="assets/Krestik.svg" class="container__svg" loading="lazy">`
            break
        case 1:
            document.querySelector(`#queue`).innerHTML = `<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>`
    }
}

for (let i = 1; i <= 9; i++) {
    containerNode.innerHTML += `<div class="container__area" id="container_${i}"></div>`
}
let containersList = []
for (let i = 1; i <= 9; i++){
    containersList.push(document.querySelector(`#container_${i}`))
}
let queue = 0

queueShow(queue)
containerNode.addEventListener("click", function (evt){


   if (evt.target.classList.contains(`container__area`) && evt.target.value === undefined){
        switch (queue) {
            case 0:
                evt.target.innerHTML = `<img src="assets/Krestik.svg" class="container__svg" loading="lazy">`
                evt.target.value = `a`
                queue = 1
                break
            case 1:
                evt.target.innerHTML = `<svg height="100" width="100"><circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /></svg>`
                evt.target.value = `b`
                queue = 0
                break
            default:
                alert(`error`)
        }
    }
    if (containersList[0].value === `a`
        &&
        containersList[1].value === `a`
        &&
        containersList[2].value === `a`

        ||

        containersList[3].value === `a`
        &&
        containersList[4].value === `a`
        &&
        containersList[5].value === `a`

        ||

        containersList[6].value === `a`
        &&
        containersList[7].value === `a`
        &&
        containersList[8].value === `a`

        ||

        containersList[0].value === `a`
        &&
        containersList[3].value === `a`
        &&
        containersList[6].value === `a`

        ||

        containersList[1].value === `a`
        &&
        containersList[4].value === `a`
        &&
        containersList[7].value === `a`

        ||

        containersList[2].value === `a`
        &&
        containersList[5].value === `a`
        &&
        containersList[8].value === `a`

        ||

        containersList[0].value === `a`
        &&
        containersList[4].value === `a`
        &&
        containersList[8].value === `a`

        ||

        containersList[2].value === `a`
        &&
        containersList[4].value === `a`
        &&
        containersList[6].value === `a`
    ) {
        for (let i = 0; i < 9; i++) {
            containersList[i].value = undefined;
            containersList[i].innerHTML = ``
        }
        queue = 0
        XwinsNode++
        document.querySelector(`#Xwins`).innerHTML = `Крестики: ${XwinsNode}`
    }



    if (containersList[0].value === `b`
        &&
        containersList[1].value === `b`
        &&
        containersList[2].value === `b`

        ||

        containersList[3].value === `b`
        &&
        containersList[4].value === `b`
        &&
        containersList[5].value === `b`

        ||

        containersList[6].value === `b`
        &&
        containersList[7].value === `b`
        &&
        containersList[8].value === `b`

        ||

        containersList[0].value === `b`
        &&
        containersList[3].value === `b`
        &&
        containersList[6].value === `b`

        ||

        containersList[1].value === `b`
        &&
        containersList[4].value === `b`
        &&
        containersList[7].value === `b`

        ||

        containersList[2].value === `b`
        &&
        containersList[5].value === `b`
        &&
        containersList[8].value === `b`

        ||

        containersList[0].value === `b`
        &&
        containersList[4].value === `b`
        &&
        containersList[8].value === `b`

        ||

        containersList[2].value === `b`
        &&
        containersList[4].value === `b`
        &&
        containersList[6].value === `b`
    ) {
        for (let i = 0; i < 9; i++) {
            containersList[i].value = undefined;
            containersList[i].innerHTML = ``
        }
        queue = 0
        OwindNode++
        document.querySelector(`#Owins`).innerHTML = `Нолики: ${OwindNode}`
    }
    if (containersList[0].value !== undefined
        &&
        containersList[1].value !== undefined
        &&
        containersList[2].value !== undefined
        &&
        containersList[3].value !== undefined
        &&
        containersList[4].value !== undefined
        &&
        containersList[5].value !== undefined
        &&
        containersList[6].value !== undefined
        &&
        containersList[7].value !== undefined
        &&
        containersList[8].value !== undefined
    ) {
        for (let i = 0; i < 9; i++) {
            containersList[i].value = undefined;
            containersList[i].innerHTML = ``
        }
        queue = 0
        tiesNode++
        document.querySelector(`#ties`).innerHTML = `Ничьи: ${tiesNode}`
    }
    queueShow(queue)
 })