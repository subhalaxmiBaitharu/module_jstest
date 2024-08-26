const gameContainer=document.querySelector(".container");
const userResult=document.querySelector(".userResult img");
const computerResult=document.querySelector(".computerResult img");
const optionImages=document.querySelectorAll(".triangle img");
const result=document.querySelector(".outcome");
const triangleDOM=document.querySelector(".triangle");
const resultDOM=document.querySelector(".result")
const playAgainButton=document.querySelector(".playAgain");
const computerScore=document.querySelector(".computerScore h1");
const userScore=document.querySelector(".userScore h1");
const user=document.querySelector(".userResult");
const userImg=document.querySelector(".userResult img");
const computer=document.querySelector(".computerResult");
const computerImg=document.querySelector(".computerResult img");
const nextButton=document.querySelector("#next");
const gradientUser=document.querySelector(".gradientUser");
const gradientPC=document.querySelector(".gradientPC");
const ruleBtn=document.querySelector(".btn button");
const rules=document.querySelector(".rules");
const cross=document.querySelector(".image");
const againstPc=document.querySelector("#againstPc");
const cupDiv=document.querySelector(".cup");
const stars=document.querySelector(".star"); 
const gamePage=document.querySelector(".gamePage");
const hurrayContainer=document.querySelector(".hurrayContainer");
const backButton=document.querySelector(".back");

console.log("starts",stars)
let uScore = parseInt(localStorage.getItem('userScore')) || 0;
let cScore = parseInt(localStorage.getItem('computerScore')) || 0;

function updateScore(){
   console.log(localStorage.getItem("userScore"))
   if(localStorage.getItem("userScore")==null)
   {
      userScore.innerHTML=0;
   }
   else{

       userScore.innerHTML=parseInt(localStorage.getItem("userScore"));
   }
   if(localStorage.getItem("computerScore")==null)
    {
       computerScore.innerHTML=0;
    }
    else{

        computerScore.innerHTML=parseInt(localStorage.getItem("computerScore"));
    }
}

updateScore();


optionImages.forEach((img,index)=>{
    img.addEventListener("click",(e)=>{
        triangleDOM.style.display="none";
        resultDOM.style.display="flex";
        resultDOM.style.marginLeft="30%";
    
        let imgSource=e.target.src;
     
        userResult.src=imgSource;


        let randomIndex=Math.floor(Math.random()*3);
        let computerImages=["./images/icons8-fist-67 1.png","./images/icons8-hand-64 1.png","./images/17911 1.png"]
        computerResult.src=computerImages[randomIndex];

        let computerValue=["R","P","S"][randomIndex];

        let userValue=["R","P","S"][index];

        console.log(computerValue,userValue)
        
        let outcomes={
            RR : "Draw",
            RP : "Cpu",
            RS : "User",
            PP : "Draw",
            PR : "User",
            PS : "Cpu",
            SS : "Draw",
            SR : "Cpu",
            SP : "User"
        };

        let outComeValue= outcomes[userValue+computerValue];
        

        if(outComeValue=="Cpu")
        {
            cScore++;
            gradientPC.className="gradientActive";
            gradientUser.className="gradientUser";
            nextButton.style.display="none";
            computerImg.className="animationImg";
              userImg.className=""
        }
        else if(outComeValue=="User")
        {
            uScore++;
            gradientUser.className="gradientActive";
            gradientPC.className="gradientPC";
            nextButton.style.display="inline";
            userImg.className="animationImg"
            computerImg.className="";
        }
        else{
            nextButton.style.display="none";
            userImg.className=""
            computerImg.className="";
            gradientPC.className="gradientPC";
            gradientUser.className="gradientUser";
        }

        if(userValue=="R")
        {   
        user.style.border="1rem solid #0074B6";
        }
        else if(userValue=="P")
        {
            user.style.border="1rem solid #FFA943";
        }
        else{
            user.style.border="1rem solid #BD00FF";
        }

        if(computerValue=="R")
            {   
            computer.style.border="1rem solid #0074B6";
            }
            else if(computerValue=="P")
            {
                computer.style.border="1rem solid #FFA943";
            }
            else{
                computer.style.border="1rem solid #BD00FF";
            }
    
        
        result.innerHTML=userValue===computerValue? "TIE UP": outComeValue==="Cpu"? "YOU LOST":"YOU WIN";
        
        if(outComeValue=="Draw")
        {
            playAgainButton.innerHTML="REPLAY";
            againstPc.style.display="none";
        }
        else{
            playAgainButton.innerHTML="PLAY AGAIN";
            againstPc.style.display="inline";
        }



        localStorage.setItem("computerScore",cScore);
        localStorage.setItem("userScore",uScore);
        
        updateScore();
        
        
        
    })
})


playAgainButton.addEventListener("click",()=>{
    console.log("cicked")
    resultDOM.style.display="none";
    triangleDOM.style.display="block";
    gradientPC.className="gradient";
    gradientUser.className="gradient";
})

ruleBtn.addEventListener("click",()=>{
    rules.style.display="flex";
}
)
cross.addEventListener("click",()=>{
    rules.style.display="none";
}
)

nextButton.addEventListener("click",()=>{
    gamePage.style.display="none";
    // stars.style.display="content";
    hurrayContainer.style.display="flex";
    nextButton.style.display="none";
})
backButton.addEventListener("click",()=>{
    hurrayContainer.style.display="none";
    gamePage.style.display="flex";
    resultDOM.style.display="none";
    triangleDOM.style.display="flex";
})
