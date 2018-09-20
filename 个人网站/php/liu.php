<?php
date_default_timezone_set('PRC');
include_once "index.php";
// 创建数据库
$oper = new Operate('liu');
// 创建数据表中的表头信息
class Obj
{
    public $user = 'VARCHAR(1000)';
    public $img = 'VARCHAR(2000)';
    public $say = 'VARCHAR(500)';
    public $times = 'VARCHAR(500)';
}
$obj = new Obj;
$oper -> table('news',$obj);
// 插入数据
$user = $_POST["user"];
$img = $_POST['img'];
$say = $_POST['say'];
$times = date('Y'."年".'-m'."月".'-d'."日".' H:i',time());

$yonghu=$oper -> insert(array($user,$img,$say,$times));
if($yonghu){
  $oper->json('200','成功');
}
