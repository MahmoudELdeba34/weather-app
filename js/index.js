let myApi = [];
let city = document.getElementById("city");
let region = document.getElementById("region");
let cityTtime = document.getElementById("city_time");
let country = document.getElementById("country");
let date = document.getElementById("date");
let temprature = document.getElementById("temprature");
let mintemp = document.getElementById("mintemp");
let textTitle = document.getElementById("text");
let imageStatus = document.getElementById("image_status");
let Humidity = document.getElementById("Humidity");
let wend = document.getElementById("wend");
let pressure = document.getElementById("pressure");
let UV = document.getElementById("UV");
let currentDayTemp = document.getElementById("Current_day_temp");
let CurrentDayName = document.getElementById("current-day_name");
let currentDayimg = document.getElementById("current_day_img");
let dayNext = document.getElementById("day_next");
let DayTempNext = document.getElementById("day_temp_next");
let dayImgStatusNext = document.getElementById("day_img_next");
let dayNextNext = document.getElementById("day_next_next");
let DayTempNextNext = document.getElementById("day_temp_next_next");
let dayImgStatusNextNext = document.getElementById("day_img_next_next");
let tempTimeOne = document.getElementById("temp_time_1");
let wendTimeOne = document.getElementById("wend_time_1");
let imgTimeOneStatus = document.getElementById("img_time_1");
let tempTimeTwo = document.getElementById("temp_two_status");
let wendTimeTwo = document.getElementById("wend_two_status");
let imgTimeTwoStatus = document.getElementById("img_two_status");
let tempTimeThree = document.getElementById("temp_Three_status");
let wendTimeThree = document.getElementById("wend_Three_status");
let imgTimeThreeStatus = document.getElementById("img_Three_status");
let tempTimeFour = document.getElementById("temp_Four_status");
let wendTimeFour = document.getElementById("wend_Four_status");
let imgTimeFourStatus = document.getElementById("img_Four_status");
let tempTimeFive = document.getElementById("temp_Five_status");
let wendTimeFive = document.getElementById("wend_Five_status");
let imgTimeFiveStatus = document.getElementById("img_Five_status");
// let timeOne=document.getElementById("time_1")
console.log(temprature);
async function getApi(citye) {
  let apiResopnse = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=3b943f3283274244a3225402240501&q=${citye}&days=3`
  );
  let finalRespons = await apiResopnse.json();
  // console.log(finalRespons);
  myApi.push(finalRespons);
  console.log(myApi);
  //strat step one called location details
  console.log(myApi[0].location);
  city.innerHTML = myApi[0].location.name;
  region.innerHTML = myApi[0].location.region;
  cityTtime.innerHTML = myApi[0].location.localtime;
  country.innerHTML = myApi[0].location.country;
  convertDate = myApi[0].forecast.forecastday[0].date;
  let inputDateString = `${convertDate}`;
  // Create a Date object
  let dateObject = new Date(inputDateString);
  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  let dayOfWeek = dateObject.getDay();
  // Array of day names
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // Get the day name using the day of the week
  let dayName = dayNames[dayOfWeek];
  date.innerHTML = dayName;
  //end step one called location details
  //************************************************************************************************** */
  //strat step one called current details
  temprature.innerHTML =
    myApi[0].current.temp_c + ` <i class="fa-solid fa-genderless"></i> C`;
  mintemp.innerHTML = `minTemp:${myApi[0].forecast.forecastday[0].day.mintemp_c} <i class="fa-solid fa-genderless"></i> C`;
  textTitle.innerHTML = myApi[0].current.condition.text;
  imageStatus.setAttribute("src", `${myApi[0].current.condition.icon}`);
  Humidity.innerHTML = myApi[0].current.humidity;
  wend.innerHTML = myApi[0].current.wind_kph;
  pressure.innerHTML = myApi[0].current.pressure_mb;
  UV.innerHTML = myApi[0].current.uv;

  //end step one called current details
  //***************************************************************************************************** */
  //strat step one called forecast details
  // current day:
  currentDayTemp.innerHTML =
    myApi[0].current.temp_c + ` <i class="fa-solid fa-genderless"></i> C ,`;
  CurrentDayName.innerHTML = dayName;
  currentDayimg.setAttribute("src", `${myApi[0].current.condition.icon}`);
  // next day:
  convertDateNext = myApi[0].forecast.forecastday[1].date;
  let inputDateStringNext = `${convertDateNext}`;
  let dateObjectNext = new Date(inputDateStringNext);
  let dayOfWeekNext = dateObjectNext.getDay();
  let dayNamesNext = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayNameNext = dayNamesNext[dayOfWeekNext];
  dayNext.innerHTML = dayNameNext;
  DayTempNext.innerHTML = `${myApi[0].forecast.forecastday[1].day.avgtemp_c}<i class="fa-solid fa-genderless"></i>C , `;
  dayImgStatusNext.setAttribute(
    "src",
    `${myApi[0].forecast.forecastday[1].hour[0].condition.icon}`
  );
  //next next day :
  convertDateNextNext = myApi[0].forecast.forecastday[2].date;
  let inputDateStringNextNext = `${convertDateNextNext}`;
  let dateObjectNextNext = new Date(inputDateStringNextNext);
  let dayOfWeekNextNext = dateObjectNextNext.getDay();
  let dayNamesNextNext = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayNameNextNext = dayNamesNextNext[dayOfWeekNextNext];
  dayNextNext.innerHTML = dayNameNextNext;
  DayTempNextNext.innerHTML = `${myApi[0].forecast.forecastday[2].day.avgtemp_c}<i class="fa-solid fa-genderless"></i>C,`;
  dayImgStatusNextNext.setAttribute(
    "src",
    `${myApi[0].forecast.forecastday[2].hour[0].condition.icon}`
  );
  //end step one called forecast details
  //strt last  step  called Hourly Froecast :
  tempTimeOne.innerHTML = `${myApi[0].forecast.forecastday[0].hour[0].temp_c} <i class="fa-solid fa-genderless"></i>C`;
  wendTimeOne.innerHTML = `${myApi[0].forecast.forecastday[0].hour[0].wind_kph}KM/H`;
  imgTimeOneStatus.setAttribute(
    "src",
    `${myApi[0].forecast.forecastday[0].hour[0].condition.icon}`
  );
  tempTimeTwo.innerHTML = `${myApi[0].forecast.forecastday[0].hour[21].temp_c} <i class="fa-solid fa-genderless"></i>C`;
  wendTimeTwo.innerHTML = `${myApi[0].forecast.forecastday[0].hour[21].wind_kph}KM/H`;
  imgTimeTwoStatus.setAttribute(
    "src",
    `${myApi[0].forecast.forecastday[0].hour[21].condition.icon}`
  );
  tempTimeThree.innerHTML = `${myApi[0].forecast.forecastday[0].hour[18].temp_c} <i class="fa-solid fa-genderless"></i>C`;
  wendTimeThree.innerHTML = `${myApi[0].forecast.forecastday[0].hour[18].wind_kph}KM/H`;
  imgTimeThreeStatus.setAttribute(
    "src",
    `${myApi[0].forecast.forecastday[0].hour[18].condition.icon}`
  );
  tempTimeFour.innerHTML = `${myApi[0].forecast.forecastday[0].hour[12].temp_c} <i class="fa-solid fa-genderless"></i>C`;
  wendTimeFour.innerHTML = `${myApi[0].forecast.forecastday[0].hour[12].wind_kph}KM/H`;
  imgTimeFourStatus.setAttribute(
    "src",
    `${myApi[0].forecast.forecastday[0].hour[12].condition.icon}`
  );
  tempTimeFive.innerHTML = `${myApi[0].forecast.forecastday[0].hour[15].temp_c} <i class="fa-solid fa-genderless"></i>C`;
  wendTimeFive.innerHTML = `${myApi[0].forecast.forecastday[0].hour[18].wind_kph}KM/H`;
  imgTimeFiveStatus.setAttribute(
    "src",
    `${myApi[0].forecast.forecastday[0].hour[18].condition.icon}`
  );
  //end  last step  called Hourly Froecast :
}
// getApi("cairo")
// console.log(myApi)
// let locationInput=document.getElementById("button_location");
// locationInput.addEventListener('click',function(){
//     alert(searchInput.value)
// })
// let searchInput=document.getElementById("search-input")
// let cityy=""
// searchInput.addEventListener("keyup",function(){
//     console.log(searchInput.value);
// })
let locationInput = document.getElementById("button_location");
locationInput.addEventListener("click", function (event) {
  event.preventDefault();
  getApi(searchInput.value);
});

let searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
  // Add a minimum length check or other validation if needed
  if (searchInput.value.length < 3) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "please type three letter at lest ",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  } else {
    if (searchInput.value.length >= 3) {
      getApi(searchInput.value);
    }
  }
});
