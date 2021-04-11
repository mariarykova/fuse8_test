const requestURL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";

let xhttp = new XMLHttpRequest();

xhttp.open('GET', requestURL);

xhttp.onload = () => {
    console.log(xhttp.response);
}

xhttp.send();


// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.state == 200) {
//         myFunction(this.responseText)
//     }
// }


// xhttp.responseType = 'json';



// function myFunction(data) {
//     console.log(data);
//     console.log('hello');
// }

// console.log('hello');