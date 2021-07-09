<?php
if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
  $loggedin = true;
}else{
  $loggedin = false;
}
 echo '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/php/php/userAdd.php">REGISTRATION FORM</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>';
      if(!$loggedin){
       echo '<div class="collapse navbar-collapse"id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/php/php/index.php">Home</a>
          </li>
        <li class="nav-item">
            <a class="nav-link" href="/php/php/userAdd.php">Useradd</a>
          </li> 
          ';}
          elseif($loggedin){
        echo 
        '<ul class="navbar-nav text-right me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <a class="nav-link" href="/php/php/userEdit.php">UserEdit</a>
              </li> 
          <li class="nav-item">
            <a class="nav-link" href="/php/php/logout.php">logout</a>
          </li>
          </ul>';}
       
       echo ' 
      </div>
    </div>
  </nav>';
  ?>
