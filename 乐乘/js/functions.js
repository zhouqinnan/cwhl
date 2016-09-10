// 兼容性的通过类名获取元素
  function getClass(selector,obj){
     obj=obj||document;
     if(document.getElementsByClassName){
  return obj.getElementsByClassName(selector)      
     }else{
      var all=obj.getElementsByTagName("*");
      var newarr=[];
      for (var i = 0; i < all.length; i++) {
            if(check(all[i].className,selector)){
                newarr.push(all[i])
            }
        };
        return newarr;  
     }
  }
  function check(lstr,str){
    var arr=lstr.split(" ");
    for (var i = 0; i < arr.length; i++) {
        if(arr[i]==str){
            return true;
        }
    };
    return false;
  } 
//兼容性的获取或者设置元素的文本内容
  function getText(obj,value){
  if(value!=undefined){
    if(obj.textContent!=undefined){
       obj.textContent=value;  
    }else{
       obj.innerText=value;
    } 
  }else{   
    if(obj.textContent!=undefined){
       return obj.textContent; 
    }else{
       return obj.innerText; 
    }
  }
}
// 兼容性的获取任意一个元素的任意属性
function getStyle(obj,attr){
   if(window.getComputedStyle){
   return window.getComputedStyle(obj,null)[attr] 
   }else{
   return obj.currentStyle[attr] 
   }  
} 
// 兼容性的通过id 标签名或者类名获取元素
function $(s,obj){
    if(typeof s=="string"){  
      obj=obj||document;
      if(s.charAt(0)=="."){
         return getClass(s.slice(1),obj)
      }else if(s.charAt(0)=="#"){
         return document.getElementById(s.slice(1)) 
      }else if(/^[a-z]+[a-z1-6]?$/g.test(s)){
        return obj.getElementsByTagName(s)
      } 
    }else if(typeof s=="function"){
       addEvent(window,"load",s)
       } 
    }  
// function $(selecter,ranges){
//   if (typeof selecter=='string') {
//     var ranges=ranges?ranges:document;
//     var selecter=trim(selecter);
//     if(selecter.charAt(0)=="."){
//       return getClass(selecter.slice(1),ranges);
//     }else if(selecter.charAt(0)=="#"){
//       return document.getElementById(selecter.slice(1));
//     }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
//       return ranges.getElementsByTagName(selecter);
//     }else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
//       return document.createElement(selecter.slice(1,-1));
//     }
//   } else if(typeof selecter=='function'){
//     addEvent(window,'load',selecter);
//   }
// }
 // 事件绑定的兼容问题
 function addEvent(obj,event,callback){
  if (obj.addEventListener) {
    return obj.addEventListener(event,callback,false)
  } 
  else{
    return obj.attachEvent("on"+event,callback)
  };
}
// 事件消除的兼容问题
function delEvent(obj,event,callback){
  if(obj.removeEventListener){
    obj.removeEventListener(event,callback,false)
  }else{
    obj.detachEvent("on"+event,callback)
  }
}
// 鼠标滚动兼容性
 function mousewheel(unfn,downfn,obj){
  var obj=obj||document;
  if(obj.attachEvent){
obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
}else if(obj.addEventListener){
obj.addEventListener("mousewheel",scrollFn,false);
//chrome,safari -webkit-
obj.addEventListener("DOMMouseScroll",scrollFn,false);
//firefox -moz-
}
 function scrollFn(e){
  var e=e||window.event;
  var num=e.detail||e.wheelDelta;
   if (navigator.platform=="MacInter") {
      if(num==1||num==-3){
         upfn()
      }else if(num==-1||num==3){
        downfn()
      }
   }else if(navigator.platform=="Win32"){
        if (num==120||num==-3) {
         upfn()
      }else if(num==-120||num==3){
        downfn()
      }
   }
    if (e.preventDefault) {
        e.preventDefault()
      }else{
        e.returnValue=false
      }
}
}
// /1.兼容函数 //功能： 
//参数说明:

function getClass(classname,obj){
  if(document.getElementsByClassName){
     return document.getElementsByClassName(classname);
  }else{//IE//"one two first"["one","two","first"]  "one" 3
    var all=document.getElementsByTagName("*");//集合[<div class="one two fisrt" id=""></div>,<p>]
    var arr=[];
    for(var i=0;i<all.length;i++){
      if(checkRel(all[i].className,classname)){
        arr.push(all[i]);
      }
    }
    return arr;
  }
}//"one two first"  "box"

function checkRel(str,val){
  var arr=str.split(" ");
  for(var i in arr){
    if(arr[i]==val){
      return true;
    }
  }
  return false;
}
/****************************************/




/*
  2.可以获取与设置纯文本的兼容函数
     obj:哪个对象用这个方法
     val:接收第二个实参，表示设置一个文本
*/
function getText(obj,val){
  if(val==undefined){//获取
    if(obj.innerText){//IE8
      return obj.innerText;
    }else{//W3C
      return obj.textContent;
    }
  }else{
    if(obj.innerText||obj.innerText==""){//IE8,当浏览器有innerText这个属性时，或者当对象的内容为空字符串时，都可以给这个对象设置文本
      obj.innerText=val;
    }else{//W3C
      obj.textContent=val;
    }
  }
}

