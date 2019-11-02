<?php
define('DB_HOST', 'localhost');
define('DB_NAME', 'test');
define('DB_USER', 'tommirok');
define('DB_PASSWORD', '16031991');
$con = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD) or die("failed to connect" . mysql_error());
$db = mysql_select_db(DB_NAME, $con) or die("FAILED TO CONNECT" . mysql_error());

$Password = $_POST['password'];

function login(){
	session_start();
	if(!empty($_POST['password'])){
		$query = mysql_query("SELECT * FROM PASSWORD where password = '$_POST[password]'") or die(mysql_error());
		$row = mysql_fetch_array($query) or die(mysql_error());
		if(!empty($row['password'])){
			$_SESSION['password'] = $row['password'];
		}
	}
}

?>