import { get as template } from 'templateLoader';
import {getAllEvents, everlive, getSubscriberByUserId, addEventToSubscriber} from 'backendServices';

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
                var userId = user.result.Id;

                getSubscriberByUserId(userId)
                    .then(function(subscriber){

                        addEventToSubscriber(subscriber, postID)
                            .then(function(data){
                                console.log(data);
                            });
                    })

            });
    })
}


export { all };