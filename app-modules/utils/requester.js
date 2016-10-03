const requester = (function () {
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

    return {
        get(requestData) {
            return call('GET', requestData);
        },

        put(requestData) {
            return call('PUT', requestData);
        },

        post(requestData) {
            return call('POST', requestData);
        }
    }
})();

export { requester };