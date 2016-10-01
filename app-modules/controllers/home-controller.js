import { get as template } from 'templateLoader';
import {getAllEvents, everlive} from 'backendServices';

function all(){
    var result;
    

    getAllEvents()
    .then(function(data){
        result = data;
        template('events')
            .then(function(template){       
                 $('#content').html(template(result));
                 saveEvent();
            })
    },
    function(error){
        alert(JSON.stringify(error));
    })
    
};

function saveEvent(){   
    $('.saveButton').on('click', function(ev){
        var $target = $(ev.target);

        var postID = $target.parents('.post').attr('id');

        everlive.Users.currentUser()
            .then(function(user){
                var subsriberId = user.result.Id;

                var subscriberData = everlive.data('Subscriber');

                var object = {
                    'User': subsriberId,
                    'Events': [postID]
                }

                $.ajax({
                    type: "PUT",
                    url: 'http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Subscriber/',
                    contentType: "application/json",
                    data: JSON.stringify(object),
                    success: function(data){
                        console.log(JSON.stringify(data));
                        console.log('added successfully');
                    },
                    error: function(error){
                        console.log(JSON.stringify(error));
                    }
                })
            });

        
                //if(Everlive.Users.currentUser.data)
                    //return app.Users.currentUser.data.Id;
         //   }

        // //populate the event ID against the user ID
        // var dataSubscriber = everlive.data('Subscriber');
        
        // // var object = {
        // //     data.User : subscriberId;
        // //     data.Events : postID;
        // // };

        // $.ajax({
        //     type: "PUT",
        //     url: 'http://api.everlive.com/v1/41vzn3bx8qqhv7v0/Subscriber/' + dataSubscriberID ,
        //     contentType: "application/json",
        //     data: JSON.stringify(object),
        //     success: function (data) {
                
        //         // console.log("added succesfully")
        //         // console.log(JSON.stringify(data));
        //     },
        //     error: function (error) {
        //         alert(JSON.stringify(error));
        //     }
        // })

    })
}


export { all };