const handlebars = window.handlebars || window.Handlebars,
    cache = {};

function get(templateName) {
    let promise = new Promise(function(resolve, reject) {
        if (cache[templateName]) {
            resolve(cache[templateName]);
            return;
        }

        let url = `../templates/${templateName}.handlebars`;
        $.get(url, function(html) {
            
            let template = handlebars.compile(html);
            cache[templateName] = template;
            //console.log(template);
            resolve(template);
        });
    });

    return promise;
}

export { get };