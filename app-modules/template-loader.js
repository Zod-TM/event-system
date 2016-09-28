const handlebars = window.handlebars || window.Handlebars,
    templateCache = {};

function getTemplate(templateName) {
    let promise = new Promise(function (resolve, reject) {
        if (templateCache[templateName]) {
            resolve(templateCache[templateName]);
            return;
        }

        let url = `../templates/${templateName}.handlebars`;
        $.get(url, function (html) {
            let template = handlebars.compile(html);
            templateCache[templateNamename] = template;
            resolve(template);
        });
    });

    return promise;
}

export { getTemplate };