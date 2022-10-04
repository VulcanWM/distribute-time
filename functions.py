import datetime
from lists import days
from flask import session

def get_date_y_m_d(date_string):
  date = datetime.datetime.strptime(date_string, "%Y-%m-%d")
  date = date.date()
  return date

def get_day_y_m_d(date_string):
  date = get_date_y_m_d(date_string)
  dayindex = date.weekday()
  day = days[dayindex]
  return day

def get_activity(activities):
  activity = activities[0]
  index = 0
  while activity['Amount'] == 0:
    index = index + 1
    if index == len(activities):
      return False
    activity = activities[index]
  return activity
  
def all_activities_done(activities):
  for activity in activities:
    if activity['Amount'] > 0:
      return False
  return True

def distribute(activities, days_time, time_span, modified_dates):
  distributed_time = {}
  distributed_activities = {}
  day_start = time_span[0]
  day_end = time_span[1]
  date = get_date_y_m_d(day_start)
  while str(date) <= str(day_end):
    day = get_day_y_m_d(str(date))
    if str(date) in str(modified_dates.keys()):
      distributed_activities[str(date)] = modified_dates[str(date)]
    else:
      distributed_time[str(date)] = days_time[day]
    distributed_activities[str(date)] = []
    date = date + datetime.timedelta(days=1)
  while all_activities_done(activities) == False:
    activity = get_activity(activities)
    if activity == False:
      break
    sorted_dates = sorted(distributed_time.items(), key=lambda x: x[1], reverse=True)
    for sorted_date_info in sorted_dates:
      sorted_date = sorted_date_info[0]
      if distributed_time[sorted_date] > 0:
        activity = get_activity(activities)
        if activity == False:
          break
        time_for_activity = activity['Duration']
        if time_for_activity > distributed_time[sorted_date]:
          pass
        else:
          time_today = distributed_time[sorted_date]
          time_now = time_today - time_for_activity
          del distributed_time[sorted_date]
          distributed_time[sorted_date] = time_now
          todays_activities = distributed_activities[sorted_date]
          todays_activities.append(activity)
          del distributed_activities[sorted_date]
          distributed_activities[sorted_date] = todays_activities
          amount_activity = activity['Amount']
          amount_activity = amount_activity - 1
          del activity['Amount']
          activity['Amount'] = amount_activity
          index = activities.index(activity)
          activities.pop(index)
          activities.insert(index, activity)
  # for date in distributed_activities_iter:
  # for i in range(len(distributed_activities)):
  #   date = list(distributed_activities.keys())[i]
  #   print(date)
  #   time_left = distributed_time[date]
  #   todays_activities = distributed_activities[date]
  #   todays_activities.append({"Activity": "Fun", "Duration": time_left})
  #   del distributed_activities[date]
  #   distributed_activities[date] = todays_activities
  return distributed_time, sorted(distributed_activities.items())

def add_cookie(key, value):
  session[key] = value

def del_cookies():
  session.clear()

def getcookie(key):
  try:
    if (x := session.get(key)):
      return x
    else:
      return False
  except:
    return False