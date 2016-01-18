<?php
// Session System
include_once '../../Aeos/inc/pcon.php';
include_once '../../Aeos/inc/func.php';
sec_session_start();
lockout(2, $mysqli);

$servername = "localhost";
$username = "eosxnet_druglord";
$password = "x+rU3diITCaK";
$dbname = "eosxnet_drugz";

$conn = new mysqli($servername, $username, $password, $dbname); #connect
if (isset($_POST["dName"]))
    $name = $_POST["dName"];
else header("Location: ../?s=f");
if ( $insert_stmt = $conn->prepare("INSERT INTO drugs (name) VALUES (?)") ) {
    $insert_stmt->bind_param('s', $name);
    // Execute the prepared query.
    if ( ! $insert_stmt->execute() ) {
        echo "Failed";
        header("Location: ../?s=f");
    }
}
header("Location: ../?s=t");