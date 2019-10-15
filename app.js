const http = new HTTP();
const users = http.get("https://jsonplaceholder.typicode.com/users").then(data => console.log(data)).catch(error => console.log(error));