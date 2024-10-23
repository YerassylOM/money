const container = document.getElementById("container")
const imageOne = document.querySelector(".money")
const imageTwo = document.querySelector(".ohyeah")
const btnYes = document.querySelector(".btn-yes")
const btnNO = document.querySelector(".btn-no")
const header_text = document.querySelector(".text")

function getRandonNNumber(min, max){
    const randonNNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randonNNumber
}

btnNO.addEventListener("mouseover" , (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNO.getBoundingClientRect().height;
    const btnWidth = btnNO.getBoundingClientRect().width;
    const btnTop = btnNO.getBoundingClientRect().top;
    const btnLeft = btnNO.getBoundingClientRect().left;

    let newTop = btnTop;
    let newLeft = btnLeft;

    while (Math.abs(newTop - btnTop) < containerHeight / 3){
        newTop = getRandonNNumber(0 , containerHeight - btnHeight)
    }

    while (Math.abs(newLeft - btnLeft) < containerHeight / 3){
        newLeft = getRandonNNumber(0 , containerWidth - btnWidth)
    }
    btnNO.style.top = Math.floor(newTop) + "px"
    btnNO.style.left = Math.floor(newLeft) + "px"
})

btnYes.addEventListener("click" , (e) =>{
    btnNO.classList.add("hide");
    imageOne.classList.add("hide")
    imageTwo.classList.remove("hide")
    header_text.innerHTML = "My kaspi: 87072016113".toUpperCase()

})