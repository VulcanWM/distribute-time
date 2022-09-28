const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function add_days(){
  `<input type="number" id="monday" name="monday" placeholder="minutes on monday" value="300">`
  var days_div = document.getElementById("days_time");
  for (let index = 0; index < days.length; ++index) {
    var day = days[index];
    var day_new = document.createElement("input");
    day_new.setAttribute("type", "number")
    day_new.setAttribute("id", day.toLowerCase())
    day_new.setAttribute("name", day.toLowerCase())
    day_new.setAttribute("placeholder", "minutes on " + day)
    day_new.setAttribute("value", 310 - (index+1) * 10)
    days_div.appendChild(day_new);
    var br = document.createElement("br");
    days_div.appendChild(br);
  }
}

add_days();

function add_activity(){
  var activity = "hello";
  var activity_number = 0;
  while (activity != null){
    activity_number = activity_number + 1;
    activity = document.getElementById(`activity${activity_number}name`)
  }
  var activities_div = document.getElementById("activities");
  
  var button = document.getElementById("add");
  button.parentNode.removeChild(button);
  
  var br = document.createElement("br");
  activities_div.appendChild(br);
  
  var activity_new_name = document.createElement("input");
  activity_new_name.setAttribute("type", "text");
  activity_new_name.setAttribute("id", `activity${activity_number}name`);
  activity_new_name.setAttribute("name", `activity${activity_number}name`);
  activity_new_name.setAttribute("placeholder", `activity ${activity_number} name`);
  activity_new_name.setAttribute("value", `Activity ${activity_number}`);
  activities_div.appendChild(activity_new_name);
  
  var activity_new_duration = document.createElement("input");
  activity_new_duration.setAttribute("type", "number");
  activity_new_duration.setAttribute("id", `activity${activity_number}duration`);
  activity_new_duration.setAttribute("name", `activity${activity_number}duration`);
  activity_new_duration.setAttribute("placeholder", `activity ${activity_number} duration in minutes`);
  activity_new_duration.setAttribute("value", `15`);
  activities_div.appendChild(activity_new_duration);
  
  var activity_new_amount = document.createElement("input");
  activity_new_amount.setAttribute("type", "number");
  activity_new_amount.setAttribute("id", `activity${activity_number}amount`);
  activity_new_amount.setAttribute("name", `activity${activity_number}amount`);
  activity_new_amount.setAttribute("placeholder", `activity ${activity_number} amount`);
  activity_new_amount.setAttribute("value", `12`);
  activities_div.appendChild(activity_new_amount);

  var new_button = document.createElement("button");
  new_button.setAttribute("id", "add");
  new_button.setAttribute("onclick", "add_activity()");
  new_button.setAttribute("type", "button")
  new_button.innerHTML = "Add Activity"
  activities_div.appendChild(new_button)
}