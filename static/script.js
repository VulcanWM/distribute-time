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
  new_button.setAttribute("class", "add")
  new_button.setAttribute("onclick", "add_activity()");
  new_button.setAttribute("type", "button")
  new_button.innerHTML = "Add Activity"
  activities_div.appendChild(new_button)

  var br = document.createElement("br");
  activities_div.appendChild(br);
}

function add_modified_date(){
  var date = "hello";
  var date_number = 0;
  while (date != null){
    date_number = date_number + 1;
    date = document.getElementById(`modified_date${date_number}dt`)
  }
  var date_div = document.getElementById("modified_dates");
  
  var button = document.getElementById("add_date");
  button.parentNode.removeChild(button);
  
  var date_new_date = document.createElement("input");
  date_new_date.setAttribute("type", "date");
  date_new_date.setAttribute("id", `modified_date${date_number}dt`);
  date_new_date.setAttribute("name", `modified_date${date_number}dt`);
  date_new_date.setAttribute("value", `2022-10-01`);
  date_div.appendChild(date_new_date);
  
  var date_new_time = document.createElement("input");
  date_new_time.setAttribute("type", "number");
  date_new_time.setAttribute("id", `modified_date${date_number}duration`);
  date_new_time.setAttribute("name", `modified_date${date_number}duration`);
  date_new_time.setAttribute("placeholder", `study time on 2022-10-01 in minutes`);
  date_new_time.setAttribute("value", `0`);
  date_div.appendChild(date_new_time);

  var new_button = document.createElement("button");
  new_button.setAttribute("id", "add_date");
  new_button.setAttribute("class", "add")
  new_button.setAttribute("onclick", "add_modified_date()");
  new_button.setAttribute("type", "button")
  new_button.innerHTML = "Add Modified Date"
  date_div.appendChild(new_button)

  var br = document.createElement("br");
  date_div.appendChild(br);
}

function add_modified_dt_range(){
  var date = "hello";
  var date_number = 0;
  while (date != null){
    date_number = date_number + 1;
    date = document.getElementById(`modified_dt_range${date_number}date`)
  }
  var date_div = document.getElementById("modified_dt_ranges");
  
  var button = document.getElementById("add_dt_range");
  button.parentNode.removeChild(button);
  
  var date_new_date = document.createElement("input");
  date_new_date.setAttribute("type", "date");
  date_new_date.setAttribute("id", `modified_dt_range${date_number}date`);
  date_new_date.setAttribute("name", `modified_dt_range${date_number}date`);
  date_new_date.setAttribute("value", `2022-10-03`);
  date_div.appendChild(date_new_date);

  var date_new_2date = document.createElement("input");
  date_new_2date.setAttribute("type", "date");
  date_new_2date.setAttribute("id", `modified_dt_range${date_number}date2`);
  date_new_2date.setAttribute("name", `modified_dt_range${date_number}date2`);
  date_new_2date.setAttribute("value", `2022-10-10`);
  date_div.appendChild(date_new_2date);
  
  var date_new_time = document.createElement("input");
  date_new_time.setAttribute("type", "number");
  date_new_time.setAttribute("id", `modified_dt_range${date_number}duration`);
  date_new_time.setAttribute("name", `modified_dt_range${date_number}duration`);
  date_new_time.setAttribute("placeholder", `study time during range in minutes`);
  date_new_time.setAttribute("value", `0`);
  date_div.appendChild(date_new_time);

  var new_button = document.createElement("button");
  new_button.setAttribute("id", "add_dt_range");
  new_button.setAttribute("class", "add")
  new_button.setAttribute("onclick", "add_modified_dt_range()");
  new_button.setAttribute("type", "button")
  new_button.innerHTML = "Add Modified Date Range"
  date_div.appendChild(new_button)

  var br = document.createElement("br");
  date_div.appendChild(br);
}

function download_timetable(){
  var a = document.createElement("a");
  var text = document.body.innerText
  text = text.split("Download Timetable as Text File")[1]
  a.href = window.URL.createObjectURL(new Blob([text], {type: "text/plain"}));
  a.download = "timetable.txt";
  a.click();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  var div = document.getElementById(ev.target.id)
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var text = document.getElementById(ev.target.innerText)
  ev.target.appendChild(document.getElementById(data));
}

if (window.location.pathname == "/distribute"){
  add_days();
  add_activity();
}

var Script1 = document.createElement("script");
Script1.setAttribute("async", null);
Script1.src = 
"https://www.googletagmanager.com/gtag/js?id=G-P9PNVHSYQD";
document.head.appendChild(Script1);


var Script2 = document.createElement("script");
Script2.innerText = 
"window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-P9PNVHSYQD');";
document.head.appendChild(Script2);