 var close=document.getElementById("close"),
     menu=document.getElementById("menu"),
     menuIcon=document.getElementById("menu-icon"),
     meta=document.getElementById("meta");
     
menuIcon.onclick=function(){
   var left=menu.style.left;
   console.log("left"+ left);
   if(left=="-220px"){menu.style.left="0";
   }else{menu.style.left="-220px"}
}
close.onclick=function(){
   menu.style.left="-220px";
}
//window.onload=function(){
//    if(screen.width<=320){
//      console.log(screen.width);
//      console.log("meta"+meta.getAttribute("name"));
//      meta.setAttribute("name","");
//      meta.setAttribute("content","");
//      console.log("meta"+meta.getAttribute("name"));
//    }
//}