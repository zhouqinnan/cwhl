window.onload=function(){
	var H4=$(".H4")[0];
	var H44=$(".H4-3")[0];
	var banner=$(".M2-2-1")[0];
	var imgs=$(".M3");
    var t=setInterval(move,3500)
    var now=0;
    var next=1;
    var z=10;
    var lc1=$(".lc1")[0];
	var lc11=$(".lc1-1")[0];
	var lc2=$(".lc2")[0];
	var lc22=$(".lc2-1")[0];
	H4.onclick=function(){
		H44.style.display="block"
		H4.style.border="1px solid #428bca"
		H4.style.backgroundColor="#e7e7e7"
	}
	H4.ondblclick=function(){
		H44.style.display="none"
		H4.style.border="none"
		H4.style.backgroundColor="#fff"
	}
   
      function move(){
       if(now==5){
       	next=0;
       }else{
       next=now+1;
       }
      animate(imgs[now],{left:0});
      imgs[next].style.left="0px";
      imgs[next].style.zIndex=z++;
      animate(imgs[next],{left:0})
       if(now==5){
       	 now=0;
       }else{
       	 now++;
       }
    }
    banner.onmouseover=function(){
    	clearInterval(t)
    }
    banner.onmouseout=function(){
       t=setInterval(move,3500)	
    }
    var leftbtn=$(".M2-1-1")[0];
    var rightbtn=$(".M2-3-1")[0];
    rightbtn.onclick=function(){
    	 move();
    }
    leftbtn.onclick=function(){
    	if(now==0){
    		next=5;
    	}else{
    	next=now-1;
        }
      animate(imgs[now],{left:0})
      imgs[next].style.left="0px";
      imgs[next].style.zIndex=z++;
      animate(imgs[next],{left:0})
         now--;
         if(now==-1){
         	now=5;
         }
    }
    leftbtn.onmouseover=function(){
    	leftbtn.style.border="1px solid #babbbc";
    	 leftbtn.style.borderRadius="76px"
    }
    leftbtn.onmouseout=function(){
    	leftbtn.style.border="none";
    }
    rightbtn.onmouseover=function(){
    	rightbtn.style.border="1px solid #babbbc";
    	 rightbtn.style.borderRadius="76px"
    }
    rightbtn.onmouseout=function(){
    	rightbtn.style.border="none";
    }
    
   lc1.onmouseover=function(){
   	 lc11.style.display="block"
   }
   lc1.onmouseout=function(){
   	 lc11.style.display="none"
   }
   lc2.onmouseover=function(){
   	 lc22.style.display="block"
   }
   lc2.onmouseout=function(){
   	 lc22.style.display="none"
   }
    var lc3=$(".lc3")[0];
    var flag=true;
				flag2=true;
	var obj=document.documentElement.scrollTop=1?document.documentElement:document.body;
	var totop=$(".lc3")[0];
			var flag=true;
				flag2=true;
			var obj=document.documentElement.scrollTop=1?document.documentElement:document.body;
			window.onscroll=function(){
				var scrollvalue=obj.scrollTop;
				totop.onclick=function(){
					animate(obj,{scrollTop:0},300)
				}
			}

}