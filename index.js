const monthE1 = document.querySelector(".date h1");
const fullDateE1 = document.querySelector(".date p");
const daysE1 = document.querySelector(".days");


const date = new Date();
const monthInx = date.getMonth();
const lastDay = new Date(date.getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(date.getFullYear(), monthInx, 1).getDay() - 1; 

console.log(firstDay);

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const monthName = months[monthInx];
monthE1.innerHTML = monthName;
fullDateE1.innerHTML = date.toDateString();

let days = "";

for(let i=firstDay; i > 0; i--)
{
    days += '<div class="empty"></div>';
}

for(let i=1; i<=lastDay; i++)
{
    if(i === date.getDate())
    {
        days += `<div class="today">${i}</div>`
    }
    else
    {
        days += `<div>${i}</div>`;
    }    
}

daysE1.innerHTML = days;