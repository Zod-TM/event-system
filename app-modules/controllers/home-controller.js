import { get as getTemplate } from 'templateLoader';
import { getAllEvents, getSubscriberByUserId, addEventToSubscriber, getCurrentUser, getSubscribedEvents } from 'backendServices';

function all() {
    var result;

    getAllEvents()
        .then(function (data) {
            console.log(data);
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

function showSubscribedEvents() {
    let result;
    getCurrentUser()
        .then(function (user) {
            var userId = user.Id;
            return getSubscriberByUserId(userId);
        })
        .then(function (subscriber) {
            return getSubscribedEvents(subscriber);
        })
        .then(function (data) {
            data.result = data.Result || [];
            result = data;
            let templateName = data.result.length > 0 ? 'events' : 'no-events';
            return getTemplate(templateName);
        })
        .then(function (template) {
            $('#content').html(template(result));
        })

}

export { all, showSubscribedEvents };