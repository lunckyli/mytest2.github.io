/*
---------------------------
-Click on the Button Join !-
---------------------------
*/


var t = 0;

function join_1(){
if(t == 0){  document.querySelectorAll('.cont_letras > p')[0].style.left = '400px';
  document.querySelectorAll('.cont_letras > p')[1].style.left = '-320px';
  document.querySelectorAll('.cont_letras > p')[2].style.left = '400px';
setTimeout(function(){
  document.querySelector('.cont_join').className = 'cont_join cont_join_form_act';
},1000);    
t++;
          }else{
    t++;
    if (t <= 2)
    {
        document.getElementById("test1").style.display = "none";
        document.getElementById("test2").style.display = "block";
    }
    else if (t == 3)
    {
        document.getElementById("test1").style.display = "none";
        document.getElementById("test2").style.display = "none";
        document.getElementById("test3").style.display = "block";
    }
    else
    {
        document.querySelector('.cont_form_join').style.bottom = '-420px';
        document.getElementById("test4").style.display = "block";
        document.getElementById("test5").style.display = "block";
        setTimeout(function () {
            document.querySelector('.cont_join').className = 'cont_join cont_join_form_act cont_join_finish';
        }
   , 500);
    }
            
           

  }           
           
}