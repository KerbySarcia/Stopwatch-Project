const stopwatchContainer = document.querySelector('.stopwatch')
const buttons = document.querySelectorAll('.buttons button')

let minutes = 0
let seconds = 0
let milliseconds = 0
let interval

buttons.forEach(btn => btn.addEventListener('click', e =>{
    let clicked = e.currentTarget.textContent

    if(clicked == 'Start')
    {
        interval = setInterval(stopwatch,10)
        document.getElementById('start').disabled = true
    }
    else if(clicked == 'Stop')
    {
        clearInterval(interval)
        document.getElementById('start').disabled = false
    }
    else if(clicked == 'Reset')
    {
        clearInterval(interval)
        minutes = 0
        seconds = 0
        milliseconds = 0
        document.querySelector('.minutes').textContent = '00:'
        document.querySelector('.seconds').textContent = '00.'
        document.querySelector('.milli').textContent = '00'
        document.getElementById('start').disabled = false
    }
}))

function stopwatch()
{
    milliseconds++
    if(milliseconds >= 99)
    {
        seconds++
        milliseconds = 0
    }
    if(seconds >= 60)
    {
        minutes++
        seconds = 0
    }

    function formatZeroes(num)
    {
        let numString = num.toString()
        return numString.length < 2 ? '0' + numString : numString
    }

    milliseconds = formatZeroes(milliseconds)
    seconds = formatZeroes(seconds)
    minutes = formatZeroes(minutes)

    document.querySelector('.minutes').textContent = minutes + ':'
    document.querySelector('.seconds').textContent = seconds + '.'
    document.querySelector('.milli').textContent = milliseconds
}






