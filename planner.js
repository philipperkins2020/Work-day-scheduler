console.log("helloworld")

//Array for hours in schedule planner
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"]
//Grabbing the ID of currentDay to display day on page using the moment function
document.getElementById("currentDay").textContent = moment().format('dddd');
//Function for building the planner
function buildPlanner() {
    //Variable for grabbing the current hour in real time
    var currentHour = moment().hour()
    //Variable that sets isAfternoon to false
    var isAfternoon = false
    // if statement to 
    if (currentHour > 12) {
        isAfternoon = true
    }
    //For loop to run through every hour
    for (var i = 0; i < hours.length; i++) {
        // create an div element for the rows of time
        var row = document.createElement("div")
        //Added a classlist of row
        row.classList.add("row", "time-block")
        // Set the attribute for row to hours
        row.setAttribute("id", hours[i])
        console.log(row)
        // Variable for the hours
        var hour = document.createElement("div")
        // Added classlist for hour
        hour.classList.add("col-md-1", "hour")
        //Gave the hours html
        hour.innerHTML = hours[i]
        //Appended hour to row
        row.appendChild(hour)
        // created text area element
        var textarea = document.createElement("textarea")
        //Gave text area a class
        textarea.classList.add("col-md-10", "toDo")
        // Variable to parse the hours
        let hourToAdd = parseInt(hours[i]);
        //
        if (isAfternoon && hourToAdd < 6){
            hourToAdd+=12
        }
        // If the current hour is hourToAdd give the class of present
        if (hourToAdd === currentHour) {
           textarea.classList.add("present")

        // If hour to add is less than currentHour give class of past
        } else if(hourToAdd< currentHour) {
            textarea.classList.add("past")
        }
        // If hour is not present or past class give it the future class
        else {
            textarea.classList.add("future")
        }
        //Append the textarea to row
        row.appendChild(textarea)
        //Variable for button element
        var saveButton = document.createElement("button")
        //Class for save button
        saveButton.classList.add("btn", "col-md-1", "saveBtn")
        //
        var iTag = document.createElement("i")
        iTag.classList.add("fas", "fa-save")
        //Appending iTag to save button
        saveButton.appendChild(iTag)
        //Appending saveButton to row
        row.appendChild(saveButton)
        //Grabbing the id of planner and appending it to row
        document.getElementById("planner").appendChild(row)
    }
}


function colorCode() {
    for (var i = 0; i < hours.length; i++) {

    }

}

function getHour() {
    return moment().hour();
}


buildPlanner()