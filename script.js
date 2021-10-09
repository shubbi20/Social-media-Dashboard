var icon = document.getElementById("clickicon");
     icon.onclick=function(){
     document.body.classList.toggle("darktheme");
           if(  document.body.classList.contains("darktheme")){
             icon.src="images/sunicon.jpg";
           }else{
            icon.src="images/icon-128x128.png";
           }
     }