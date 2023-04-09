const fs = require('fs');
let input = fs.readFileSync('inputGame.txt','utf-8');
let arrScore = [];
let sumScope = 0;
const gameList = input.split('\n').map(String);
console.log(gameList)
function play () {
    for(let i = 0;i<gameList.length;i++){
        switch (gameList[i]) {
            case "C X":
                arrScore.push(7)
                break;
            case "B X":
                arrScore.push(1)
                break;
            case "A X":
                arrScore.push(4)
                break;
            case "C Y":
                arrScore.push(2)
                break;
            case "B Y":
                arrScore.push(5)
                break;
            case "A Y":
                arrScore.push(8)
                break;
            case "C Z":
                arrScore.push(6)
                break;
            case "B Z":
                arrScore.push(9)
                break; 
            case "A Z":
                arrScore.push(3)
                break;       
        }  
    }
    sumScope = arrScore.reduce((acc, curr) => acc + curr, 0);    

}


function trueStrategy (){
    for(let i = 0;i<gameList.length;i++){

        switch(gameList[i]){
            case "C Y":
              gameList[i] = "C Z" 
              break;
            case "A Y":
              gameList[i] = "A X" 
              break;
            case "C X":
              gameList[i] = "C Y" 
            break;
            case "A X":
                gameList[i] = "A Z" 
                break;
              case "C Z":
                gameList[i] = "C X" 
                break;
              case "A Z":
                gameList[i] = "A Y" 
              break;         
        }
        
    }
    play();
} 
trueStrategy();
console.log(sumScope)
