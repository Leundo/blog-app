// yy = 2-digit year; yyyy = full year

// M = digit month; MM = 2-digit month; MMM = short month name; MMMM = full month name

// EEEE = full weekday name; EEE = short weekday name

// d = digit day; dd = 2-digit day

// h = hours am/pm; hh = 2-digit hours am/pm; H = hours; HH = 2-digit hours

// m = minutes; mm = 2-digit minutes; aaa = AM/PM

// s = seconds; ss = 2-digit seconds

// S = miliseconds

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
];

const dayOfWeekNames = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
];

const formatDate = (date, patternStr) => {
    if (!patternStr) {
        patternStr = 'M/d/yyyy';
    }
    var day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minute = date.getMinutes(),
        second = date.getSeconds(),
        miliseconds = date.getMilliseconds(),
        h = hour % 12,
        hh = twoDigitPad(h),
        HH = twoDigitPad(hour),
        mm = twoDigitPad(minute),
        ss = twoDigitPad(second),
        aaa = hour < 12 ? 'AM' : 'PM',
        EEEE = dayOfWeekNames[date.getDay()],
        EEE = EEEE.substr(0, 3),
        dd = twoDigitPad(day),
        M = month + 1,
        MM = twoDigitPad(M),
        MMMM = monthNames[month],
        MMM = MMMM.substr(0, 3),
        yyyy = year + "",
        yy = yyyy.substr(2, 2)
        ;
    // checks to see if month name will be used
    patternStr = patternStr
        .replace('hh', hh).replace('h', h)
        .replace('HH', HH).replace('H', hour)
        .replace('mm', mm).replace('m', minute)
        .replace('ss', ss).replace('s', second)
        .replace('S', miliseconds)
        .replace('dd', dd).replace('d', day)

        .replace('EEEE', EEEE).replace('EEE', EEE)
        .replace('yyyy', yyyy)
        .replace('yy', yy)
        .replace('aaa', aaa);
    if (patternStr.indexOf('MMM') > -1) {
        patternStr = patternStr
            .replace('MMMM', MMMM)
            .replace('MMM', MMM);
    }
    else {
        patternStr = patternStr
            .replace('MM', MM)
            .replace('M', M);
    }
    return patternStr;
}

const twoDigitPad = (num) => {
    return num < 10 ? "0" + num : num;
}

export { formatDate };