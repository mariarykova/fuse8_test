let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.state == 200) {
        myFunction(this.responseText);
    }
}

xhttp.open("GET", "https://603e38c548171b0017b2ecf7.mockapi.io/homes", true);
xhttp.send();

function myFunction(data) {
    console.log(data);
}