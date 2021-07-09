<?php
$login = false;
$showError = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  include '../php/dbconnect.php';
  $firstname = $_POST["firstname"];
  // $lastname = $_POST["lastname"];
  // $username = $_POST['firstname'] . ' ' . $_POST['lastname'];
  $email = $_POST["email"];
  $dob = $_POST["dob"];
  $sql = "SELECT * from `usermaster` where firstname='$firstname' AND email='$email' AND dob='$dob'";

  $result = mysqli_query($conn, $sql);
  $num = mysqli_num_rows($result);
  if ($num == 1) {
    //     while($row=mysqli_fetch_assoc($result)){
    // if(password_verify($password,$row['password']));{
    $login = true;
    session_start();
    $_SESSION['loggedin'] = true;
    $_SESSION['firstname'] = $firstname;
    header("Location: http://localhost/php/php/userEdit.php");
    exit();
    // }
    // }

  } elseif (!$num) {
    $showError = "Invalid Credentials ";
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

  <title>Login Page!</title>
</head>

<body>
  <?php
  include './header/nav.php';
  ?>
  <?php
  if ($login) {
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Successfully!</strong> your are logged in
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
  <h1 class="text-center my-5">LOGIN YOURSELF!</h1>

  <div class="login_container">
    <form action="/php/php/index.php" method="post">
      <div class="row mb-2 col-md-12 my-3">
        <label for="firstname" class="form-label">username</label>
        <input type="text" class="form-control" name="firstname" id="firstname" placeholder="enter firstname">
      </div>
      <div class="row mb-2 col-md-12 ">
        <label for="inputEmail" class="col-sm-3 col-form-label">Email</label>
        <input type="email" name="email" class="form-control" id="inputEmail">
      </div>
      <div class="row mb-2 col-md-12">
        <label for="dob" class="form-label">Date of Birth</label>
        <input type="date" class="form-control" name="dob" id="dob">
      </div>
      <button type="submit" class="btn btn-dark col-md-11 ">Sign in</button>
    </form>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>