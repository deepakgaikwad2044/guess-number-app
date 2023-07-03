 // let userguess;


let btn = document.querySelector(".submit");
let result = document.querySelector(".result");


let randfun =  ()=>{
    
    
    let rannum= Math.floor(Math.random()*101)
return rannum;

}

 let rannum = randfun();
 
btn.onclick = (e)=>{


 
e.preventDefault();

let  form = document.querySelector("form");
 
let youwon = document.querySelector(".youwon");
   
   youwon.style.display="none"
 
 
// alert(rannum)
    for(let i =0; i!=rannum; i++){

 var gameover;
 
let usernum = document.querySelector("#usernum");



let final = usernum.value.trim();

  if( (final!='') && (final > 1) && (final < 100) ){
 



   if(final == rannum){
       
        gameover = 1;
    result.innerHTML =`correct ${rannum} `
   btn.innerHTML = "Play again"
   btn.classList.toggle('ans')
   result.classList.add('success')
   result.classList.remove('error')
   youwon.style.display="block";
   

   form.reset();
     break;
   }else if(final > rannum){
result.innerHTML = "number is small"
   result.classList.add('error')
   result.classList.add('success')
    
}else if(final < 0){
    result.innerHTML = "negetive numbers not allowed"
   
   result.classList.add('error')
   result.classList.add('success') 
    
}else if(final < rannum){
    result.innerHTML = "number is big"
 
   result.classList.add('error')
   result.classList.add('success')
}else{
    result.innerHTML ="something went wrong!"
} 

      
      
      
      
  }
 else if(isNaN(final)){
    result.innerHTML = "characters not allowed";
    
   result.classList.add('error')
   result.classList.add('success')
}else{
    result.innerHTML = "Please enter between 1 to 100 number**";
   result.classList.add('error')
   result.classList.add('success') 
}





}


if(gameover==1){
    
    rannum= Math.floor(Math.random()*100)

}

}


  