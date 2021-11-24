// TODO: Declare any global variables we need
let totalHeads = 0
let totalTails = 0
let totalFlipCount = 0
let headsPercent = 0
let tailsPercent = 0
// let images = ["assets/images/penny-heads.jpg","assets/images/penny-tails.jpg"]
// turn images array into array of objects
let images = [
    {
        imagePath: "assets/images/penny-heads.jpg",
        message: "You flipped heads!",
        side: "heads"
    },
    {
        imagePath: "assets/images/penny-tails.jpg",
        message: "You flipped tails!",
        side: "tails"
    },
]
let defaultMessage = "Let's Get Rolling!"


document.addEventListener('DOMContentLoaded', function () {
 

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById("flip").addEventListener('click',function () {
        //Math.floor if you are at a decimal round down to whole
        let randomImage = images[Math.floor(Math.random()*images.length)];
        // randomImage is a variable based on the images array which is now an array of objects but you have to use .imagePath to apply the src
        document.querySelector("#image").setAttribute("src", randomImage.imagePath)

        //randomImage.side because randomImage is associated with the array of objects images[] and we said associated it with the side key
        if(randomImage.side === "heads") {
            totalHeads++
            totalFlipCount++

            document.getElementById("heads").innerHTML = totalHeads
            document.querySelector(".message-container").textContent = randomImage.message
        }else {
            totalTails++
            totalFlipCount++

            document.getElementById("tails").innerHTML = totalTails
            document.querySelector(".message-container").textContent = randomImage.message
        }

        //heads percent
        headsPercent = Math.round(totalHeads * 100 / totalFlipCount)
        console.log(headsPercent)
        document.getElementById("heads-percent").textContent = headsPercent + "%"
        //tails percent
        tailsPercent = Math.round(totalTails * 100 / totalFlipCount)
        console.log(tailsPercent)
        document.getElementById("tails-percent").textContent = tailsPercent + "%"


        console.log("HEADS",totalHeads)
        console.log("TAILS",totalTails)
        console.log("TOTAL",totalFlipCount)
    })

    document.getElementById("clear").addEventListener('click', function(){
        //set all variables back to zero
        totalHeads = 0
        totalTails = 0
        totalFlipCount = 0
        headsPercent = 0 + "%"
        tailsPercent = 0 + "%"

        //update everything on the DOM
        document.getElementById("heads").innerHTML = totalHeads
        document.getElementById("tails").innerHTML = totalTails
        document.getElementById("heads-percent").textContent = headsPercent
        document.getElementById("tails-percent").textContent = tailsPercent
        document.querySelector(".message-container").textContent = defaultMessage
    })

})

//fewafwe