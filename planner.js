console.log("helloworld")
var hours = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"]
 
document.getElementById("currentDay").textContent=  moment().format('dddd');

 function buildPlanner(){
    
    for (var i=0; i<hours.length; i++){
       
        var row = document.createElement("div")
        row.classList.add("row","time-block")
        
        console.log(row)
        var hour= document.createElement("div")
        hour.classList.add("col-md-1","hour")
        hour.innerHTML=hours[i]
        row.appendChild(hour)
        var textarea = document.createElement("textarea")
        textarea.classList.add("col-md-10","toDo")
        row.appendChild(textarea)
        var saveButton = document.createElement("button")
        saveButton.classList.add("btn","col-md-1","saveBtn")
        var iTag = document.createElement("i")
        iTag.classList.add("fas","fa-save")
        saveButton.appendChild(iTag)
        row.appendChild(saveButton)
        
      
      
      
        
        document.getElementById("planner").appendChild(row)
     }
 }


function colorCode(){
    console.log(hours)
}

 function getHour() {
     return moment().hour();
 }


 buildPlanner()