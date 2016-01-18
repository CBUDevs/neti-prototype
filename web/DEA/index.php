<?php
// Session System
include_once '../Aeos/inc/pcon.php';
include_once '../Aeos/inc/func.php';

sec_session_start(); #php grabs user session
#lockout(2, $mysqli); #php allows access
#$userArray = loadUsrArray($mysqli); #php grabs specific user attributes to display
?>

<!DOCTYPE html>
<html>
    
    <head>
        
        <meta charset="utf-8">  
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>DEA App</title>
        <meta name="description" content="DEA App Control Panel">
        <link rel="stylesheet" href="css/style.css">
        <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script type="text/javascript" src="inc/admin.js"></script>
        
    </head>
    
    <body onload="updateContent()">
        
        <div id="control">
            <div id="add">
                
                <form action="inc/addHeader.php" method="POST"><p>Add new header <input type="text" name="header" placeholder="Name of the header"> to drug <input type="text" name="dName" placeholder="Drug Name"> with the content <input type="text" name="content" placeholder="Content of the header"> <button>Submit</button></p></form>
                
                <center><form action="inc/addDrug.php" method="POST"><p>Add new drug: <input type="text" name="dName" placeholder="Drug Name"> <button>Submit</button></p></form></center>
                
            </div>
        </div>
        
        <div id="content"></div>
        
    </body>
    
</html>