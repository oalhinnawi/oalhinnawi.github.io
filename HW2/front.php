<!DOCTYPE html>
<html lang="en" dir="ltr">
<script src="https://code.jquery.com/jquery-3.4.1.js"></script>
<script src="front_scripts.js"></script>
  <head>
    <meta charset="utf-8">
    <title>Teehee moment</title>
  </head>
  <body>


  <form>
  First Name:<input type="text" name="first_name" value="TESTNAME1"><br>
  Last Name:<input type="text" name="last_name" value="TESTNAME2"><br>
  <button type="button" onclick="createEmployee()">Submit</button>
  </form>

  <div>
    <?php include 'test.php';?>
  </div>
    </body>
</html>
