var firstName = localStorage.getItem("firstName")
var lastName = localStorage.getItem("lastName")
var middleName = localStorage.getItem("middleName")

var education = localStorage.getItem("education") 
var email = localStorage.getItem("email")
var address = localStorage.getItem("address")
var date = localStorage.getItem("birthdaytime")

var gender = localStorage.getItem("gender")
var phoneNumber = localStorage.getItem("phoneNumber")
var numberType = localStorage.getItem("numberType")
 
//    employee status
var empStatus = localStorage.getItem("empStatus")
var seekingJob = localStorage.getItem("seekingJob") 
var jobTittle = localStorage.getItem("jobTittle")
var jobType = localStorage.getItem("jobType")
var jobSummary = localStorage.getItem("jobSummary")


// image
var dataImage = localStorage.getItem('profilePicture');
var actImage =  dataImage.split("\\").pop()

 document.getElementById('pro-image').src = `assests/image/${actImage}`


document.getElementById('firstName').innerHTML = firstName
document.getElementById('email').innerHTML = email
document.getElementById('number').innerHTML = phoneNumber
document.getElementById('fName').innerHTML = firstName
document.getElementById('mName').innerHTML = middleName
document.getElementById('lName').innerHTML = lastName
document.getElementById('address').innerHTML = address
document.getElementById('education').innerHTML = education
document.getElementById('seeking').innerHTML = seekingJob
document.getElementById('jobTittle').innerHTML = jobTittle
document.getElementById('jobType').innerHTML = jobType
document.getElementById('jobSummary').innerHTML = jobSummary

document.getElementById('addr').innerHTML = address
document.getElementById('gen').innerHTML = gender
document.getElementById('dob').innerHTML = date

document.getElementById('unemployeed').innerHTML = empStatus

