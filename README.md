# schedule\_spreadsheet\_gen
Generates an HTML table to display your schedule.
## Instructions
Open index.html in your browser, input schedule into the text box, see format below.
Hit generate to get your schedule.
## Format
There is an example schedule in schedule.txt, try putting it in the box.

There should be a single number at the top, how many minutes per row.

After that, there is a list of comma separated values. Each entry should look like below.
```
name,days,time,background,foreground
```
Name is self-explanitory.

Days are the days this entry is to appear on, 1=Mondy, 5=Friday.
To put multiple consecutive days, use x-y for days x to y, inclusive.
2-5 would mean Tuesday through Friday.

Time is the starting time of this entry, in the form `hour:minute`.

Foreground and background are the colours for the cells of that entry, they are completely optional.

Multiple entries with the same name are allowed, in case one appears on non-consecutive days like Monday and Friday.
