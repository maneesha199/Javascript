const boxes=Array.from(document.getElementsByClassName('box'));
const restartbtn=document.getElementById('restartbtn');
const playText=document.getElementById('playText');
const spaces=[];
const O_Text="0";
const X_Text="X";
let currentPlayer=O_Text;
const drawBoard=()=>{
    boxes.forEach((box,index)=>{
        let stylestring='';
        if(index<3){
            stylestring += `border-bottom: 3px solid var(--purple);`;
            stylestring += `border-top: 3px solid var(--purple);`;
        }
        if(index%3===0){
            stylestring += `border-right: 3px solid var(--purple);`;
            stylestring += `border-left: 3px solid var(--purple);`;
        }
        if(index%3===2){
            stylestring += `border-left: 3px solid var(--purple);`;
            stylestring += `border-right: 3px solid var(--purple);`;
        }
        if(index>5){
            stylestring += `border-top: 3px solid var(--purple);`;   
            stylestring += `border-bottom: 3px solid var(--purple);`;
        }
        box.style=stylestring;
        box.addEventListener('click', boxclicked);
    })
};

const boxclicked=(e)=>{
    const id=e.target.id;
    if(!spaces[id]){
        spaces[id]=currentPlayer;
        e.target.innerText=currentPlayer;

        if(playerHasWon()){
            playText.innerText= `${currentPlayer} has won!`;
            return;
        }
        currentPlayer=currentPlayer===O_Text?X_Text:O_Text;
    }
};

const playerHasWon=()=>{
    if(spaces[0]===currentPlayer){
        if(spaces[1]=== currentPlayer && spaces[2]===currentPlayer){
            console.log(`${currentPlayer} Wins up Top`);
            return true;
        }
        if(spaces[3]=== currentPlayer && spaces[6]===currentPlayer){
            console.log(`${currentPlayer} Wins up Left`);
            return true;
        }
        if(spaces[4]=== currentPlayer && spaces[8]===currentPlayer){
            console.log(`${currentPlayer} Wins up Daigonally`);
            return true;
        }
    }
    if(spaces[8]===currentPlayer){
        if(spaces[2]=== currentPlayer && spaces[5]===currentPlayer){
            console.log(`${currentPlayer} Wins up Right`);
            return true;
        }
        if(spaces[6]=== currentPlayer && spaces[7]===currentPlayer){
            console.log(`${currentPlayer} Wins up Buttom`);
            return true;
        }
        // if(spaces[0]=== currentPlayer && spaces[5]===currentPlayer){
        //     console.log(`${currentPlayer} Wins up Daigonally`);
        //     return true;
        // }
    }
    if(spaces[4]===currentPlayer){
        if(spaces[1]=== currentPlayer && spaces[7]===currentPlayer){
            console.log(`${currentPlayer} Wins Vertically in the Midlle`);
            return true;
        }
        if(spaces[3]=== currentPlayer && spaces[5]===currentPlayer){
            console.log(`${currentPlayer} Wins Horixontaly in the Right`);
            return true;
        }
    }
};

const restart=()=>{
    spaces.forEach((spaces,index)=>{
        spaces[index]=null;
    })
    boxes.forEach((box)=>{
        box.innerText='';
    })
    playText.innerText="Let's Play";
    currentPlayer=O_Text;
};

restartbtn.addEventListener('click',restart);

restart();
drawBoard();










