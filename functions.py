from datetime import datetime

days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

def get_day(daystring):
  date = datetime.strptime(daystring, "%d-%m-%Y")
  date = date.date()
  dayindex = date.weekday()
  day = days[dayindex]
  return day

# print(get_day("26-02-2009"))