/*********************************/
//3.获取样式
//obj:哪个对象   attr:哪个属性
//对象.属性    对象["属性"]
function getStyle(obj,attr){
  if(obj.currentStyle){//IE8
    return obj.currentStyle[attr];
  }else{
    return getComputedStyle(obj,null)[attr];
  }
}


/*********************************/
//4.获取元素的函数$()
/*
    $(".box");  类名
    $("#fisrt"); ID名
    $("a");    标签名
*/
//"  .box   " "box"   box" getClass("box")
function $(select,obj){
  var obj=obj||document;
   if(typeof select=="string"){
    //去掉字符串前后的空格
      select=select.replace(/^\s*|\s*$/g,"");
      if(select.charAt(0)=="."){// 类名
        return getClass(select.slice(1),obj);
      }else if(select.charAt(0)=="#"){
        return obj.getElementById(select.slice(1));
      }else if(/^[a-z|1-6]{1,10}$/g.test(select)){//标签名
         return obj.getElementsByTagName(select);
      }
   }else if(typeof select=="function"){//表示是一个函数
      window.onload=function(){
        select();
      }
   }
}

/***********************************/
/*
5.getChilds(parent,type);
 "a": 获取元素子节点的兼容函数
 "b": 获取元素+文本节点

  原理:先获取所有的儿子，然后根据节点的类型判断，如果为1，表示是元素节点，保存到数组里。

*/
function getChilds(parent,type){
  var type=type||"a";
  var childs=parent.childNodes//所有儿子
  var arr=[];
  for(var i=0;i<childs.length;i++){
    if(type=="a"){
      if(childs[i].nodeType==1){//元素
         arr.push(childs[i]);
      }
    }else if(type=="b"){//元素+文本
      if(childs[i].nodeType==1||(childs[i].nodeType==3&& childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){//元素
        arr.push(childs[i]);
      }
    }    
  }
  return arr;
}

//6.获得第一个子节点
function getFirst(parent){
  return getChilds(parent)[0];
}

//7.获得最后一个子节点
function getLast(parent){
  return getChilds(parent)[getChilds(parent).length-1];
}
//8.获得一个指定子节点
function getNum(parent,num){
  return getChilds(parent)[num];
}

//9.获得下一个兄弟节点
function getNext(obj){
  var next=obj.nextSibling;//null
  while(next.nodeType==3||next.nodeType==8){ 
    next=next.nextSibling;  
    if(next==null){
      return false;
    }    
  }
  return next;
}

//10.获得上一个兄弟节点
function getUp(obj){
  var up=obj.previousSibling;//null
  if(up==null){
    return false;
  }
  while(up.nodeType==3||up.nodeType==8){ 
    up=up.previousSibling;  
    if(up==null){
      return false;
    }    
  }
  return up;
}


//11.插入到某个对象之后
Object.prototype.insertAfter=function(obj1,obj2){
  var newobj=getNext(obj2);
  if(newobj){
    this.insertBefore(obj1,newobj);
  }else{
    this.appendChild(obj1);
  }
}


//12.获取滚动条走了的距离
function getScrollT(){
  var obj=document.documentElement.scrollTop?document.documentElement:document.body;
  var scrollT=obj.scrollTop;
  return scrollT;
}


//13.同一元素添加多个事件的兼容函数
//obj:给哪个对象添加
//ev: 什么事件  "click"  "dblclick"
//fun: 事件处理程序
function addEvent(obj,ev,fun){
  if(obj.addEventListener){//火狐
    return obj.addEventListener(ev,function(){
      fun.call(obj);
    },false);
  }else{
    return obj.attachEvent("on"+ev,function(){
      fun.call(obj);
    });//在IE8中，this不指当前对象,指的是window
  }
}

//14.同一元素删除多个事件的兼容函数
//obj:给哪个对象添加
//ev: 什么事件  "click"  "dblclick"
//fun: 事件处理程序
function removeEvent (obj,ev,fn) {
  if (obj.removeEventListener) {
    return obj.removeEventListener(ev,fn,false)
  }else {
    obj.detachEvent("on"+ev,fn)
  }   
}

//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/

//16.鼠标滚轮事件
/*obj:哪个对象添加滚轮事件
    upfun:处理滚轮向上的函数
    downfun:处理滚轮向下的函数
*/
function mouseWheel(obj,upfun,downfun){
  if(obj.attachEvent){
    obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
  }else if(obj.addEventListener){
    obj.addEventListener("mousewheel",scrollFn,false);
    //chrome,safari -webkit-
    obj.addEventListener("DOMMouseScroll",scrollFn,false);
    //firefox -moz-
  }
  function scrollFn(e){
    var ev=e||window.event;
    if (ev.preventDefault ){
      ev.preventDefault(); //阻止默认浏览器动作(W3C)
    }else{
      ev.returnValue = false;//IE中阻止函数器默认动作的方式
    }
    var num=ev.detail||ev.wheelDelta;
    if(num==-3||num==120){//向上
      if(upfun){
        upfun();
      }         
    }
    if(num==3||num==-120){//向上
      if(downfun){
        downfun();
      }         
    }
  }
}