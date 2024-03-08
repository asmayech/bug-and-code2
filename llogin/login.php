<?php
$conn = mysqli_connect("localhost", "root", "");
if (isset($_POST['login_btn'])) {
    $username = $_POST['username'];
    $password = $_POST['pwd'];
    $sql = "SELECT * FROM  .... WHERE username='$username'";
    $result = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($result)) {
        $resPass = $row['password'];
        if ($password == $resPass) {
            header('Location:homepage.html');
        } else {
            echo "<script> 
            alert ('login unsuccessful');
            </script>";
        }
    }
}
