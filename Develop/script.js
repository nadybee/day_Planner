
const myHTML = []
createHTML()
$('.container').append(myHTML.join(''))
const now = new Date($.now())

const todayDate = moment(now).format('dddd, MMMM Do, h:mm a z') 

// const currentHour = 17;
const currentHour = moment(now).format('H')

$('#currentDay').append(todayDate);


console.log(parseInt(currentHour))



$('.row').each( function(index, value){
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
        else if (i===12){
            time = 12
            timeLetters = 'pm'
        }
        else {
            time = i
            timeLetters = 'am'
        }
        myHTML.push(
` <div class="row time-block" id="${i}" >
<div class="col-2 col-md-1 text-center hour">
  ${time}${timeLetters}
</div>
<textarea class="middle-col col-8 col-md-10 description" >
</textarea>
<div class="col-2 col-md-1 saveBtn">
  <i class="fa-solid fa-floppy-disk p-1 text-white"></i>
</div>
</div>`

        )
    }
    return myHTML

}


    $('.saveBtn').on('click', function(){
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, event);
        
        $('header').after(`${event} was added!`)

    })

const renderEvents = () => {
     for (let i=5; i<24; i++){
         $(`#${i} .description`).val(localStorage.getItem(`${i}`))
}
console.log('rendered')
}
renderEvents()
