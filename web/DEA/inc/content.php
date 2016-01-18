<?php
// Session System
include_once '../../Aeos/inc/pcon.php';
include_once '../../Aeos/inc/func.php';
sec_session_start();
#lockout(2, $mysqli);

$servername = "localhost";
$username = "eosxnet_druglord";
$password = "x+rU3diITCaK";
$dbname = "eosxnet_drugz";

$conn = new mysqli($servername, $username, $password, $dbname); #connect

if ($conn->connect_error) { #check for errors
    die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT name FROM content";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if (!in_array($row["name"], $nameArray)) {
            $nameArray[] = $row["name"];
        }
    }
}
$nCount = count($nameArray);
for ($nID = 0; $nID < $nCount; $nID++) {
    $sql = "SELECT header, content, user FROM content WHERE name = '$nameArray[$nID]'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo("<div id='drug'><h3>$nameArray[$nID] ($nID)</h3>");
        echo("<p><a href=''>Add</a> <a href=''>Edit</a> <a href=''>Delete</a></p>");
        while($row = $result->fetch_assoc()) {
            $header = $row["header"];
            $content = $row["content"];
            echo("<div id='header'>$header</div>");
            echo("<div id='content'>$content</div>");
            echo("<div id='spacer'></div>");
        }
        echo("</div>");
    }
}
$conn->close();