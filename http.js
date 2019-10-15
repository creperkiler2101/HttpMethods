class HTTP {
    constructor() {

    }

    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(responce => responce.json()).then(data => resolve(data)).catch(error => reject(error));
        });
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-type": "applicatiom/json"
                },
                body: JSON.stringify(data)
            }).then(responce => responce.json()).then(data => resolve(data)).catch(error => reject(error));
        });
    }
}