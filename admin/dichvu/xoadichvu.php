<?php
    include('../config.php');
     $id = $_POST['id'];
    $lenh = 'delete from dichvu where madv ='.$id;
    mysqli_set_charset($conn,'utf8');
    $kq =  mysqli_query($conn, $lenh);
    if($kq){
        echo '1';
    }else echo '0';
?>