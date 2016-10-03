function get(requestData) {
    return call('GET', requestData);
}

function put(requestData) {
    return call('PUT', requestData);
}

function post(requestData) {
    return call('POST', requestData);
}

function call(type, requestData = {}) {
    let url = requestData.url,
        headers = requestData.headers || {},
        body = requestData.body || {};

    let promise = new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: type,
            contentType: "application/json",
            headers: headers,
            data: JSON.stringify(body),
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });

    return promise
}

export { get, put, post };