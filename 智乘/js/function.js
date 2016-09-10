//1.兼容函数 //功能： 
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
  var type=type===undefined?true:type;
  var childs=parent.childNodes//所有儿子
  var arr=[];
  for(var i=0;i<childs.length;i++){
    if(type==true){     //获取元素节点
      if(childs[i].nodeType==1){
         arr.push(childs[i]);
      }
    }else if(type==false){   //获取元素节点和不是空文本的文本节点
      if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){//元素
        arr.push(childs[i]);
      }
    }    
  }
  return arr;
}

//6.获得第一个子节点
function getFirst(parent,type){
  var type=type===undefined?true:type;
  return getChilds(parent,type)[0];
}

//7.获得最后一个子节点
function getLast(parent){
  var type=type===undefined?true:type;
  var arr=getChilds(parent,type)
  return arr[arr.length-1];
}
//8.获得一个指定子节点
function getNum(parent,num,type){
  var type=type===undefined?true:type;
  var arr=getChilds(parent,type)
  return arr[num];
}

//9.获得下一个兄弟节点
function getNext(obj,type){
  var type=type===undefined?true:type;
  var next=obj.nextSibling;//null
  if (type==true) {    // 当获取到的是文本节点或注释节点时,继续获取下一个
    while(next.nodeType==3||next.nodeType==8){ 
      next=next.nextSibling;    //下一个的下一个
        if (next==null) {
          return false;
        };
    } 
  }else if(type==false){   // 当获取到的是(空文本节点)或注释节点时,继续获取下一个
    while(next.nodeType==3&&(next.nodeValue.replace("/^\s*|\s*$/g","")=="")||next.nodeType==8){ 
      next=next.nextSibling;    
        if (next==null) {
          return false;
        };   
    } 
  }
  return next;
}

//10.获得上一个兄弟节点
function getUp(obj,type){
  var type=type===undefined?true:type;
  var previous=obj.previousSibling;//null
  if (type==true) {  
    while(previous.nodeType==3||previous.nodeType==8){ 
      previous=previous.previousSibling;  
       if (previous==null) {
          return false;
       };  
    } 
  }else if(type==false){  
    while(previous.nodeType==3&&(previous.nodeValue.replace("/^\s*|\s*$/g","")=="")||previous.nodeType==8){ 
      previous=previous.previousSibling;  
       if (previous==null) {
         return false;
        };    
    } 
  }
  return previous;
}


//11.插入到某个节点之后
function insertAfter(obj,newobj){
  var parent=obj.parentNode;
  var next=getNext(obj);
  if(next){
    parent.insertBefore(newobj,next);
    return;
  }else{
    parent.appendChild(newobj);
  }
}


//12.前置某个节点
function pretend(parent,newobj){
  var first=getFirst(parent)
  if (first) {
    parent.insertBefore(newobj,first)
    return;
  }else{
    parent.appendChild(newobj)
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

// 17.cookie

//获取属性值
function getCookie(obj){
    var cookie=document.cookie;
    var arr=cookie.split(" ;");
    for (var i = 0; i < arr.length; i++) {
        var arr1=arr[i].split("=")
            if (arr1[0]==obj) {
                return arr1[1]
            };
        };
}

//18.删除属性

function delCookie(obj) {
    var now=new Date();
    var a=now.setTime(now.getTime()-1);
    var b=now.toGMTString();
    document.cookie=obj+"=;expires="+b
}

//19.添加属性

function tjCookie(obj,num,time) {
    if(!time){
        document.cookie=obj+"="+num;
    }else{
        var now=new Date();
        var a=now.setTime(now.getTime()+1000*time);
        var b=now.toGMTString();
        document.cookie=obj+"="+num+";expires="+b
    }
}

// 20.正则删除空格
//[type]
//  a   去除全部的空格
//  l   去除左边的空格
//  y    去除右边的空格
//  s    去除左右两边的空格
       function trim(str,type) {
             var type = type||s;
             if (type="a") {
                 return str.replace(/\s*/g,"")
             } else if (type="l") {
                 return str.replace(/^\s*/g,"")
             } else if (type="r") {
                 return str.replace(/\s*$/g,"")
             } else {
                 return str.replace(/^\s*|\s*$/g,"")
             }
         }
// 21.loop模板引擎
 function loop() {
       var con=document.body.innerHTML;
       var reg=/\{loop\s+num=(\d+)\}((?:\s+.*\s+)*)\{\/loop\}/g;
       var arr=[];
       while(result=reg.exec(con)){
           var str="";
           for(var i=0;i<result[1];i++) {
               str+=result[2];
           }
           arr.push(str)
       }
       var a=0;
       var newcon=con.replace(reg,function(){
           return arr[a++]
       })
       document.body.innerHTML=newcon
   }

