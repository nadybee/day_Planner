// const moment = require('moment')
const myHTML = []
createHTML()
$('.container').append(myHTML.join(''))
const now = new Date($.now())

const todayDate = moment(now).format('dddd, MMMM Do, h:mm a z') 

// const currentHour = 17;
const currentHour = moment(now).format('H')

$('#currentDay').append(todayDate);


console.log(parseInt(currentHour))



$('.middle-col').each( function(index, value){
    // console.log(this.id)
    if(parseInt(this.id)==currentHour) {
       $(this).addClass('present')
       console.log(parseInt(this.id))
    }
    else if (parseInt(this.id) < currentHour){
        $(this).addClass('past')
    }
    else if (parseInt(this.id) > currentHour){
        $(this).addClass('future')
    }
})


function createHTML(){
    let time=0;
    let timeLetters;
    for (let i=5; i<24; i++){
        if(i>12){
            time = i-12
            timeLetters = 'pm'
        }
        else {
            time = i
            timeLetters = 'am'
        }
        myHTML.push(
` <div class="row" >
<div class="col-2 col-md-1 text-center hour">
  ${time}${timeLetters}
</div>
<div class="middle-col col-8 col-md-10 description" id="${i}">
  <div class="time-block">event</div>
</div>
<div class="col-2 col-md-1 saveBtn">
  <i class="fa-solid fa-floppy-disk p-1 text-white"></i>
</div>
</div>`

        )
    }
    return myHTML

}

