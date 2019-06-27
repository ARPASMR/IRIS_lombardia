<?php
//RICORDARSI DI AGGIORNARE DI CONSEGUENZA ANCHE /var/www/cgi-bin/config.py

//setto una variabile nel caso in cui la ROOT del sistema sia diversa (ad es. reverseproxy)
$root_dir_html = '';
$root_dir_cgi = '/cgi-bin';
//$root_dir_script = '/common/webgis_central-test_da_db.php';
$root_dir_script = '/common/webgis_central.php';
//$proxies_http = 'proxy.arpa.piemonte.it';
//$proxies_port = '3128';
$proxies_http = '<user>:<password>@proxy2.arpa.local';
$proxies_port = '8080';

$conn_string = "host=localhost port=5432 dbname=iris_base user=<user> password=<password>";
$conn_string_edit = "host=localhost port=5432 dbname=iris_base user=<user> password=<password>";
$conn_string_admin = "host=localhost port=5432 dbname=iris_base user=<user> password=<password>";

$dns = "postgresql://<user>:<password>0@localhost:5432/iris_base"; //permessi di scrittura su alcune tabelle config

?>

