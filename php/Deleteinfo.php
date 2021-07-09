<html>
<head>
<title> User Edit </title>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>Delete Info</title>
  </head>
  <body>


<?php

include './header/nav.php';
include '../php/dbconnect.php';
$id= $_GET['Id'];
$Delete = "DELETE FROM `usermaster` WHERE Id=$id";
  $result = mysqli_query($conn,$Delete);
  header("Location: http://localhost/php/php/userAdd.php");

  

?>

  </body>
</html>
