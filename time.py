def solve(time):
    hours = [
        "midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
        "twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven"
    ]
    minutes = [
        "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",
        "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two",
        "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine",
        "half"
    ]

    hour, minute = map(int, time.split(':'))

    if minute == 0:
        if hour == 0:
            return "midnight"
        elif hour == 12:
            return "twelve o'clock"
        else:
            return f"{hours[hour]} o'clock"
    elif minute <= 30:
        if minute == 15:
            return f"quarter past {hours[hour]}"
        elif minute == 30:
            return f"half past {hours[hour]}"
        else:
            minute_word = "minute" if minute == 1 else "minutes"
            return f"{minutes[minute]} {minute_word} past {hours[hour]}"
    else:
        remaining_minutes = 60 - minute
        next_hour = (hour + 1) % 24
        if remaining_minutes == 15:
            return f"quarter to {hours[next_hour]}"
        else:
            minute_word = "minute" if remaining_minutes == 1 else "minutes"
            return f"{minutes[remaining_minutes]} {minute_word} to {hours[next_hour]}"

# Test cases
print(solve("13:00"))  # one o'clock
print(solve("13:09"))  # nine minutes past one
print(solve("13:15"))  # quarter past one
print(solve("13:29"))  # twenty nine minutes past one
print(solve("13:30"))  # half past one
print(solve("13:31"))  # twenty nine minutes to two
print(solve("13:45"))  # quarter to two
print(solve("00:48"))  # twelve minutes to one
print(solve("00:08"))  # eight minutes past midnight
print(solve("12:00"))  # twelve o'clock
print(solve("00:00"))  # midnight
print(solve("07:01"))  # one minute past seven
print(solve("23:59"))  # one minute to midnight
print(solve("12:01"))  # one minute past twelve