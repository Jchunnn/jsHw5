let data = [
  {
    id: 0,
    name: "肥宅心碎賞櫻3日",
    imgUrl:
      "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
    area: "高雄",
    description: "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
    group: 87,
    price: 1400,
    rate: 10,
  },
  {
    id: 1,
    name: "貓空纜車雙程票",
    imgUrl:
      "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台北",
    description:
      "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
    group: 99,
    price: 240,
    rate: 2,
  },
  {
    id: 2,
    name: "台中谷關溫泉會1日",
    imgUrl:
      "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    area: "台中",
    description:
      "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
    group: 20,
    price: 1765,
    rate: 7,
  },
];
/*
const ticketName = document.querySelector("#ticketName");
const ticketImgUrl = document.querySelector("#ticketImgUrl");
const ticketRegion = document.querySelector("#ticketRegion");
const ticketPrice = document.querySelector("#ticketPrice");
const ticketNum = document.querySelector("#ticketNum");
const ticketRate = document.querySelector("#ticketRate");
const ticketDescription = document.querySelector("#ticketDescription");
const addTicketBtn = document.querySelector(".addTicket-btn");
const addTicketForm = document.querySelector(".addTicket-form");

const ticketCardArea = document.querySelector(".ticketCard-area");
const regionSearch = document.querySelector(".regionSearch");
const searchResultText = document.querySelector("#searchResult-text");

addTicketBtn.addEventListener("click", function () {
  let obj = {
    id: data.length,
    name: ticketName.value.trim(),
    imgUrl: ticketImgUrl.value.trim(),
    area: ticketRegion.value.trim(),
    description: ticketDescription.value.trim(),
    group: Number(ticketNum.value),
    price: Number(ticketPrice.value),
    rate: Number(ticketRate.value),
  };
  data.push(obj);
  renderTickets(data);
  addTicketForm.reset();
  regionSearch.value = "";
});

regionSearch.addEventListener("change", function () {
  if (regionSearch.value === "") {
    renderTickets(data);
  } else {
    let filterData = [];
    data.forEach(function (tickets) {
      if (tickets.area === regionSearch.value) {
        filterData.push(tickets);
      }
    });
    renderTickets(filterData);
  }
});
function renderTickets(tickets) {
  let ticketList = "";
  tickets.forEach(function (ticket) {
    ticketList += ` <li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img
                  src="${ticket.imgUrl}"
                  alt="${ticket.name}"
                />
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
  searchResultText.textContent = `本次搜尋共 ${tickets.length} 筆資料`;
}
renderTickets(data);
 */
/* let ary = [];
axios
  .get("https://hexschool.github.io/ajaxHomework/data.json")
  .then(function (response) {
    console.log("資料有回傳了");
    ary = response.data;
    renderData();
  });

function renderData() {
  console.log(ary);
  const title = document.querySelector(".title");
  title.textContent = ary[0].name;
}

console.log(ary); */

const ticketCardArea = document.querySelector(".ticketCard-area");
const searchResultText = document.querySelector("#searchResult-text");
const regionSearch = document.querySelector(".regionSearch");
regionSearch.addEventListener("change", function () {
  if (regionSearch.value === "") {
    renderTickets(data);
  } else {
    let filterData = [];
    data.forEach(function (ticket) {
      if (regionSearch.value === ticket.area) {
        filterData.push(ticket);
      }
    });
    renderTickets(filterData);
  }
});
function renderTickets(tickets) {
  let ticketList = "";
  tickets.forEach(function (ticket) {
    ticketList += `<li class="ticketCard">
            <div class="ticketCard-img">
              <a href="#">
                <img
                  src="${ticket.imgUrl}"
                  alt="${ticket.name}"
                />
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
  searchResultText.textContent = `本次搜尋共 ${tickets.length} 筆資料`;
}
renderTickets(data);
