var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox= document.querySelector("#output-box");

//adding eventlistener 

submitBtn.addEventListener('click', submitHandler);
function submitHandler(){
 var ip = Number(initialPrice.value);
 var qty = Number (stockQuantity.value);
var curr = Number  (currentPrice.value);
calculateProfitAndLoss(ip ,qty , curr);


}
function calculateProfitAndLoss(initial , quantity , current ){
    if (initial > current ){
                //loss logic here
 var loss = (current > initial)
   var lossPercentage =(loss / initial )*100;
showOutput(`hey the loss is ${loss} and the percentage is ${lossPercentage}%`);


    }
    else if (current > initial ) {
        //profit logic here
        var profit = (current - initial)*quantity;
        var profitPercentage =(profit  / initial )*100;
     showOutput(`hey the profit is ${profit } and the percentage is ${lossPercentage}%`);
     
     


    }else {
        //reset is here
        showOutput("no pain no gain  and no gain  no pain ");



    }
}

function showOutput(message , status){
   outputBox.innerHTML= message;

}
