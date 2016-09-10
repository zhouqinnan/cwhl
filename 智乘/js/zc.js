 $(function(){
       window.onscroll=function(){
       var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
       if(scrollTop<700) {
         var m=$(".aa3")[0];
        m.style.display="none"
       }; 
       if (scrollTop>700) {
        var m=$(".aa3")[0];
        m.style.display="block"
        animate(m,{marginLeft:675},1000)
     };
     if (scrollTop<2800) {
      var dd1=$(".dd1-1")[0];
        dd1.style.display="none"
      var dd2=$(".dd1-2")[0];
        dd2.style.display="none"
     };
     var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        if (scrollTop>2800) {
      var dd1=$(".dd1-1")[0];
        dd1.style.display="block"
        animate(dd1,{marginBottom:-30},1000);
      var dd2=$(".dd1-2")[0];
       dd2.style.display="block"
        animate(dd2,{marginBottom:-50,opacity:0.2},1000)
        }
      // 车况状况
      var ee=$(".ee4")[0];
      var ee1=$(".ee5")[0];
      var ee2=$(".ee6")[0];
      var ee3=$(".ee7")[0];
      // if(scrollTop<300) {
      //   ee.style.display="none"
      //   ee1.style.display="none"
      //   ee2.style.display="none"
      //   ee3.style.display="none"
      //  }; 
       if (scrollTop>3400) {
        ee1.style.display="block"
        ee1.style.display="block"
        ee2.style.display="block"
        ee3.style.display="block"
        animate(ee1,{marginTop:-310},700)
        animate(ee2,{marginTop:-235},1200)
        animate(ee3,{marginTop:-286},1600)
        animate(ee,{opacity:1},2200)
     };
     var bq1=$(".ww1-2-1")[0]
     var bq2=$(".ww1-2-2")[0]
     var bq=$(".ww1-2-3")[0];
     bq1.onclick=function(){
      bq1.style.background="url(img/icon.png) -44px -88px"
     }
     bq2.onclick=function(){
      bq2.style.background="url(img/icon.png) 0px -88px"
     }
     bq.onmousedown=function(){
      bq.style.background="url(img/icon.png) -88px -88px"
     }
      bq.onclick=function(){
     document.body.scrollTop=0;
     document.documentElement.scrollTop=0;
      }
      var w2=$(".w2")[0];
      bq1.onmouseover=function(){
        w2.style.display="block"
        bq1.style.background="url(img/icon.png) -44px -44px"
      }
       bq1.onmouseout=function(){
        w2.style.display="none"
        bq1.style.background="url(img/icon.png) -44px 0px"
      }
      var w3=$(".w3")[0];
      bq2.onmouseover=function(){
        w3.style.display="block";
        bq2.style.background="url(img/icon.png) 0px -44px"
      }
       bq2.onmouseout=function(){
        w3.style.display="none"
        bq2.style.background="url(img/icon.png) 0px 0px"
      }
     }; 
     window.onscroll()   	
})