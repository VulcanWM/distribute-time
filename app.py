from flask import Flask, render_template, request, redirect, flash
from functions import distribute
from lists import days
import os

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
    for key in request.form:
      if key.capitalize() in days:
        days_time[key.capitalize()] = int(request.form[key.lower()])
      if key.startswith("activity") and key.endswith("name"):
        activity_number = key.replace("activity", "")
        activity_number = activity_number.replace("name", "")
        activity_dict = {"Name": request.form[key], "Duration": int(request.form[f'activity{activity_number}duration']), "Amount": int(request.form[f'activity{activity_number}amount'])}
        activities.append(activity_dict)
    output = distribute(activities, days_time, time_span)
    # distributed_time = output[0]
    distributed_activities = output[1]
    return render_template('timetable.html', timetable=distributed_activities)
  else:
    return redirect("/")