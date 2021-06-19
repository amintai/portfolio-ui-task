function FormData(){
    var firstName = document.forms["joinForm"]["firstName"].value;
    var middleName = document.forms["joinForm"]["middleName"].value;
    var lastName = document.forms["joinForm"]["lastName"].value;
    var education = document.forms["joinForm"]["education"].value;
    var email = document.forms["joinForm"]["email"].value;
    var address = document.forms["joinForm"]["address"].value;
    var phoneNumber = document.forms["joinForm"]["phoneNumber"].value;
    var date = document.getElementById('datePicker').value;
    var gender = document.forms["joinForm"]["gender"].value;
    var bannerImage = document.getElementById('profilePicture').value;
    

   
        localStorage.setItem("phoneNumber", phoneNumber);

    localStorage.setItem("profilePicture", bannerImage);


    localStorage.setItem("firstName", firstName);
    localStorage.setItem("middleName", middleName);
    localStorage.setItem("lastName", lastName);

    localStorage.setItem("education", education);
    
    localStorage.setItem("address", address);
    localStorage.setItem("email",email)
    localStorage.setItem("gender", gender);
    localStorage.setItem("birthdaytime",date)
}




function getEmployee() {

    var empStatus = document.forms["employee"]["empStatus"].value
    var seekingJob = document.forms["employee"]["seekingJob"].value
    var jobTittle = document.forms["employee"]["jobTittle"].value
    var jobType = document.forms["employee"]["jobType"].value
    var jobSummary = document.forms["employee"]["jobSummary"].value


    localStorage.setItem("empStatus", empStatus);
    localStorage.setItem("seekingJob" , seekingJob);
    localStorage.setItem("jobTittle", jobTittle);
    localStorage.setItem("jobType", jobType);
    localStorage.setItem("jobSummary" , jobSummary)

    // alert(`${empStatus} ${seekingJob} ${jobTittle} ${jobType} ${jobSummary}`)
}