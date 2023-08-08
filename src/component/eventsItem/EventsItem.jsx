import React from 'react'
const EventsItem = ({item}) => {
  return (
    <div class="eventListItem">
        <div class="eventListItemInner">
            <div class="eventSchedule">
                <div class="eventDay">06</div>
                <div class="eventMonth">August</div>
                <div class="horizontalLine"></div>
                <div class="eventTime">08:30am</div>
            </div>
            <div class="eventContent">
                <a href="#" class="eventListTitle">{item.name}</a>
                <a href="#" class="eventListCatagory">{item.type}</a>
                <div class="concertBlock">
                    <span>Venu: New School Tishman Auditorium 63 5th Ave, New York, NY 10003, United States</span>
                </div>
                <a href="#" class="eventContentReadMore">
                    <div class="readMore">Get Ticket</div>
                    <div class="readMoreIcon">
                        <img src="https://assets.website-files.com/64056753a2b6532a05724699/640ff4594260e391a8ae8f1b_arrow-right.png"/>
                    </div>
                </a>
            </div>
            <a href="#" class="eventImage">
                <img src={item.img}/>
            </a>
        </div>
    </div>
)
}

export default EventsItem