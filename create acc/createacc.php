<?php
$conn = mysqli_connect("localhost", "root", "");

if(isset($_POST['submit'])){
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

$verify_query = mysqli_query($con, "SELECT email FROM creatacc_tab WHERE email ='$mail'"))
if(mysqli_num_rows($verify_query) !=0 ){
    echo"<div class='message'>
     <p> this mail is used, try another one please!</p>
     </div> <br>";
     echo "<a href='javascript:self.history.back()'><button class='btn> Go Back</button>";
{
mysqli_query($con, "INSERT INTO creatacc_tab(username, email,password)values('$username', '$email', '$password')  or die("error occured")");

}
}

}




?>