<!DOCTYPE html>
<html>

<head>
  <title>Register Page page</title>
</head>

<body>
    <?php
    $exists = true;
    $showAlert = false;
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      include '../php/dbconnect.php';
      $fname = $_POST["fname"];
      $flname = $_POST["flname"];
      $faddress = $_POST["faddress"];
      $femail = $_POST["femail"];
      $fpass = $_POST["fpass"];
      $fcpass = $_POST["fcpass"];
      $fgender = $_POST["fgender"];
      $fdob = $_POST["fdob"];
      $fzipcode = $_POST["fzipcode"];
      $fphone = $_POST["fphone"];
      if (($fpass == $fcpass) && $exists == false) {
        $sql = "INSERT INTO `usermaster` ( `firstname`, `lastname`, `address`, `email`, `password`, `gender`, `dob`, `age`, `zipcode`, `mobileno`) VALUES ('$fname', '$flname', '$faddress', '$femail', '$fpass', '$fgender', '$fdob', '$fzipcode', '$fphone')";
        $result = mysqli_query($conn, $sql);
        if ($result)
        //  {
        //   $showAlert = true;
        // }
        {
          echo "New record created successfully !";
         } else {
          echo "Error: " . $sql . "
      " . mysqli_error($conn);
         }
         mysqli_close($conn);
      }
      }
    ?>

    <!-- <?php
    if ($showAlert) {
      echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>Successfully!</strong>your account as been created
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>';
    }
    ?> -->
</body>

</html>