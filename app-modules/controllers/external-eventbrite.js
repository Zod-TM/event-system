import { get as getTemplate } from 'templateLoader';

function activateExternalFeed(){
    
    $('#external-events').on('click', function(ev){
        
        $('#external-events').text('Eventbrite events: ');
        var eventbriteData = [];
        $.ajax({
            method: "GET",
            url: "https://www.eventbriteapi.com/v3/events/search/?token=MMDJZ6OPVO3OS7GTVLPO",
            }).done(function(res) {

                for (let i = 0; i < 12; i+=1){ 
                    var eventBrObject = {
                        "Id" : res.events[i].id,
                        "url" : res.events[i].logo.url,
                        "subject" : res.events[i].name.text,
                        "date" : res.events[i].start.local
                    }
                    eventbriteData.push(eventBrObject);
                }
                var wrapper  = { objects: eventbriteData};

                getTemplate('eventbrite')
                    .then( (template) => {
                        $('#content').append(template(wrapper));
                    });
                });
    })

}

export { activateExternalFeed }