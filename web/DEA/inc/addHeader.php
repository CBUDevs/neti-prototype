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
if (isset($_POST["dName"],
          $_POST["header"],
          $_POST["content"])) {

    $name = $_POST["dName"];
    $header = $_POST["header"];
    $content = $_POST["content"];
    $user = $_SESSION['username'];
              
} else header("Location: ../?s=f");
if ( $insert_stmt = $conn->prepare("INSERT INTO content (name, header, content, user) VALUES (?, ?, ?, ?)") ) {
    $insert_stmt->bind_param('ssss', $name, $header, $content, $user);
    // Execute the prepared query.
    if ( ! $insert_stmt->execute() ) {
        echo "Failed";
        header("Location: ../?s=f");
    }
}
header("Location: ../?s=t");