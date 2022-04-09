<?php 

$db_user = "admin";
$db_pass = "admin";
$db_name = "useraccounts";

$db = new PDO('mysql:host=localhost; dbname=' . $db_name . ';charset=utf8', $db_user, $db_pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


/*(define('DB_USER', 'admin');
define('DB_PASSWORD', 'admin');
define('DB_HOST', 'localhost');
define('DB_NAME', '');

$dbc = @mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME) OR die('Could not connect to the database'.mysql_connect_error());*/

//mysql_set_charset($dbc, 'utf8');