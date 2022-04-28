var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


var t = null;
t = setTimeout(time, 1000); 
function time() {
  clearTimeout(t); 
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  var day = dt.getDate();
  var h = dt.getHours(); 
  var m = dt.getMinutes(); 
  var s = dt.getSeconds(); 
  document.querySelector(".showTime").innerHTML =
    "Present time:" +    day +    "/" +    mt +    "/" +    y +    "---" +    h +    ":" +    m +    ":" +    s;
  t = setTimeout(time, 1000); 
}


function validateform(){  
  var name1=document.myform.name1.value;  
  var password=document.myform.password.value; 
  var name2=document.myform.name2.value;  
  var name3=document.myform.name3.value;  
    
  if (name1==null || name1==""){  
    alert("Name can't be blank");  
    return false;  
  }
  if (name2==null || name2==""){  
    alert("Name can't be blank");  
    return false;  
  }
  if (name3==null || name3==""){  
    alert("Name can't be blank");  
    return false;  
  }
  if(password.length<6){  
    alert("Password must be at least 6 characters long.");  
    return false;  
    }  
  } 