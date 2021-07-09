<?php
$showAlert = false;
$showError = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    include '../php/dbconnect.php';
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $cpassword = $_POST["cpassword"];
    $gender = $_POST["gender"];
    $dob = $_POST["dob"];
    $age = $_POST["age"];
    $zipcode = $_POST["zipcode"];
    $phone = $_POST["phone"];
    // $exists = false;
    // check whether the username exist or
    $existsql = "SELECT * FROM `usermaster` WHERE email='$email'";
    $result = mysqli_query($conn, $existsql);
    $numExistRows = mysqli_num_rows($result);
    if ($numExistRows > 0) {
        $showError = "User Already Exists";
    } else if ($firstname == "" || $lastname == "" || $email == "" || $address == "" || $password == "" || $gender == "" || $dob == "" || $age == "" || $zipcode == "" || $phone == "") {
        $showError = "Enter proper details";
    } else if (($password == $cpassword)) {
        // $hash = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO `usermaster` (`firstname`, `lastname`, `address`, `email`, `password`, `gender`, `dob`, `age`, `zipcode`, `phone`) VALUES ('$firstname', '$lastname', '$address', '$email', '$password', '$gender', '$dob', '$age', '$zipcode', '$phone')
        ";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            $showAlert = true;
            header("Location: http://localhost/php/php/index.php");
        }
    }
}


?>

<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>Sign Up</title>
    <style>
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
    </style>
</head>

<body>
    <?php
    require 'header/nav.php';
    ?>
    <?php
    if ($showAlert) {
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Successfully!</strong> your account as been registerd
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>';
    }
    if ($showError) {
        echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error!</strong> ' . $showError . '
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>';
    }
    ?>
    <div class="container">
        <h1 class="my-4">Register YourSelf</h1>
        <form action="/php/php/userAdd.php" method="post">
            <div class="row mb-2  col-md-10">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" name="firstname" id="firstname">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" name="lastname" id="lastname">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" name="address" id="address">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="email">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" id="password" class="form-control">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="cpassword" class="form-label">Confirm Password</label>
                <input type="password" name="cpassword" class="form-control">
                <div id="cpassword" class="form-text">Enter the password same as above.</div>
            </div>
            <div class="row mb-2 col-md-10">
                <label for="gender" class="form-label">Gender</label>
                <input type="text" class="form-control" name="gender" id="gender">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="dob" class="form-label">Date of Birth</label>
                <input type="date" class="form-control" name="dob" id="dob">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="age" class="form-label">Age</label>
                <input type="text" class="form-control" name="age" id="age">
            </div>
            <div class="row mb-2 col-md-10">
                <label for="zipcode" class="form-label">Zipcode</label>
                <input type="number" class="form-control" name="zipcode" id="zipcode">
            </div>
            <div class="row mb-3 col-md-10">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="number" class="form-control" name="phone" id="phone">
            </div>
            <button type="submit" class="btn btn-primary mb-2 col-md-9">SignUp</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


</body>

</html>