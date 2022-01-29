function getCalendarURL(calendarId)
{
    const calendarBaseUrl = 'https://calendar.google.com/calendar/embed';
    const calendarOptions = 'wkst=2&ctz=Europe%2FParis&showPrint=0&showCalendars=0&showTz=0&mode=WEEK'
    return `${calendarBaseUrl}?${calendarOptions}&src=${calendarId}`;
}