/**
 * Created by ViVi on 2016/6/16.
 */
function Save(id){
    var textname = document.getElementById(id);
    var message = textname.value;
    var time = new Date().getTime();
    sessionStorage.setItem("data",message);
    sessionStorage.setItem("date",time);
 //   sessionStorage.setItem(message,time);
    alert("留言已提交");
    load('name');

}
//XmlHttpRequest对象
function createXmlHttpRequest(){
    if(window.ActiveXObject){ //如果是IE浏览器
        return new ActiveXObject("Microsoft.XMLHTTP");
    }else if(window.XMLHttpRequest){ //非IE浏览器
        return new XMLHttpRequest();
    }
}

function GetApi(){
    var  url = "/?comment=nihao&date=today";



    //1.创建XMLHttpRequest组建
    xmlHttpRequest = createXmlHttpRequest();

    //2.设置回调函数
    xmlHttpRequest.onreadystatechange = zswFun;

    //3.初始化XMLHttpRequest组建
    xmlHttpRequest.open("POST",url,true);

    //4.发送请求
    xmlHttpRequest.send(null);
}


//回调函数
function zswFun(){
    if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
        var b = xmlHttpRequest.responseText;

        console.log(b)
    }
}


function load(id){

        var key0=sessionStorage.key(0);
        var value = sessionStorage.getItem(key0);
        var time = sessionStorage.getItem(sessionStorage.key(1))
        var date1 = new Date();
        date1.setTime(time);
    console.log(time)
        console.log(time);
        console.log(date1);
     var  result ="<tr><td>"+value+"</td><td>"+date1+"</td></<tr>"

    var target = document.getElementById(id);
    target.innerHTML =target.innerHTML+ result;

}

function clear1(){
    sessionStorage.clear();
    alert("留言已经删除");
    load('name')
}