window.onload=function(){
	var l2=$(".l2")[0];
	var l3=$(".l3")[0];
	var l4=$(".l4")[0];
	var l6=$(".l6")[0];
	var aa=$(".l2-1")[0];
	var bb=$(".l3-1")[0];
	var cc=$(".l4-1")[0];
	var dd=$(".l6-1")[0];
	var lc1=$(".lc1")[0];
	var lc11=$(".lc1-1")[0];
	var lc2=$(".lc2")[0];
	var lc22=$(".lc2-1")[0];
	var logo2=$(".logo2")[0];
	var logo4=$(".logo4")[0];
	var banner=$(".banner")[0];
	var bannerbox=$(".bannerbox")[0];
	var imgs=$("a",banner);
	var btnbox=$(".btn")[0];
	var btns=$("div",btnbox);
    var t=setInterval(move,3000)
    var now=0;
    var next=1;
    var z=10;
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
    function move(){
       if(now==2){
       	next=0;
       }else{
       next=now+1;
       }
      animate(imgs[now],{left:-800});
      imgs[next].style.left="800px";
      imgs[next].style.zIndex=z++;
      animate(imgs[next],{left:0}) 
      btns[now].style.background="none";
      btns[next].style.background="#fff";
       if(now==2){
       	 now=0;
       }else{
       	 now++;
       }
    }
   	l2.onmouseover=function(){
   	 aa.style.display="block"
   }
   l2.onmouseout=function(){
   	 aa.style.display="none"
   }
   	l3.onmouseover=function(){
   	 bb.style.display="block"
   }
   l3.onmouseout=function(){
   	 bb.style.display="none"
   }
   	l4.onmouseover=function(){
   	 cc.style.display="block"
   }
   l4.onmouseout=function(){
   	 cc.style.display="none"
   }
   	l6.onmouseover=function(){
   	 dd.style.display="block"
   }
   l6.onmouseout=function(){
   	 dd.style.display="none"
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
     logo2.onclick=function(){
   	 logo4.style.display="block"
   }
   logo2.ondblclick=function(){
   	 logo4.style.display="none"
   }
}

// 
// window.onload=function(){
			
// 			}	