<?php
include '../php/dbconnect.php';
session_start();
if(!$_SESSION['firstname']){
    header("Location: http://localhost/php/php/index.php");
    exit();
}

$firstname = $_SESSION['firstname']; 
?>


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
    <title>Welcome - <?php $_SESSION['firstname']?></title>
  </head>
  <body>
   <?php
 include './header/nav.php';
 ?>
  <div class="container my-5">
  <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Welcome - <?php echo $_SESSION['firstname']?></h4>
  <p>You've successfully loggedin,this is your profile.hope you were doing good during this pandemic and We are glad to see you back <?php echo $_SESSION['firstname']?></p>
  <hr>
  <p class="mb-0">Yoc can update the details by click on <b>Update Button</b></p>
</div>
  </div>
  <?php
  // $sql = "SELECT * FROM usermaster WHERE firstname=$firstname";
  // $result = mysqli_query($conn,$sql);
  //  $rows= mysqli_num_rows($result);
  // if (mysqli_num_rows($result) > 0) {
?>

  <table class="table">
  <thead>
    <tr>
      <th scope="col">#id</th>
      <th scope="col">Firstname</th>
      <th scope="col">Lastname</th>
      <th scope="col">address</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">gender</th>
      <th scope="col">dob</th>
      <th scope="col">age</th>
      <th scope="col">zipcode</th>
      <th scope="col">phone</th>
      <th colspan="2" class="text-center mr-3">Operations</th>
    </tr>
  </thead>
  <tbody>
<?php
  // $email = $_GET['email'];
  $sql = "SELECT * FROM `usermaster` where firstname ='$firstname'";
  $result = mysqli_query($conn,$sql);
  //  $rows= mysqli_num_rows($result);
  if(mysqli_num_rows($result) > 0){
  while($data = mysqli_fetch_array($result))
{
    // if($_SESSION['firstname']){
    //   $firstname = $_SESSION['firstname']; 
    //   $result = mysqli_query($conn, "SELECT * from `usermaster` where firstname= $firstname");
    //   $data = mysqli_fetch_array($result);
?>
    <tr>
    <td><?php echo $data['Id'];?></td>
    <td><?php echo $data['firstname']; ?></td>
    <td><?php echo $data['lastname']; ?></td>    
    <td><?php echo $data['address']; ?></td>    
    <td><?php echo $data['email']; ?></td>    
    <td><?php echo $data['password']; ?></td>    
    <td><?php echo $data['gender']; ?></td>    
    <td><?php echo $data['dob']; ?></td>    
    <td><?php echo $data['age']; ?></td>    
    <td><?php echo $data['zipcode']; ?></td>    
    <td><?php echo $data['phone']; ?></td>    
    <td><a href="/php/php/Editinfo.php?Id=<?php echo $data['Id']; ?>" class="btn btn-sm btn-success">Update</a></td>
    <td><a  href="/php/php/Deleteinfo.php?Id=<?php echo $data['Id']; ?>" class="btn btn-sm btn-danger confirmation" onclick="DeleteFunction()">Delete</a></td>
  </tr>
  <?php
  // }
}
  }
?>
<script type="text/javascript">
 var elems = document.getElementsByClassName('confirmation');
    var confirmIt = function (e) {
        if (!confirm('Are you sure, You want to Delete it?')) e.preventDefault();
    };
    for (var i = 0, l = elems.length; i < l; i++) {
        elems[i].addEventListener('click', confirmIt, false);
    }
</script>
 </tbody>
</table>
</table>
<?php

?>
</head>
<body>
  