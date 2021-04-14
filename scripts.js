const requestURL = "https://603e38c548171b0017b2ecf7.mockapi.io/homes";
let items = [];

let xhttp = new XMLHttpRequest();

xhttp.open("GET", requestURL);

xhttp.responseType = "json";

xhttp.onload = () => {
  if(xhttp.status >= 400) {
    console.error(xhttp.response);
  } else {
    items = xhttp.response;
    showHomes(items);
    filter(items);
  }
}

xhttp.onerror = () => {
  console.log(xhttp.response);
}

xhttp.send();


let blogRow = document.querySelector(".content");
let cnt = 6;

function showHomes(data) {
  let homesStr = "";
  let colorType = {
    "IndependentLiving": "006F79",
    "SupportAvailable": "EC6608"
  };

  let titleType ={
    "IndependentLiving": "Independent living",
    "SupportAvailable": "Restaurant & Support available"
  }

  for (let i = 0; i < data.length; i++) {
    if (i < cnt) {
      homesStr += 
        `<a class="item" id=${data[i].id} href="/details/${data[i].id}">
           <img class="item__images" src="https://dummyimage.com/377x277/${colorType[data[i].type]}/ffffff.png&text=${titleType[data[i].type]}" alt="${titleType[data[i].type]}">
           <div class="item__wrapper">
              <div class="item__title">${data[i].title}</div>
              <div class="item__address">${data[i].address}</div>
              <div class="item__price">New Properties for Sale from <span class="item__price_amount"> &#163; ${data[i].price}</span></div>
              <div>Shared Ownership Available</div>
            </div>
          </a>`;
    }
  }
  blogRow.innerHTML = homesStr;
}

// function filter (data) {
//   let input = document.getElementById("input");
//   input.addEventListener("keydown", function() {
//     let filter = input.value.toLowerCase();
//     showHomes(data.filter(item => (
//       (filter.length >= 2 && item.title.toLowerCase().indexOf(filter) > -1) || (filter.length == 0) || (filter.length < 2)
//     )));
//   });
// }


let input = document.getElementById("input");

input.addEventListener("keyup", function() {
  let filter = input.value.toLowerCase();
  let filterItems = document.querySelectorAll(".item__title");
      filterItems.forEach(item => {
        if(filter.length >= 3 && item.innerHTML.toLowerCase().indexOf(filter) > -1) {
          item.closest(".item").style.display = "";
        } else if ( filter.length == 0 ) {
          item.closest(".item").style.display = "";
        } else if (filter.length < 3) {
          item.closest(".item").style.display = "";
        } else {
          item.closest(".item").style.display = "none";
        }
      });
});
