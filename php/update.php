<?php
    include '../php/dbconnect.php';
    if(count($_POST)>0) {
mysqli_query($conn,"UPDATE usermaster set Id='" . $_POST['Id'] . "', firstname='" . $_POST['firstname'] . "', lastname='" . $_POST['lastname'] . "', address='" . $_POST['address'] . "' ,email='" . $_POST['email'] . "',password='" . $_POST['password'] . "',gender='" . $_POST['gender'] . "',dob='" . $_POST['dob'] . "',age='" . $_POST['age'] . "',zipcode='" . $_POST['zipcode'] . "',phone='" . $_POST['phone'] . "' WHERE Id='" . $_POST['Id'] . "'");
$message = "Record Modified Successfully";
}
$Id = intval($_GET['Id']); 
$result = mysqli_query($conn,"SELECT * FROM usermaster WHERE Id=".$Id);
$row= mysqli_fetch_array($result);
?>
<html>
<head>
<title>Update Employee Data</title>
</head>
<body>
<form name="fromUser" method="post" action="/php/php/update.php">
<div><?php if(isset($message)) { echo $message; } ?>
</div>
<div style="padding-bottom:5px;">
<a href="">Employee List</a>
</div>
First Name: <br>
<input type="text" name="firstname" class="txtField" value="<?php echo $row['firstname']; ?>">
<br>
Last Name :<br>
<input type="text" name="lastname" class="txtField" value="<?php echo $row['lastname']; ?>">
<br>
City:<br>
<input type="text" name="address" class="txtField" value="<?php echo $row['address']; ?>">
<br>
Email:<br>
<input type="text" name="email" class="txtField" value="<?php echo $row['email']; ?>">
<br>
passowrd:<br>
<input type="text" name="password" class="txtField" value="<?php echo $row['password']; ?>">
<br>
Gender:<br>
<input type="text" name="gender" class="txtField" value="<?php echo $row['gender']; ?>">
<br>
Dob:<br>
<input type="text" name="dob" class="txtField" value="<?php echo $row['dob']; ?>">
<br>
Age:<br>
<input type="text" name="age" class="txtField" value="<?php echo $row['age']; ?>">
<br>
Zipcode:<br>
<input type="text" name="zipcode" class="txtField" value="<?php echo $row['zipcode']; ?>">
<br>
Phone:<br>
<input type="text" name="phone" class="txtField" value="<?php echo $row['phone']; ?>">
<br>
<input type="submit" name="submit" value="Submit" class="buttom">

</form>
</body>
</html>