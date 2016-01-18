<?php
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");

class returnObject implements JsonSerializable {
    
    public $uid = -1;
    public $name = 'loadError';
    public $headerString = array();
    public $content = array();
    
    public function jsonSerialize() {
        return (object) get_object_vars($this);
    }
    
}

$servername = "localhost";
$username = "eosxnet_druglord";
$password = "x+rU3diITCaK";
$dbname = "eosxnet_drugz";
$jsonArray = array();
$nameArray = array();

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
    $sql = "SELECT header, content FROM content WHERE name = '$nameArray[$nID]'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $inject = new returnObject();
        $inject->uid = $nID;
        $inject->name = $nameArray[$nID];
        while($row = $result->fetch_assoc()) {
            $inject->headerString[] = $row["header"];
            $inject->content[] = $row["content"];
        }
        $jsonArray[] = $inject->jsonSerialize();
    }
}
$conn->close();

echo $_GET['callback'] . '('.json_encode($jsonArray).')';