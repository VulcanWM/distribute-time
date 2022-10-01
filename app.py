from flask import Flask, render_template, request, redirect, flash
from functions import distribute
from lists import days, months
import os
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv("SECRET_KEY")

@app.route('/')
def index():
  return render_template('index.html')

@app.route("/distribute", methods=['POST', 'GET'])
def distribute_func():
  if request.method == 'POST':
    time_span1 = request.form['time_span1']
    time_span2 = request.form['time_span2']
    time_span = [time_span1, time_span2]
    days_time = {}
    activities = []
    modified_dates = {}
    for key in request.form:
      if key.capitalize() in days:
        days_time[key.capitalize()] = int(request.form[key.lower()])
      if key.startswith("activity") and key.endswith("name"):
        activity_number = key.replace("activity", "")
        activity_number = activity_number.replace("name", "")
        activity_dict = {"Name": request.form[key], "Duration": int(request.form[f'activity{activity_number}duration']), "Amount": int(request.form[f'activity{activity_number}amount'])}
        activities.append(activity_dict)
      if key.startswith("modified_date") and key.endswith("dt"):
        date = request.form[key]
        value_key = key.replace("dt", "duration")
        modified_dates[date] = int(request.form[value_key])
      # if key.startswith("modified_dt")
    output = distribute(activities, days_time, time_span, modified_dates)
    colours = {}
    for i in range(len(activities)):
      colour = "hsl(" + str(360 * random.uniform(0,1)) + ',' + str(25 + 70 * random.uniform(0,1)) + '%,' + str(85 + 10 * random.uniform(0,1)) + '%)'
      colours[activities[i]["Name"]] = colour
    # distributed_time = output[0]
    distributed_activities = output[1]
    distributed_new = []
    for key in distributed_activities:
      date = key[0]
      split = date.split("-")
      year = split[0]
      month = split[1]
      day = split[2]
      new_date = f"{day} {months[int(month) - 1]} {year}"
      data = list(key)
      data.append(new_date)
      distributed_new.append(data)
    return render_template('timetable.html', timetable=distributed_new, colours=colours)
  else:
    return redirect("/")