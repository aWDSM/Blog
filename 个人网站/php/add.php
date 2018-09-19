<?php
include_once "index.php";
// 创建数据库
$oper = new Operate('publish');
// 创建数据表中的表头信息
class Obj
{
    public $img = 'VARCHAR(1000)';
    public $header = 'VARCHAR(2000)';
    public $note = 'VARCHAR(500)';
    public $user = 'VARCHAR(50)';
    public $times = 'VARCHAR(500)';
    public $browse = 'VARCHAR(50)';
    public $sina = 'VARCHAR(100)';

}
$obj = new Obj;
$oper -> table('news',$obj);
// 插入数据
$img = $_POST['img'];
$header = $_POST['header'];
$note = $_POST['note'];
$user = $_POST["user"];
$times = $_POST["times"];
$browse = $_POST["browse"];
$sina = $_POST["sina"];
$oper -> insert(array($img,$header,$note,$user,$times,$browse,$sina));