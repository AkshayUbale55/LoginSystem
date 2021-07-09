<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/style.css">
    <title>UPDATE DETAILS</title>
    <style>
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        .head{
            margin-left: 0px !important;
        }
    </style>
</head>

<body>
    <?php
    require 'header/nav.php';
    ?>

    <div class="container">
        <h1 class="mt-4 head">UPDATE INFO</h1>
        <form action="" method="post">
            <?php
            $showAlert = false;
            $showError = false;
            include '../php/dbconnect.php';
            $id = $_GET['Id'];
            $updateQuery = "SELECT * FROM `usermaster` where Id=$id";
            $updatedata = mysqli_query($conn, $updateQuery);
            $update = mysqli_fetch_array($updatedata);
            if (isset($_POST['submit'])) {
                $Idupdate = $_GET['Id'];
                $firstname = $_POST["firstname"];
                $lastname = $_POST["lastname"];
                $address = $_POST["address"];
                $email = $_POST["email"];
                $password = $_POST["password"];
                $gender = $_POST["gender"];
                $dob = $_POST["dob"];
                $age = $_POST["age"];
                $zipcode = $_POST["zipcode"];
                $phone = $_POST["phone"];

                $query = "UPDATE `usermaster` set Id=$Idupdate, firstname='$firstname', lastname='$lastname', address='$address', email='$email', password='$password', gender='$gender', dob='$dob', age='$age', zipcode='$zipcode', phone='$phone' WHERE Id=$Idupdate";
                $result = mysqli_query($conn, $query);
                if ($result) {
                    // $showAlert = true;
                    header("Location: http://localhost/php/php/UserEdit.php");
                }
                //  else {
                //     $showError = "DATA AS BEEN NOT UPDATED";
                // }
            }

            ?>
            <?php
//             if ($showAlert) {
//                 echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
// <strong>Successfully!</strong> DATA UPDATED.
// <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>';
//             }
//             if ($showError) {
//                 echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
//         <strong>Error!</strong> ' . $showError . '
//         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         </div>';
//             }
            ?>

            <div class="row mb-2  col-md-12">
                <label for="firstname" class="form-label">First Name</label>
                <input type="text" class="form-control" value="<?php echo $update['firstname']; ?>" name="firstname" Id="firstname">
            </div>
            <div class="row mb-2 col-md-12">
                <label for="lastname" class="form-label">Last Name</label>
                <input type="text" class="form-control" value="<?php echo $update['lastname']; ?>" name="lastname" Id="lastname">
            </div>
            <div class="row mb-2 col-md-12">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" value="<?php echo $update['address']; ?>" name="address" Id="address">
            </div>
            <div class="row mb-2 col-md-12">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" value="<?php echo $update['email']; ?>" name="email" Id="email">
            </div>
            <div class="row mb-2 col-md-12">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" value="<?php echo $update['password']; ?>" Id="password" class="form-control">
            </div>

            <div class="row mb-2 col-md-12">
                <label for="gender" class="form-label">Gender</label>
                <input type="text" class="form-control" value="<?php echo $update['gender']; ?>" name="gender" Id="gender">
            </div>
            <div class="row mb-2 col-md-12">
                <label for="dob" class="form-label">Date of Birth</label>
                <input type="date" class="form-control" value="<?php echo $update['dob']; ?>" name="dob" Id="dob">
            </div>
            <div class="row mb-2 col-md-12">
                <label for="age" class="form-label">Age</label>
                <input type="text" class="form-control" value="<?php echo $update['age']; ?>" name="age" Id="age">
            </div>
            <div class="row mb-2 col-md-12">
                <label for="zipcode" class="form-label">Zipcode</label>
                <input type="number" class="form-control" value="<?php echo $update['zipcode']; ?>" name="zipcode" Id="zipcode">
            </div>
            <div class="row mb-3 col-md-12">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="number" class="form-control" value="<?php echo $update['phone']; ?>" name="phone" Id="phone">
            </div>
            <button type="submit" name="submit" class="btn btn-success mb-2 col-md-11">Update</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>


</body>

</html>