let data = [];
/* const url =
  "https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json"; */
const url =
  "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
const ticketCardArea = document.querySelector(".ticketCard-area");
const regionSearch = document.querySelector(".regionSearch");
const searchResultText = document.querySelector("#searchResult-text");

const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketBtn = document.querySelector(".addTicket-btn");
const addTicketForm = document.querySelector(".addTicket-form");

addTicketBtn.addEventListener("click", function () {
  const obj = {
    id: data.length,
    name: ticketName.value.trim(),
    imgUrl: ticketImgUrl.value.trim(),
    area: ticketRegion.value,
    description: ticketDescription.value.trim(),
    group: Number(ticketNum.value),
    price: Number(ticketPrice.value),
    rate: Number(ticketRate.value),
  };
  data.push(obj);
  addTicketForm.reset();
  regionSearch.value = "";
  renderTickets(data);
});

console.log(searchResultText);
console.log(regionSearch);
regionSearch.addEventListener("change", function () {
  if (regionSearch.value === "") {
    renderTickets(data);
  } else {
    let filterData = [];
    data.forEach(function (ticket) {
      if (ticket.area === regionSearch.value) {
        filterData.push(ticket);
      }
    });
    renderTickets(filterData);
  }
});

function renderTickets(tickets) {
  let ticketList = "";
  tickets.forEach(function (ticket) /* 選取所有tickets */ {
    ticketList += `<li class="ticketCard">
              <div class="ticketCard-img">
                <a href="#">
                 <img src="${ticket.imgUrl}" alt="${ticket.name}" />
                </a>
                <div class="ticketCard-region">${ticket.area}</div>
                <div class="ticketCard-rank">${ticket.rate}</div>
              </div>
              <div class="ticketCard-content">
                <div>
                  <h3>
                    <a href="#" class="ticketCard-name">${ticket.name}</a>
                  </h3>
                  <p class="ticketCard-description">
                    ${ticket.description}
                  </p>
                </div>
                <div class="ticketCard-info">
                  <div class="ticketCard-num">
                    <p>
                      <span><i class="fas fa-exclamation-circle"></i></span>
                      剩下最後 <span id="ticketCard-num"> ${ticket.group} </span> 組
                    </p>
                  </div>
                  <p class="ticketCard-price">
                    TWD <span id="ticketCard-price">$${ticket.price}</span>
                  </p>
                </div>
              </div>
            </li>`;
  });
  ticketCardArea.innerHTML = ticketList;
  searchResultText.textContent = `本次搜尋共${tickets.length} 筆資料`;
}

renderTickets(data); /* data */

/* lv1*/
/* function getData() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      data = response.data;
      renderTickets(data);
    })
    .catch(function () {
      console.log("發生錯誤");
    });
}
getData(); */

/* lv2 */
function getData() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response.data.data);
      data = response.data.data;
      renderTickets(data);
    })
    .catch(function () {
      console.log("發生錯誤");
    });
}
getData();
