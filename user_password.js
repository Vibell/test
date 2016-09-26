/**
 * Created by ViVi on 2016/6/16.
 */
function remenber(id1,id2){
    var user = document.getElementById("id1");
    var password = document.getElementById("id2");
    var usercontent = id1.value;
    var passwordcontent = id2.value;

    sessionStorage.setItem("userkey",usercontent);
    sessionStorage.setItem("passwordkey",passwordcontent);
}
function show(id1,id2){
    var user = document.getElementById("id1");
    var password = document.getElementById("id2");
    var usercontent = sessionStorage.getItem("userkey");
    var passwordcontent = sessionStorage.getItem("passwordkey");

    alert("账号为："+usercontent+"\n"+"密码为："+passwordcontent);
}