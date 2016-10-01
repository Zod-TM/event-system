import { get as template } from 'templateLoader';
import {getAllEvents} from 'backendServices';

function all(){
    var result;
    

    getAllEvents()
    .then(function(data){
        result = data;
        template('events')
            .then(function(template){
                // console.log(template(result));
                // console.log(result);
                
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
        console.log(123);
        var $target = $(ev.target);
        var postID = $target.parents('#post').attr('id');
        console.log(postID);
        // //get user ID
        // // Everlive.Events.beforeCreate(function (request, context, done) {
        // // var userID = request.data.Id;
        // var getCurrentUserId = function(){
        //         if(Everlive.Users.currentUser.data)
        //             return app.Users.currentUser.data.Id;
        //     }

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