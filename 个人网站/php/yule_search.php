<?php
header("Access-Control-Allow-Origin: *");
include_once 'conn.php'; 
$code=mysqli_select_db($conn,"yule");
if(!$code){
    die("数据失败".mysqli_error($conn));
}
$page=$_GET["pages"];
$long=$_GET["longs"];
mysqli_set_charset($conn,"utf8");
$selStr="SELECT id,img,header,note,user,times,browse FROM news";
$result=mysqli_query($conn,$selStr);
if(!$result){
    die("数据库查询失败".mysqli_error($conn));
}
$nums=mysqli_num_rows($result);//获取总数据
$arry=[];
$pageArry=[];
while($row=mysqli_fetch_assoc($result)){
    $arry[]=$row;  
}
for ($i=$page*$long-$long; $i <$nums && $i<$page*$long ; $i++) { 
    $pageArry[]=$arry[$i]; 
}
@Response::json($arry,$nums);