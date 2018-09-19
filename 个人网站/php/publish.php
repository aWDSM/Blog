<?php
include_once "index.php";

$oper = new Operate('publish');
// 查询数据
$arry = $oper -> search(array('id','img','header','note','user','times','browse','sina'),'news');
$oper -> json('200','成功',$arry,count($arry));