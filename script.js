chart = document.getElementById('sch')
txt = document.getElementById('schtxt')
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
    console.log(arr)
    console.log(early)
}
