let url = "https://goweather.herokuapp.com/weather/";
let btn = document.querySelector("button");
let input = document.querySelector("input");
let t1 = document.querySelector(".t1");
let w1 = document.querySelector(".w1");
let d1 = document.querySelector(".d1");

let t2 = document.querySelector(".t2");
let w2 = document.querySelector(".w2");
let d2 = document.querySelector(".d2");

let t3 = document.querySelector(".t3");
let w3 = document.querySelector(".w3");
let d3 = document.querySelector(".d3");

let t4 = document.querySelector(".t4");
let w4 = document.querySelector(".w4");
let d4 = document.querySelector(".d4");
btn.addEventListener("click", async() => {
    let input = document.querySelector("input").value;

    t1.innerText = `Temperature :`;
    w1.innerText = `Wind : `;
    d1.innerText = `Weather : `;

    t2.innerText = `Temperature : `;
    w2.innerText = `Wind :`;

    t3.innerText = `Temperature : `;
    w3.innerText = `Wind : `;

    t4.innerText = `Temperature : `;
    w4.innerText = `Wind :`;


    let arr = await getweather(input);
    t1.innerText = `Temperature : ${arr.temperature}`;
    w1.innerText = `Wind : ${arr.wind}`;
    d1.innerText = `Weather : ${arr.description}`;

    let objarr = arr.forecast;

    t2.innerText = `Temperature : ${objarr[0].temperature}`;
    w2.innerText = `Wind : ${objarr[0].wind}`;

    t3.innerText = `Temperature : ${objarr[1].temperature}`;
    w3.innerText = `Wind : ${objarr[1].wind}`;


    t4.innerText = `Temperature : ${objarr[2].temperature}`;
    w4.innerText = `Wind : ${objarr[2].wind}`;

});

async function getweather(city) {

    try {
        let res = await axios.get(url + city);
        return res.data;

    } catch (e) {
        console.log(e);
    }
};