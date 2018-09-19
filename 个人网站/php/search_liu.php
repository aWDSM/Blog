<?php
include_once "index.php";

$oper = new Operate('liu');
// 查询数据
$arry = $oper -> search(array('id','img','user','say'),'news');

$oper -> json('200','成功',$arry,count($arry));