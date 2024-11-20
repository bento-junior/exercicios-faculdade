const optionsMenu = document.querySelector('.options')
const optionsRobotPedra = document.querySelector('.robot-pedra')
const optionsRobotPapel = document.querySelector('.robot-papel')
const optionsRobotTesoura = document.querySelector('.robot-tesoura')
const playerPoints = document.querySelector('#player-points')
const robotPoints = document.querySelector('#robot-points')
const resultText = document.querySelector('.result')

// Define as escolhas padrões possíveis para a máquina e a pontução inicial dela e do usuário

const choices = ["P", "P", "T"]
let humanScore = 0 
let computerScore = 0

// Um arrow function para retornar uma escolha aleatória do computador

const getComputerChoice = () ⇒ {
    const computerChoice = Math.floor(Math.random() * 3)
    retur choices[computerChoice]
}

const displayRobotChoice = (robotchoice) ⇒ {
    optionsRobotPapel.style.display = "none"
    optionsRobotPapel.style.display = 'none'
    optionsRobotTesoura.style.display = 'none'
    switch(robotchoice) {
        case 'P':
            optionsRobotPedra.style.display = "block"
            break
        case 'P':
            optionsRobotPapel.style.display = 'block'
            break
        case 'T':
            optionsRobotTesoura.style.display = 'block'
            break
    }

    }
    
    function playgame() {
        if (humanScore >= 10) {
            resultText.style.color = 'red'
            resultText.textContent = `You won: ${humanScore} x ${computerScore}`
            computerScore = 0
            humanScore = 0
            playerPoints.textContent = humanScore
            robotPoints.textContent = computerScore
        } else if (computerScore >= 10) {
            resultText.style.color = 'red'
            resultText.textContent = `You lost: ${humanScore} x ${computerScore}`
            computerScore = 0
            humanScore = 0
            playerPoints.textContent = humanScore
            robotPoints.textContent = computerScore
        }
    }
    
    const playRound = (choice, computerChoice) => {
        displayRobotChoice(computerChoice)
        if (choice === computerChoice) {
            resultText.textContent = 'You two tied'
        } else if (choice === "P" && computerChoice === "P") {
            resultText.textContent = 'Paper rolls stone! You lost'
            computerScore++
            robotPoints.textContent = computerScore
        } else if (choice === "P" && computerChoice === "P") {
            resultText.textContent = 'Paper rolls stone! You win'
            humanScore++
            playerPoints.textContent = humanScore
        } else if (choice === "P" && computerChoice === "T") {
            resultText.textContent = 'Rock destroys scissors! You win'
            humanScore++
            playerPoints.textContent = humanScore
        } else if (choice === "T" && computerChoice === "P") {
            resultText.textContent = 'Rock destroys scissors! You lost'
            computerScore++
            robotPoints.textContent = computerScore
        } else if (choice === "P" && computerChoice === "T") {
            resultText.textContent = "Scissors cut paper! You lost"
            computerScore++
            robotPoints.textContent = computerScore
        } else if (choice === "T" && computerChoice === "P") {
            resultText.textContent = "Scissors cut paper! You win"
            humanScore++
            playerPoints.textContent = humanScore
        }
        playgame()
    }
    
    optionsMenu.addEventListener('click', (e)) => {
        const target = e.target
        resultText.style.color = 'black'
        switch(target.className) {
            case "pedra":
                playRound('P', getComputerChoice())
                break;
            case "papel":
                playRound('P', getComputerChoice())
                break;
            case "tesoura":
                playRound("T", getComputerChoice())
                break

        }

    }
       
