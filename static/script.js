const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function add_days(){
  var days_div = document.getElementById("days_time");
  for (let index = 0; index < days.length; ++index) {
    var day = days[index];
    var day_label = document.createElement("label")
    day_label.innerHTML = "Study Time (minutes) on " + day + "  ";
    day_label.setAttribute("for", day.toLowerCase());
    days_div.appendChild(day_label)
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

  var br = document.createElement("br");
  activities_div.appendChild(br);
}

function download_timetable(){
  var a = document.createElement("a");
  a.href = window.URL.createObjectURL(new Blob([document.body.innerText.replace("Download Timetable as Text File", "")], {type: "text/plain"}));
  a.download = "timetable.txt";
  a.click();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  // console.log("drag")
  // console.log(ev)
  var div = document.getElementById(ev.target.id)
  // console.log("div")
  // console.log(div)
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  // console.log("drop")
  var data = ev.dataTransfer.getData("text");
  // console.log(ev.target)
  // if ('Nothing for this day' in ev.target){
  //   console.log("cool ig")
  // }
  var text = document.getElementById(ev.target.innerText)
  ev.target.appendChild(document.getElementById(data));
}

if (window.location.pathname == "/"){
  add_days();
  add_activity();
}

