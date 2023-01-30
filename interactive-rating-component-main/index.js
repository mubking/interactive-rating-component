
var m;


var meet = document.getElementsByClassName("meet");
var all= document.querySelector(".all");



for(m = 0; m < meet.length; m++ ){
    meet[m].addEventListener("mouseover", (e)=>{
    var pMeet = e.target.innerHTML;
    
    e.target.classList.toggle("blue");

    if(pMeet > 2){
        all.style.color = "#9F7452";
        all.style.fontSize ="22px";
        all.style.backgroundColor = "white"
        all.innerHTML = "you selected " + pMeet + " out of 5";
    }else if(pMeet <=2){
        all.innerHTML = " you selected " + pMeet + " out of 5";
        all.style.backgroundColor = "white"
        all.style.color = "red";
        all.style.fontSize ="22px";

    }else{
        pMeet.innerHTML = "You selected " + pMeet + " out of 5";
    }
})
}

// if(pThank > 3){
//     thank.style.color = "green";
//     thank.style.backgroundColor = "white"
//     thank.innerHTML = "You selected " + pThank + " out of 5";
// }else if(pThank <=2){
//     thank.innerHTML = "So sad you selected " + pThank + " out of 5";
// }
// else{
//     thank.innerHTML = "You selected " + pThank + " out of 5";
// }
// var meet = document.getElementById("meet");
// var all = document.querySelector(".all");
// for  ( m = 0; m < meet.length;)


// for( r = 0; r < rate.length; r++){
//     rate[r].addEventListener("mouseover", (e)=>








function love(){
    var  thanks = document.querySelector(".second");
    var ten =document.querySelector(".ten");
    ten.style.display = "none";
    thanks.style.display ="flex";

}