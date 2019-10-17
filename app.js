const http = new HTTP();
const url = "https://jsonplaceholder.typicode.com/users";

////////////////////
http.get(url).then(data => console.log(data)).catch(error => console.log(error));
////////////////////
const data = {
    name: "John Doe",
    username: "johndoe",
    email: "jdoe@gmail.com"
}

http.post(url, data).then(data => console.log(data)).catch(error => console.log(error));
////////////////////
http.put(url + "/2", data).then(data => console.log(data)).catch(error => console.log(error));
////////////////////

////////////////////