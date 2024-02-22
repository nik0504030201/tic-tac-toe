let containerNode = document.querySelector(`.container`)
for (let i = 1; i <= 9; i++) {
    containerNode.innerHTML += `<div class="container__area" id="container_${i}"></div>`
}
let containersList = []
for (let i = 1; i <= 9; i++){
    containersList.push(document.querySelector(`#container_${i}`))
}
let queue = 0
containerNode.addEventListener("click", function (evt){


   if (evt.target.classList.contains(`container__area`) && evt.target.value === undefined){
        switch (queue) {
            case 0:
                evt.target.style.backgroundColor = `green`
                evt.target.value = `a`
                queue = 1
                break
            case 1:
                evt.target.style.backgroundColor = `red`
                evt.target.value = `b`
                queue = 0
                break
            default:
                alert(error)
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
            containersList[i].style.backgroundColor = `var(--main-area-color)`
        }
        queue = 0
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
            containersList[i].style.backgroundColor = `var(--main-area-color)`
        }
        queue = 0
    }
 })