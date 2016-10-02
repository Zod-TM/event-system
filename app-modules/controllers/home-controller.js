import { get as getTemplate } from 'templateLoader';
import { getAllEvents, getSubscriberByUserId, addEventToSubscriber, getCurrentUser } from 'backendServices';

function all() {
    var result;

    getAllEvents()
        .then(function (data) {
            result = data;
            return getTemplate('events');
        })
        .then(function (template) {
            $('#content').html(template(result));
            attachSaveEventHandler();
        });
};

function attachSaveEventHandler() {
    $('.saveButton').on('click', function (ev) {
        var $target = $(ev.target);
        var eventID = $target.parents('.post').attr('id');

        getCurrentUser()
            .then(function (user) {
                var userId = user.Id;
                return getSubscriberByUserId(userId)
            })
            .then(function (subscriber) {
                return addEventToSubscriber(subscriber, eventID);
            })
            .then(function () {
                toastr.success('Successfully joined event!');
            })
            .catch(function () {
                toastr.error("Error occured or event is already joined!");
            });
    })
}


export { all };