// const moment = require('moment')
const now = new Date($.now())
const todayDate = moment(now).format('dddd, MMMM Do, ha') 

// const currentHour = 10;
const currentHour = moment(now).format('h')
$('#currentDay').append(todayDate);


console.log(parseInt(currentHour))



$('.row').each( function(index, value){
    console.log(this.id)
    if(this.id==currentHour) {
       $(this).addClass('present')
    }
    else if (this.id < currentHour){
        $(this).addClass('past')
    }
    else if ((this.id) > currentHour){
        $(this).addClass('future')
    }
})



// $( function() {
//     $('#datepicker').datepicker()
// })
