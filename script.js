DAYNAME = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
chart = document.getElementById('sch')
txt = document.getElementById('schtxt')
function minuteToStr(val)
{
    var str = Math.floor(val / 60) + ':'
    var min = val % 60
    if(min < 10)
        str += '0'
    return str + min
}
function makesch()
{
    var sch = txt.value
    var lns = sch.split('\n')
    var duration = parseInt(lns[0])
    lns.reverse().pop()
    var arr = []
    var early = 1440
    for(var en of lns)
    {
        var enarr = en.split(',')
        var name = enarr[0], daystr = enarr[1], timestr = enarr[2]
        var day = [], t = 0
        if(daystr.indexOf('-') === -1)
            day.push(parseInt(daystr))
        else
        {
            var dayrange = daystr.split('-')
            var first = parseInt(dayrange[0]), second = parseInt(dayrange[1])
            for(var i = first; i <= second; ++i)
                day.push(i)
        }
        if(timestr.indexOf(':') === -1)
            t = parseInt(timestr) * 60
        else
        {
            var hourminute = timestr.split(':')
            t = parseInt(hourminute[0]) * 60 + parseInt(hourminute[1])
        }
        if(t < early)
            early = t
        arr.push({name: name, days: day, time:t})
    }
    var valid = true
    for(var en of arr)
    {
        if((en.time - early) % duration)
            valid = false
    }
    if(valid)
    {
        var daylist = document.createElement('tr')
        var timecell = document.createElement('td')
        var txtnode = document.createTextNode('Time')
        timecell.appendChild(txtnode)
        daylist.appendChild(timecell)
        for(var d of DAYNAME)
        {
            timecell = document.createElement('td')
            txtnode = document.createTextNode(d)
            timecell.appendChild(txtnode)
            daylist.appendChild(timecell)
        }
        chart.appendChild(daylist)
        daylist = document.createElement('tr')
        for(var i = 0; i < 6; ++i)
        {
            timecell = document.createElement('td')
            if(i === 0)
            {
                txtnode = document.createTextNode(minuteToStr(early))
                timecell.appendChild(txtnode)
            }
            daylist.appendChild(timecell)
        }
        chart.appendChild(daylist)
        for(var en of arr)
        {
            var ind = Math.floor((en.time - early) / duration) + 1
            if(ind >= chart.children.length)
            {
                t = en.time - (ind - chart.children.length) * duration
                for(var r = chart.children.length; r <= ind; ++r)
                {
                    daylist = document.createElement('tr')
                    timecell = document.createElement('td')
                    txtnode = document.createTextNode(minuteToStr(t))
                    timecell.appendChild(txtnode)
                    daylist.appendChild(timecell)
                    for(var i = 0; i < 5; ++i)
                    {
                        timecell = document.createElement('td')
                        daylist.appendChild(timecell)
                    }
                    chart.appendChild(daylist)
                    t += duration
                }
            }
            for(var d of en.days)
            {
                txtnode = document.createTextNode(en.name)
                chart.children[ind].children[d].appendChild(txtnode)
            }
        }
    }
}
