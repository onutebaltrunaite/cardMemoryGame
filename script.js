const container = document.getElementById('container')

let colorContainer = []

function fillColorContainer() {
    for (let x = 0; x < 18; x++) {
        let randomColor = "#"+((1<<24)*Math.random()|0).toString(16)
        colorContainer.push(randomColor) 
    }
    colorContainer = [...colorContainer,...colorContainer]
    // console.log(colorContainer)
}
fillColorContainer()


function getCards() {
    for (let x = 0; x < 36; x++) {
        let card = document.createElement('div')
        card.classList.add('cell')
        card.setAttribute('id', x)
        card.addEventListener('click', flipCard)
        container.appendChild(card)
        
        let randomColor = Math.floor(Math.random() * colorContainer.length)
        card.classList.add(`${colorContainer[randomColor]}`)
        colorContainer = colorContainer.filter((item, index) => index !== randomColor)  
    }
}
getCards()

let cardsChosen = []
let elementsChosen = []

function flipCard(event) {
    
    if (cardsChosen.length < 2) {
        let chosenCardColor = event.target.classList[1]
        event.path[0].style.backgroundColor = `${chosenCardColor}`
        cardsChosen.push(chosenCardColor)
        elementsChosen.push(event.path[0])
        // event.path[0].style.pointerEvents = "none"
        console.log(event)
    }
    if (cardsChosen.length === 2) {
        checkingMatches()
        console.log()
    }
    console.log(cardsChosen)
}

function checkingMatches(event) {
    if (cardsChosen[0] === cardsChosen[1]) {
        console.log('You win')
        
        cardsChosen = []
        elementsChosen[0].style.backgroundColor = 'gray'
        elementsChosen[1].style.backgroundColor = 'gray'
        elementsChosen = []
        // score++
    } else {
        setTimeout(() => {        
            console.log('ir vel nepataikei')
            cardsChosen = []
            elementsChosen[0].style.backgroundColor = 'black'
            elementsChosen[1].style.backgroundColor = 'black'
            elementsChosen = []
        }, 1000)
       
    }
}





