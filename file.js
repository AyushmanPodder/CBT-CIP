let eventName=document.getElementById('eventName');
let eventDate=document.getElementById('eventDate');
let eventTime=document.getElementById('eventTime');
let eventLocation=document.getElementById('eventLocation');

//let button=document.getElementById('newEvent');

document.getElementById('eventForm').addEventListener('submit',function(e){
    e.preventDefault();
    let textofEventName=eventName.value;
    let textofEventDate=eventDate.value;
    let textofEventTime=eventTime.value;
    let textofEventLocation=eventLocation.value;
    
   
        let paragraph=document.createElement('li');
        paragraph.innerHTML = `
        <strong>${textofEventName}</strong><br>
        Date: ${textofEventDate}<br>
        Time: ${textofEventTime}<br>
        Location: ${textofEventLocation}
        `;

        document.getElementById('events').appendChild(paragraph);
        document.getElementById('eventForm').reset();
        
        //create edit button
        let editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit','edit-icon'); // Font Awesome edit icon
        editIcon.style.marginLeft = '10px';
        editIcon.style.cursor = 'pointer'; // Make the icon look clickable
        editIcon.addEventListener('click', function() {
            eventName.value = textofEventName;
            eventDate.value = textofEventDate;
            eventTime.value = textofEventTime;
            eventLocation.value = textofEventLocation;
            paragraph.remove();
            
        });

        let deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash','delete-icon'); // Font Awesome edit icon
        deleteIcon.style.marginLeft = '10px';
        deleteIcon.style.cursor = 'pointer'; // Make the icon look clickable
        deleteIcon.addEventListener('click', function() {
        if (confirm("Are you sure you want to delete this event?")){
        paragraph.remove();
        }
        });

        
        paragraph.appendChild(editIcon);
        paragraph.appendChild(deleteIcon);
        document.getElementById('events').appendChild(paragraph);
        document.getElementById('eventForm').reset();


})

