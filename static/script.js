function add_activity(){
  var activity = "hello";
  var activity_number = 0;
  while (activity != null){
    activity_number = activity_number + 1;
    activity = document.getElementById(`activity${activity_number}name`)
  }
  console.log(activity_number);
  var activities_div = document.getElementById("activities");
  activities_div.innerHTML = activities_div.innerHTML + `<br><input type="text" id="activity${activity_number}name" name="activity${activity_number}name" placeholder="activity ${activity_number} name" value="Activity ${activity_number}">`
  activities_div.innerHTML = activities_div.innerHTML + `<input type="number" id="activity${activity_number}duration" name="activity${activity_number}duration" placeholder="activity ${activity_number} duration in minutes" value="15">`
  activities_div.innerHTML = activities_div.innerHTML + `<input type="number" id="activity${activity_number}amount" name="activity${activity_number}amount" placeholder="activity ${activity_number} amount" value="12">`
}