import { get as getTemplate } from 'templateLoader';

function contactUs() {
    getTemplate('contact-us')
        .then((template) => {
            $('#content').html(template());
        })
}

export { contactUs };