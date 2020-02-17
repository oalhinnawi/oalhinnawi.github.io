
<?php

$json = file_get_contents('php://input');
$dataObject = json_decode($json);
$dataArray = json_decode($json, true);


    $fn=$dataArray['first_name'];
    $ln=$dataArray['last_name'];
    $emp_id=$dataArray['employee_id'];
    $hire_date=$dataArray['hire_date'];
    $total_employees=$dataArray['total_employees'];

    echo "Total Employee";

    return "Total Employee";

 ?>
