// OPENNING MENU //
const menuElement = document.getElementById("menu")
const homePage = document.getElementById("home-page")
const menuBtn = document.getElementById("menu-btn")
const kyrieNumber = document.getElementById("kyrie-number")
const checkboxEl = document.querySelector('input[id="checkbox-element"]')
checkboxEl.checked = false

checkboxEl.addEventListener("change", function(){
    if (this.checked) {
        menuElement.style.transform = "translate(0%, 0%)"
        menuBtn.style.transform = "rotate(360deg)"
    } else {
        menuElement.style.transform = "translate(100%, 0%)"
        menuBtn.style.transform = "rotate(0deg)"
    
    }
})


// LEAVING STORIES //
const storiesList = document.getElementsByClassName("aStory")
const leaveStoryBtn = document.getElementsByClassName("leave-story")

for (let index = 0; index < leaveStoryBtn.length; index++) {
    leaveStoryBtn[index].onclick = leaveStory
    
}

function leaveStory(){
    for (let index = 0; index < storiesList.length; index++) {
        // storiesList[index].style.right = "-100%"
        storiesList[index].style.transform = "translate(100%,0%)"
        
        
    }
}


// OPENNING STORIES //
const dukeBtn = document.getElementById("NC")
const dukeStory = document.getElementById("isDuke")
dukeBtn.addEventListener("click",function(){
    // dukeStory.style.right = "0%"
    dukeStory.style.transform = "translate(0%,0%)"
})

const cleBtn = document.getElementById("OH")
const cleStory = document.getElementById("isCleveland")
cleBtn.addEventListener("click",function(){
    // cleStory.style.right = "0%"
    cleStory.style.transform = "translate(0%,0%)"
})

const bosBtn = document.getElementById("MA")
const bosStory = document.getElementById("isBoston")
bosBtn.addEventListener("click",function(){
    // bosStory.style.right = "0%"
    bosStory.style.transform = "translate(0%,0%)"
})

const broBtn = document.getElementById("NY")
const broStory = document.getElementById("isBrooklyn")
broBtn.addEventListener("click",function(){
    // broStory.style.right = "0%"
    broStory.style.transform = "translate(0%,0%)"
})

kyrieNumber.textContent = "11"
// NUMBER CHANGING //
// nb = 0
// while (true) {
//     kyrieNumber.textContent = nb
//     if (nb == 11) {
//         nb = 0
//     }
//     else{
//         nb ++
//     }

// }


// SOUND EFFECTS //

const draftBtn = document.getElementById("draft-btn")
draftBtn.addEventListener("click", () => {
    document.getElementById("draft-sound").play()
})

// CAROUSSEL // 
const leftCarBtn = document.getElementById("left-carousel-btn")
const rightCarBtn = document.getElementById("right-carousel-btn")
const imgsWrapper = document.getElementById("car-wrapper")
let offsetPercentage = 0



rightCarBtn.addEventListener("click", () => {
    if (offsetPercentage > -68) {
        slideRight()
    } 
})

leftCarBtn.addEventListener("click", () => {
    if (offsetPercentage < 0) {
        slideLeft()
    } 
})

function slideRight(){
    offsetPercentage = offsetPercentage - 34
    imgsWrapper.style.transform = "translateX(" + offsetPercentage + "%)"
    console.log(offsetPercentage)
    console.log(imgsWrapper.style.transform)
}

function slideLeft(){
    offsetPercentage = offsetPercentage + 34
    imgsWrapper.style.transform = "translateX(" + offsetPercentage + "%)"
    console.log(offsetPercentage)
    console.log(imgsWrapper.style.transform)
}