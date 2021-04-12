const requestURL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";

let xhttp = new XMLHttpRequest();

xhttp.open('GET', requestURL);

xhttp.responseType = 'json';

xhttp.onload = () => {
    if(xhttp.status >= 400) {
        console.error(xhttp.response);
    } else {
        console.log(xhttp.response);
        showProducts(xhttp.response);
    }
}

xhttp.onerror = () => {
    console.log(xhttp.response);
}

xhttp.send();


let blogRow = document.querySelector('.content');
let cnt = 6;

function showProducts(data) {
    console.log(data.length);
    let productsStr = '';
    

    for (let i = 0; i < data.length; i++) {
    if (i < cnt) {

        if( data[i].type == 'IndependentLiving') {
            productsStr += 
            `<a  class="item" id=${data[i].id} href="./index.html/details/${data[i].id}">
                <img class="item__images" src="https://dummyimage.com/377x277/006F79/ffffff.png&text=Independent+living" alt="Independent living">
                <div class="item__wrapper">
                    <div class="item__title">${data[i].title}</div>
                    <div class="item__address">${data[i].address}</div>
                    <div class="item__price">New Properties for Sale from <span class="item__price_amount"> &#163; ${data[i].price}</span></div>
                    <div>Shared Ownership Available</div>
                </div>
            </a>`;
        } else {
            productsStr += 
            `<a class="item" id=${data[i].id} href="./index.html/details/${data[i].id}">
            <img class="item__images" src="https://dummyimage.com/377x277/EC6608/ffffff.png&text=Restaurant+&+Support+available" alt="Restaurant & Support available">
            <div class="item__wrapper">
                <div class="item__title">${data[i].title}</div>
                <div class="item__address">${data[i].address}</div>
                <div class="item__price">New Properties for Sale from <span class="item__price_amount"> &#163; ${data[i].price}</span></div>
                <div>Shared Ownership Available</div>
            </div>  
        </a>`;
        }
        
    }
    }

    blogRow.innerHTML = productsStr;
}

let filter = function() {
    let input = document.getElementById('input');
    input.addEventListener('keyup', function() {
        let filter = input.value.toLowerCase();
        let filterItems = document.querySelectorAll('.item__title');
        filterItems.forEach(item => {
            if(filter.length >= 3 && item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.closest('.item').style.display = "";
            } else if ( filter.length == 0 ) {
                item.closest('.item').style.display = "";
            } else if (filter.length < 3) {
                item.closest('.item').style.display = "";
            }
            else {
                item.closest('.item').style.display = "none";
            }
        })
    })
}

filter();