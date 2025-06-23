const endDate = new Date ('January 15, 2026,23:59:59')
const days = document.querySelector('#Days')
const hours = document.querySelector('#Hours')
const minutes = document.querySelector('#Minutes')
const seconds = document.querySelector('#Seconds')
let timeId = setInterval(Time, 1000)
function Time() {
    let diff = endDate - new Date()
    if(diff <= 0) {
        days.innerText = `0`
        hours.innerText = `0`
        minutes.innerText = `0`
        seconds.innerText = `0`
        clearInterval(timeId)
        return
    } 
    let Days = Math.floor(diff / (1000 * 60 * 60 *24))
    let Hours =  Math.floor((diff % (1000 * 60 * 60 *24)) / (1000 * 60 * 60))
    let Minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    let Seconds = Math.floor((diff % (1000 * 60)) / 1000)
    days.innerText = `${Days}`
    hours.innerText = `${Hours}`
    minutes.innerText = `${Minutes}`
    seconds.innerText = `${Seconds}`
}
Time()


