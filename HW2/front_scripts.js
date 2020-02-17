
var employees=[];
var emp_ids=[];
var total_employees=0;

//Get the Browser
function getBrowser(){
  //Get the user agent string
  var user_string=navigator.userAgent;
  //Get the browser icon
  var elem = document.createElement("img");
  //Resizing for aesthetic purposes
  elem.setAttribute("height", "50");
  elem.setAttribute("width", "50");

  //Checking to see if its safari first
  if(navigator.vendor ==  "Apple Computer, Inc."){
    console.log("BROWSER DEBUG: Safari");
    document.getElementById('browser').innerHTML = "Browser Detected: Safari ";
    elem.src='icons/safari.png';
    document.getElementById("browser").appendChild(elem);

  }
  //Check for Firefox
  else if(user_string.indexOf('Firefox')>-1){
    console.log("BROWSER DEBUG: FIREFOX");
    document.getElementById('browser').innerHTML = "Browser Detected: FireFox ";
    elem.src='icons/firefox.png';
    document.getElementById("browser").appendChild(elem);

  }
  //Check for Edge
  else if(user_string.indexOf('Edge')>-1){
    console.log("BROWSER DEBUG: EDGE");
        document.getElementById('browser').innerHTML = "Browser Detected: Edge ";
        elem.src='icons/edge.png';
        document.getElementById("browser").appendChild(elem);
  }
  //Check for Chrome
  else if(navigator.vendor ==  "Google Inc."){
    console.log("BROWSER DEBUG: CHROME");
    document.getElementById('browser').innerHTML = "Browser Detected: Chrome ";
    elem.src='icons/chrome.png';
    document.getElementById("browser").appendChild(elem);  }

  //Default to internet explorer
  else if(user_string.indexOf("Trident/")>0){
    console.log("Default to internet explorer");
    document.getElementById('browser').innerHTML='Browser Detected: Internet Explorer';
    elem.src='icons/edge.png';
    document.getElementById("browser").appendChild(elem);
  }


}

getBrowser();


//Generate a random employeeId of length 8 characters
function generate_id(){
  var id=(Math.floor(Math.random() * 100000000));
  if(id<10000000){
    id="0"+id.toString();
    return id;}
  else{
    id=id.toString();
    return id;}
}


//Create the Employee and add them to the array;

function createEmployee(){


  //Get First name from the submission
  first_name=document.getElementsByName("first_name")[0].value;

  console.log("DEBUG-FIRST NAME: "+first_name+'\n');

  //Get Last Name from the submission
  last_name=document.getElementsByName("last_name")[0].value;

  console.log("DEBUG-LAST NAME: "+last_name+'\n');

  //Get the Department
  var e = document.getElementById("dept_select");
  var strDept = e.options[e.selectedIndex].text;


  //Get the current date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;


  //Creating Employee ID Variable w/random num
  employeeId=generate_id();

  //Check to see if it's unique
  while(emp_ids.indexOf(employeeId)>-1){
    console.log("ID already exists, making another");
    employeeId=generate_id();
  }

  total_employees+=1;

  employee={"first_name":first_name,
            "last_name":last_name,
            "employee_id":employeeId,
            "hire_date":today,
            "total_employees":total_employees};

  //Append employee to employees array
  employees.push(employee);

  //Append emp_id to list of unique ids for future checking
  emp_ids.push(employeeId);


  //Debug check to see if our employee was created
  console.log(employee);

  //Construct and send our request
  $.ajax({
    url:"test.php",
    type:"POST",
    contentType:"application/json",
    data:JSON.stringify(employee),
    success:function(response){
      console.log('Sucessfully sent to php backend');
    },
    error:function(response){
      console.log("This was a complete and spectacular failure");
      console.log(response);
    }
  });

  //Update most recently Added employee
  document.getElementById('Employee Added').innerHTML = "Employee Added";
  document.getElementById('name').innerHTML = "Name: "+first_name+","+last_name;
  document.getElementById('department').innerHTML ="Department: "+ strDept;
  document.getElementById('emp_id').innerHTML = "ID: "+employeeId.toString();
  document.getElementById('hire_date').innerHTML = "Hire Date: "+today;
  document.getElementById('total_employees').innerHTML = "Total Employees: "+employees.length.toString();
}
