<?php
$version = '0.1';
header('Allow: GET,POST');
header('Content-Type: application/json');
if ($_GET['action'] == 'test') {
    echo json_encode(["mode"=>"testrun","version"=>$version, "post"=>$_POST,"get"=>$_GET]);
} elseif ($_GET['action'] == 'getProducts') {
// Implement the logic for the getProducts endpoint here
} else {
    http_response_code(501);
} 