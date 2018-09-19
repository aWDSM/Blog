<?php
include_once "index.php";

$oper = new Operate('manage');
// 查询数据
$arry = $oper -> search(array('id','img','h3','p'),'news');
$oper -> json('200','成功',$arry,count($arry));