
/*
Name: Change It! JS
Date Created: 5/26/23
Description
Change it is a Javascript Program to make a fun/work tool.
Website: [shortened]: tinyurl.com/changeitjavascript
Author: RA86-dev (Github)
Website: https://tinyurl.com/changeitjs
Thank you for using Change It JS!
This is a open-source free Code!
*/
console.log('Change It JavaScript NJS loading sys,');
console.log('Loading Screen Shortly...');




if (navigator.onLine == false) {
  console.error('CONNECTION FAILED: 401')
  console.error('Please connect to internet.')
    
}


const go_back = (num_to_go_back) => {
    if (num_to_go_back) { 
      history.go(num_to_go_back);
    } else {
      history.back();
    }
  };
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }

  }
  const findBrowser = findBrowserType();
  if (findBrowser == "int_explorer") {
    console.error('This Program cannot work on Internet Explorer as well.')
  }
  function findBrowserType() {
    console.log('NOTE: msie is internet explorer.')
    const userAgent = navigator.userAgent;
    if (userAgent.indexOf("Chrome") > -1) {
      return "chrome";
    } else if (userAgent.indexOf("Firefox") > -1) {
      return "firefox";
    } else if (userAgent.indexOf("Safari") > -1) {
      return "safari";
    } else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      return "opera";
    } else if (userAgent.indexOf("Edge") > -1) {
      return "edge";
    } else if (userAgent.indexOf("MSIE") > -1 || userAgent.indexOf("Trident") > -1) {
      
      return "int_explorer";
      
    } else {
      console.error('Error: User Navigator:' + userAgent);
    }
  }






    
  
const apiKey = "PUT_YOUR_KEY_HERE";
// Loading...
console.clear()
console.log('Preparing to Load')
sleep(5000)
console.log('Importing: Greensock')
console.log('-----------')
sleep(2000)
console.log('Loading 25%')
console.log('==---------')
sleep(3000)
console.log('Loading 90%')
console.log('=========-')
sleep(7000)
console.log('Done!')
console.log('------')
// Sleeps to the milliseconds 

// Clears the console after a delay.
function ClearAfterDelay(delay) {
setTimeout(() => {
  console.clear();
}, delay);
}
// Stores information locally with LocalStorage
function storeinfo(infostore,key) {
localStorage.setItem(key,infostore)
console.log('Set Info. \n Key: ' +key + '\n Info:' + infostore)
}
// Gets information stored inside LocalStorage.
function getinfo(key) {
var t = localStorage.getItem(key)
console.log('Got LocalStorage ' + key  + 'That said :' +t)
}
function istextornum(input) {
if (typeof input === 'number') {
  console.log('Input is a number');
} else if (typeof input === 'string') {
  console.log('Input is a string');
} else {
  console.log('Input is not a number or string');
}
}
function calculateSquare(number) {
console.log(number + ' squared is ' + (number * number));
}
function CheckifPrime(number) {
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    console.log(number + ' is not a prime number');
    return;
  }
}
console.log(number + ' is a prime number');
}
function calcFactorial(number) {
let factorial = 1;
for (let i = 1; i <= number; i++) {
  factorial *= i;
}

console.log('The factorial of ' + number + ' is ' + factorial);
}
function RandomNum(min, max) {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Random number between ' + min + ' and ' + max + ': ' + randomNumber);
}
function reverseString(string) {
const reversedString = string.split('').reverse().join('');
console.log('Reversed string: ' + reversedString);
}
function palindromeChecker(string) {
const normalizedString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
const reversedString = normalizedString.split('').reverse().join('');
if (normalizedString === reversedString) {
  console.log(string + ' is a palindrome');
} else {
  console.log(string + ' is not a palindrome');
}
}
function powerCalc(base, exponent) {
console.log(base + ' raised to the power of ' + exponent + ' is ' + Math.pow(base, exponent));
}
function LeapYearChecker(year) {
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + ' is a leap year');
} else {
  console.log(year + ' is not a leap year');
}

}
function generateFibonacciSequence(terms) {
let sequence = [0, 1];
for (let i = 2; i < terms; i++) {
  sequence.push(sequence[i - 1] + sequence[i - 2]);
}
console.log('Fibonacci sequence (' + terms + ' terms): ' + sequence.join(', '));
}
function BTD(binary) {
const decimal = parseInt(binary, 2);
console.log('Binary ' + binary + ' is equal to decimal ' + decimal);
}
function MaxNumberInArray(numbers) {
const maxNumber = Math.max(...numbers);
console.log('Maximum number: ' + maxNumber);
}
function generateRandomCode(length) {
const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
let password = '';
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * charset.length);
  password += charset[randomIndex];
}
console.log('Random Password: ' + password);
}
function ShuffleArray(array) {
const shuffledArray = [...array];
for (let i = shuffledArray.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
}
console.log('Shuffled Array: ' + shuffledArray);
}

function change(id,text) {
document.getElementById(id).innerHTML = text;
console.log('Changed Item ' + id + ' into the text:' + text);
}
// the theme needs to be class
function toggletheme(themeclass) {
var element = document.body;
element.classList.toggle(themeclass)
console.log('Toggled theme to:' + themeclass)

}
// run typealert, because if alert it will get confused. DEF is normal alert and PROMPT is prompting a question.CONF is a confirm function

function typealert(text,type) {
if (type == 'prompt') {
    var promp = prompt(text);
    console.log('Input for ' + type + ' is ' + promp);
    return promp
} 
    if (type == 'def') {
        alert(text);
        console.log('Alerted ' + text);
        
    }
    if (type == 'conf') {
        var conf = confirm(text)
        console.log('Output of CONFIRM is ' + conf)
        return conf;
    }

}
// Changes color of text,not background
function changestylecolor(id,color) {
document.getElementById(id).style.color = color;
console.log('changed element ITEM ' + id + " to " + color );
}
function changebgcolor(id,color) {
document.getElementById(id).style.backgroundColor = color;
console.log('Changed background of ID ' + id + ' to the background color of ' + color);
}
//must be in css style (ex. sans serif is wrong, sans-serif is right.)
function changefont(id,font) {
document.getElementById(id).style.fontFamily = font;
console.log('Changed Item ' + id + ' to font' + font)

}
// URL args must be url('https://example.com') for images, but can be linear-gradient(to direction,'color','color2'),etc. 
function changebgimage(id,urlcolor) {
document.getElementById(id).style.backgroundImage = urlcolor;
}
function leavepage() {
console.log('Shutting Down Change It!');
console.log('Leaving');
window.location.replace('about:blank');

}
function timeoutfunc(func,milliseconds) {
setTimeout(func,milliseconds)
}
function toggletextmode(bool) {
if (bool == true) {
    console.log('Enabled Editing Mode.')
    document.body.contentEditable = 'true';
    document.designMode = 'on';
    void 0;
}
if (bool == false) {
    console.log('Disabled Editing Mode.')
    document.body.contentEditable = 'false';
    document.designMode = 'off';
    void 0;
}
}
function reboot() {
console.clear()
console.log('Rebooting')
console.error('CO76:REBOOTSUCESSFULL')
}

function info() {
alert('Change It! is a online interactive Javascript code used for debbuging and playing with websites. This was created on May 26th 2023, And was created by one person. Click OK to continue.')
alert('Currently, Change It! is a Javascript function definer but maybe be can be made as a extension plugin in the future.')
alert('This also can be used for any purpose, like making a fun website or having fun!')
alert('Thank you for using Change It JS!')
console.log('Printed Info about Change It!')
}
function findMax(...numbers) {
const maxNumber = Math.max(...numbers);
console.log('Maximum number: ' + maxNumber);
}

function findMin(...numbers) {
const minNumber = Math.min(...numbers);
console.log('Minimum number: ' + minNumber);
}

function capitalizeString(string) {
const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
console.log('Capitalized string: ' + capitalizedString);
}

function calculateAverage(numbers) {
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
console.log('Average: ' + average);
}

function formatDate(date) {
const formattedDate = new Date(date).toLocaleDateString();
console.log('Formatted date: ' + formattedDate);
}

function countOccurrences(arr, target) {
const occurrences = arr.reduce((count, element) => {
return element === target ? count + 1 : count;
}, 0);
console.log('Occurrences of ' + target + ': ' + occurrences);
}

function reverseArray(arr) {
const reversedArray = arr.reverse();
console.log('Reversed array: ' + reversedArray);
}

function removeDuplicates(arr) {
const uniqueArray = [...new Set(arr)];
console.log('Array with duplicates removed: ' + uniqueArray);
}

function calculateBMI(weight, height) {
const bmi = weight / (height ** 2);
console.log('BMI: ' + bmi);
}

function generateRandomNumberInRange(min, max) {
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('Random number between ' + min + ' and ' + max + ': ' + randomNumber);
}


function countVowels(str) {
const vowelCount = str.toLowerCase().split('').filter((char) => 'aeiou'.includes(char)).length;
console.log('Vowel count: ' + vowelCount);
}

function generateRandomColor() {
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
console.log('Random color: ' + randomColor);
}

function removeFalsyValues(arr) {
const filteredArray = arr.filter(Boolean);
console.log('Array with falsy values removed: ' + filteredArray);
}

function calculateDiscount(price, discountPercentage) {
const discount = price * (discountPercentage / 100);
const discountedPrice = price - discount;
console.log('Discounted price: ' + discountedPrice);
}

function truncateString(str, maxLength) {
const truncatedString = str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
console.log('Truncated string: ' + truncatedString);
}

function convertToUpperCase(str) {
const upperCaseString = str.toUpperCase();
console.log('Uppercase string: ' + upperCaseString);
}

function checkArrayEquality(arr1, arr2) {
const isEqual = JSON.stringify(arr1) === JSON.stringify(arr2);
console.log('Arrays are ' + (isEqual ? '' : 'not ') + 'equal.');
}

function ftc(f) {
var celsius = (f-32)*(5/9)
console.log(f+'F to C is'+ (f-32)*(5/9))
return celsius;
}
function ctf(c) {
var farenheit = (c*9/5) +32
console.log(c+'C is ' + farenheit)
return farenheit;
}
function add(a,b) {
cadd = a+b
console.log(a+'+'+b + '=' + (a+b))
return cadd;
}
function subtract(a,b) {
csub = a-b
console.log(a+'-'+b + '=' + (a-b))
return csub;
}
function multiply(a,b) {
cmul = a*b
console.log(a+'*'+b + '=' + (a*b))
return cmul;
}
function divide(a,b) {
cdiv = a/b
console.log(a+'÷'+b + '=' + (a/b))
return cdiv;
}
function append(a,b) {
var append = a.append(b);
console.log(a + ' Appended with ' + b + ' equals to' + append); 
return append;
}
// Basic Email Validation System:
function emailvalidation(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
return false; // Invalid email format
}


const [username, domain] = email.split('@');


return true; // Valid email address
}
function create_element(elementtype, clas, id, innerText) {
var create_element_variable = document.createElement(elementtype);

if (id) {
create_element_variable.setAttribute("id", id);
}

if (clas) {
create_element_variable.setAttribute("class", clas);
}

if (innerText) {
create_element_variable.innerText = innerText;
}

document.body.appendChild(create_element_variable);
console.log(
'Created Element:\n Element Type: ' +
  elementtype +
  '\n Class: ' +
  clas +
  '\n ID: ' +
  id +
  '\n innerText: ' +
  innerText
);
}
function calculatePercentage(value, total) {
const percentage = (value / total) * 100;
console.log(value + ' is ' + percentage + '% of ' + total);
return percentage;
}

function create_group(attributes = {}) {
const divElement = document.createElement('div');

if (attributes.ids) {
if (Array.isArray(attributes.ids)) {
for (const id of attributes.ids) {
  divElement.setAttribute('id', id);
}
} else {
divElement.setAttribute('id', attributes.ids);
}
delete attributes.ids; // Remove the 'ids' property from attributes
}

for (const [key, value] of Object.entries(attributes)) {
divElement.setAttribute(key, value);
}

document.body.appendChild(divElement);
}
// 1.1.3!
function ins_picture(url,width,height,id) {
// Creates a child-element called image
const image = document.createElement('img')
// adds size attributes in
image.width=width;
image.height=height;
// Inserts the URL.
image.src=url;
image.id = id;
// Appends the child to the body.
document.body.appendChild(image);
}
function generateUniqueID() {
const timestamp = Date.now().toString(); // Get the current timestamp as a string
const randomNum = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 10000
const uniqueID = timestamp + randomNum.toString(); // Concatenate the timestamp and random number
console.log('Your unique id is:' + uniqueID)
return uniqueID;


}



function isEven(number) {
if ( number % 2 === 0) {
return true
} else {
return false
}
}
function SpeedBenchmark(TimesForTest) {
if (TimesForTest <= 0) {
console.error('This number is below or equals zero.')
console.error('This Script will be killed by another error.')

}
var v = 0
while ( v < TimesForTest) {
generateUniqueID()
v++;
}
if (v == TimesForTest) {
    console.log("The Text has been sucessfully done. You can clear the console.")
}
}
function countWords(string) {
const words = string.split(' ');
const wordcount = words.length();

console.log('The amount of words is: ' + wordcount)
return wordcount ;
}

function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
// Define character sets based on inclusion criteria
let chars = '';
if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
if (includeNumbers) chars += '0123456789';
if (includeSpecialChars) chars += '!@#$%^&*()_+-={}[]:";\'<>?,./|\\';

// Generate the random password
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * chars.length);
password += chars.charAt(randomIndex);
}
console.log('The Password Generated is:' + password);
sleep(5000)
console.clear()
return password;

}
function capitalizeWords(inputString) {
let words = inputString.split(' ');
let capitalizedWords = [];

for (let word of words) {
let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
capitalizedWords.push(capitalizedWord);
}

let capitalizedSentence = capitalizedWords.join(' ');

return capitalizedSentence;
}
function findUniqueElements(array) {
let uniqueElements = [];

for (let element of array) {
if (!uniqueElements.includes(element)) {
uniqueElements.push(element);}}
return uniqueElements;}

function appendChild(variableitem) {
document.body.appendChild(variableitem);
console.log('Appended' + variableitem + ' to the website.')
}
// Add more themes as you like!
function themechangejs(jstheme) {
if (jstheme == "darktheme") {
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
console.log("changed theme to Darktheme")
}
if (jstheme == "darktheme2") {
document.body.style.backgroundColor = "black";
document.body.style.color = "aqua";
document.body.style.fontFamily = "monospace";
console.log('Changed theme to Dark Theme 2 (aka coding theme)')
}
if (jstheme == "defaultheme") {

document.body.style.backgroundColor = "white";
document.body.style.color = "black";
document.body.style.fontFamily = "sans-serif";
console.log('Changed theme to Default')
}
if (jstheme == "theme2") {
document.body.style.fontFamily = "monospace";
console.log('enabled theme2')
}
if (jstheme == "theme3") {
document.body.style.color = "black";
}
if (jstheme == "md_dark") {
    // sets the background color
    document.style.backgroundColor = "#121212";
    document.style.color = "white";
    console.log('set to midnight Black Theme.')
}

}
// THIS IS TEMPORARY!
function useCustomTheme(font, backgroundcolor, color,backgroundimage) {
console.log('This is the theme wanted:\n Font: ',font, ' \n background-color:',backgroundcolor,'\n background image:' + backgroundimage, '\n Color:' + color)
document.body.style.fontFamily = font;
document.body.style.backgroundColor = backgroundcolor;
document.body.style.backgroundImage = "none";
if (backgroundimage) {
document.body.style.backgroundImage = `url(${backgroundimage})`;
document.body.style.backgroundSize = "cover";
}
document.body.style.color = color;
}




function countKeys(obj) {
return Object.keys(obj).length;
}
// CHATGPT GENERATED (some of the others are chatgpt )
function formatDate(date, format) {
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, '0');
const day = String(date.getDate()).padStart(2, '0');
const hours = String(date.getHours()).padStart(2, '0');
const minutes = String(date.getMinutes()).padStart(2, '0');
const seconds = String(date.getSeconds()).padStart(2, '0');

format = format.replace('YYYY', year);
format = format.replace('MM', month);
format = format.replace('DD', day);
format = format.replace('HH', hours);
format = format.replace('mm', minutes);
format = format.replace('ss', seconds);

return format;
}

//Openweathermap.org API Weather.
// Please note that custom api keys are required.
// Also, most of this code is from GEEKSFORGEEKS.COM

function detectWeather(printbool, compilebool, appendPictureForLocation) {
  const kelvin = 273;

   function handleSuccess(position) {
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Define Variables
        const temperature = Math.floor(data.main.temp - kelvin) + "°C";
        const weather = data.weather[0].description;
        const location = data.name + "," + data.sys.country;
        const pressure = data.main.pressure + "BAR";
        const tempmax = Math.floor(data.main.temp_max - kelvin) + "°C";
        const tempmin = Math.floor(data.main.temp_min - kelvin) + "°C";
        const wind_degrees = data.wind.deg + " Degrees";
        const wind_speed = data.wind.speed + "m/s"; // Added wind_speed variable
        const humidity = data.main.humidity + '%';
        const sea_level = data.main.sea_level ? data.main.sea_level + ' atm' : 'N/A'; // Handle undefined sea_level
        const grnd_level = data.main.grnd_level ? data.main.grnd_level + ' atm' : 'N/A'; // Handle undefined grnd_level
        const visibility = (data.visibility / 1609.34) + " miles";

        console.log('Current Weather Information:');
        console.log('Temperature:', temperature);
        console.log('Weather:', weather);
        console.log('Location Detected:', location);
        console.log('Pressure:', pressure);
        console.log('Temperature (Max):', tempmax);
        console.log('Temperature (Min):', tempmin);
        console.log('Wind Degrees:', wind_degrees);
        console.log('Wind Speed:', wind_speed);
        console.log('Humidity:', humidity);
        console.log('Sea Level:', sea_level);
        console.log('Ground Level:', grnd_level);
        console.log('Visibility:', visibility);

        if (appendPictureForLocation == true) {
          const weather_loc = document.createElement("div")
          weather_loc.id = "weather_icon";
          document.body.appendChild(weather_loc)
          const weather_icon = data.weather[0].icon;
          const img = document.createElement('img');
          img.src = `http://openweathermap.org/img/w/${weather_icon}.png`;
          img.style.width = '300px';
          img.style.height = '300px';
          document.getElementById('weather_icon').appendChild(img);
        }

        if (compilebool == true) {
          var compiledData = {
            "temp": temperature,
            "weather": weather,
            "Location": location,
            "Pressure": pressure,
            "temp_max": tempmax,
            "temp_min": tempmin,
            "wind_degrees": wind_degrees,
            "Wind Speed": wind_speed
          };
          var datacomp = JSON.stringify(compiledData);
          console.log('Compiled Weather Info:\n', datacomp);
        }

        if (printbool === true) {
          console.log('Current Weather Information:');
          console.log('Temperature: ' + temperature);
          console.log('Weather: ' + weather);
          console.log('Location Detected: ' + location);
          console.log('Pressure: ' + pressure);
          console.log('Temperature (Max): ' + tempmax);
          console.log('Temperature (Min): ' + tempmin);
          console.log('Wind Degrees: ' + wind_degrees);
          console.log('Wind Speed: ' + wind_speed);
          console.log('Humidity: ' + humidity);
        }
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
      });
  }


  function handleError(error) {
    console.error("Error getting geolocation:", error.message);
  }

  if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  } else {
    console.error("Geolocation is not supported");
  }
}
function detectWeatherSep( weatheritem, position) {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleSucess3,handleError3);
  }
  else {
    console.error('geolocation is NOT supported.')
  }
function handleSucess3(position) {
    // Uses the api Key at the top to display to the bottom APIKEy.
  const apiKey2 = apiKey;
  const kelvin = 273.15; // Define the value of the kelvin variable

  const lon = position.coords.longitude;
  const lat = position.coords.latitude;
  // Define the apiURL to get the ApiKey.

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey2}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Define Variables
      const temperature = Math.floor(data.main.temp - kelvin) + "°C";
      const weather = data.weather[0].description;
      const location = data.name + "," + data.sys.country;
      const pressure = data.main.pressure + "BAR";
      const tempmax = Math.floor(data.main.temp_max - kelvin) + "°C";
      const tempmin = Math.floor(data.main.temp_min - kelvin) + "°C";
      const wind_degrees = data.wind.deg + " Degrees";
      const wind_speed = data.wind.speed + "m/s"; // Added wind_speed variable
      const humidity = data.main.humidity + "%";
      const sea_level = data.main.sea_level ? data.main.sea_level + " atm" : "N/A"; // Handle undefined sea_level
      const ground_level = data.main.grnd_level ? data.main.grnd_level + " atm" : "N/A"; // Handle undefined grnd_level
      const visibility = (data.visibility / 1609.34) + " miles";
      if (weatheritem == "temperature") {
        return temperature;
      } else {
        if (weatheritem == "weather") {
          return weather;
        } else {
          if (weatheritem == "location") {
            return location;

          } else {
            if (weatheritem == "pressure") {
              return pressure;
            } else {
              if (weatheritem == "temperature_max") {
                return tempmax;

              } else {
                if (weatheritem == "temperature_min") {
                  return tempmin;
                } else {
                  if (weatheritem == "wind_degrees") {
                    return wind_degrees;
                  } else {
                    if (weatheritem == "wind_speed") {
                      return wind_speed;
                    } else {
                      if (weatheritem == "humidity") {
                        return humidity;
                      } else {
                        if (weatheritem == "sea_level") {
                          return sea_level;
                        } else {
                          if (weatheritem == "ground_level") {
                            return ground_level;
                          }
                          else {
                            return visibility;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      // Rest of the code logic
    });
}
function handleError3() {
  console.error("Error:" + error.message);
}
}


function sendEmail() {


let to_person = prompt('Who are you sending To?')
let subject = prompt('What is the subject?')
let send_text = prompt('What is the message?')
var mailtoLink ='mailto:' + to_person + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(send_text);
window.location.href = mailtoLink;

alert('It might be blocked by your browser.')};


function redirect_to_website(url) {
if (url) {
let promptyn = confirm('You are being redirected to ' + url)
if (promptyn == true) {
window.location.replace(url);
} else {
console.error('User Refused to go to the website: \n' + url);
}
} else {
let promptweb =  prompt('Type the url projected to go to:')
let promptyns = confirm('You are being led to: \n ' + url)
if (promptyns == true) {
console.log('User confirms to go.')
sleep(2000)
window.location.replace(promptweb)

} else {
console.error('User refused to go to the website: \n' + url)
}
}
}
function getDayOfWeek(date) {
const days_of_week = ['Sunday','Monday','Tuesday','Wensday','Thursday','Friday',"saturday"]
const dayIndex =  date.getDay();
return days_of_week[dayIndex];
}
function calculateAge(birthDate) {
const now = new Date();
const difference_in_milliseconds = now - birthDate.getTime();
const ageDate = new Date(difference_in_milliseconds)
return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function formatCurrency(amount,currency) {
return `${currency}${amount.toFixed(2)}`;
}

function calculateDistance2d(x1, y1, x2, y2) {
const xDiff = x2 - x1;
const yDiff = y2 - y1;
return Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2));
}
function calculateDistance(x1,y1,z1,x2,z2,y2,) {
const xDiff = x2 - x1;
const yDiff = y2 - x1;
const zDiff = z1 - z2;
const distance = Math.sqrt(Math.pow(xDiff, 2) + Math.pow(yDiff, 2) + Math.pow(zDiff, 2));
return distance;

}
function arabicToRoman(num) {
const romanNumerals = [
{ value: 1000, symbol: 'M' },
{ value: 900, symbol: 'CM' },
{ value: 500, symbol: 'D' },
{ value: 400, symbol: 'CD' },
{ value: 100, symbol: 'C' },
{ value: 90, symbol: 'XC' },
{ value: 50, symbol: 'L' },
{ value: 40, symbol: 'XL' },
{ value: 10, symbol: 'X' },
{ value: 9, symbol: 'IX' },
{ value: 5, symbol: 'V' },
{ value: 4, symbol: 'IV' },
{ value: 1, symbol: 'I' }
];

let result = '';
for (let i = 0; i < romanNumerals.length; i++) {
while (num >= romanNumerals[i].value) {
result += romanNumerals[i].symbol;
num -= romanNumerals[i].value;
}
}
return result;
}
function getLocationInLongitudeAndLatitude() {
    function handleSucess2(position) {

    const lon = position.coords.longitude;
    const lat = position.coords.latitude;

    console.log('longitude:'+lon + '\n Latitude: ' + lat)
    }
    function handleError2(error) {
        console.error("Error getting geolocation:", error.message);
      }
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleSucess2, handleError2);
      } else {
        console.error('Error: Geolocation is not supported.')}
}

function encode_ascii85(a) {
  var b, c, d, e, f, g, h, i, j, k;
  for (!/[^\x00-\xFF]/.test(a), b = "\x00\x00\x00\x00".slice(a.length % 4 || 4), a += b, 
  c = [], d = 0, e = a.length; e > d; d += 4) f = (a.charCodeAt(d) << 24) + (a.charCodeAt(d + 1) << 16) + (a.charCodeAt(d + 2) << 8) + a.charCodeAt(d + 3), 
  0 !== f ? (k = f % 85, f = (f - k) / 85, j = f % 85, f = (f - j) / 85, i = f % 85, 
  f = (f - i) / 85, h = f % 85, f = (f - h) / 85, g = f % 85, c.push(g + 33, h + 33, i + 33, j + 33, k + 33)) :c.push(122);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(c, b.length), "<~" + String.fromCharCode.apply(String, c) + "~>";
}

function decode_ascii85(a) {
  var c, d, e, f, g, h = String, l = "length", w = 255, x = "charCodeAt", y = "slice", z = "replace";
  for ("<~" === a[y](0, 2) && "~>" === a[y](-2), a = a[y](2, -2)[z](/\s/g, "")[z]("z", "!!!!!"), 
  c = "uuuuu"[y](a[l] % 5 || 5), a += c, e = [], f = 0, g = a[l]; g > f; f += 5) d = 52200625 * (a[x](f) - 33) + 614125 * (a[x](f + 1) - 33) + 7225 * (a[x](f + 2) - 33) + 85 * (a[x](f + 3) - 33) + (a[x](f + 4) - 33), 
  e.push(w & d >> 24, w & d >> 16, w & d >> 8, w & d);
  return function(a, b) {
    for (var c = b; c > 0; c--) a.pop();
  }(e, c[l]), h.fromCharCode.apply(h, e);}
function requestidInfo(id) {
  const val = document.querySelector(id).value;
  console.log('Requested Information is:' + val)
  return val;
}
function defineAudioFunction(path) {
  let beat;
  beat = new Audio(path);
  beat.play();
}
function generateRandomColor(alpha) {
  if (alpha < 0 || alpha > 1) {
    throw new Error("Alpha value must be between 0 and 1.");
  }

  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function disableDisplayForIMG(id,alt) {
  
  document.getElementById(id).innerHTML = alt;
  console.log('Sucessfully Replaced The Image ID with the alternate text:' + alt);
}
function createNestedList(data, id_for_list) {
  let list_create = document.createElement('ul');
  list_create.id = id_for_list;
  document.body.appendChild(list_create);

  let list = document.getElementById(id_for_list);
  createListItems(data, list);
  console.log('Successfully defined and created a nested list!');


function createListItems(data, parent) {
  for (let i = 0; i < data.length; i++) {
    let listItem = document.createElement('li');
    parent.appendChild(listItem);

    if (Array.isArray(data[i])) {
      let nestedList = document.createElement('ul');
      listItem.appendChild(nestedList);
      createListItems(data[i], nestedList);
    } else {
      listItem.innerText = data[i];
    }
  }
}}
function createIframe(src,width,height,id) {
  const iframe_creation = document.createElement("iframe");
  iframe_creation.src = src;
  iframe_creation.width = width;
  iframe_creation.height = height;
  iframe_creation.id = id;
  document.body.appendChild(iframe_creation);
  console.log('Sucessfully Created Iframe!')
}
function createLink(href,text,id) {
  const a_link_creation = document.createElement("a");
  a_link_creation.href = href;
  a_link_creation.innerHTML = text;
  a_link_creation.id=id;
  document.body.appendChild(a_link_creation);
  console.log('Inserted a link. Info: \n HREF:' + href + '\n text: ' + text + '\n ID:' + id);
}
function currentTime(alertbool) {
  const date = new Date()
  if (alertbool == false) {
    console.log(
      'date:' + date
    )
  } else {
    console.log('date:' + date)
    alert('Date: ' + date);
  }
}
function createKeyListener(key, function_to_run) {
  document.addEventListener("keydown", function(event) {
    if (event.key === key) {
      console.log("Key pressed:", event.key);
      function_to_run();
    }
  });
}
function recordKeyPress() {
  document.addEventListener("keydown",function(event) {
    console.log('Recorded Key Press with: ' + event.key);
  });
}
function change_body_background(color) {
  console.log('changing Colors...')
  document.body.style.backgroundColor = color;
  console.log('Changed Background Color to: ' + color);

}
function moveItem(elementId, x = 0, y = 0) {
  var element = document.getElementById(elementId);
  element.style.transform = `translate(${x}px, ${y}px)`;
}
function rotateElement(elementId, angle) {
  var element = document.getElementById(elementId);
  element.style.transform = `rotate(${angle}deg)`;
}
function checkIfConnected() {
  const internetconnect = navigator.onLine;
  if (internetconnect == true) {
    return true;
  }
  else {
    return false;
  }
}
function areCookiesEnabled() {
  const nav_cookies = navigator.cookieEnabled;
  if (nav_cookies == true) {
    return true;
  } else {
    return false;
  }
}
function englishOrForeign() {
  const lang = navigator.language;
  if (lang == "en-US" || lang == "en-UK" || lang == "en-CN") {
    return true;
  }
  else {
    return false;
  }
}
function permissions(permission_nav_object ) {
  navigator.permissions.query({ name: permission_nav_object }).then((result) => {
    if (result.state === "granted") {

      console.log(true)
      return true;
    } else  {

      console.log(true)
      return false;
    }
  });}
  function scaleInPercent(percent,id) {
    document.getElementById(id).style.transform = `scale(${percent}%)`;
    console.log('Sucessfully Scaled item ' + id + " " + percent + "%.")
  }
  function skew(id,deg1,deg2) {
    if (deg2) {
    document.getElementById(id).style.transform=`skew(${deg1}deg,${deg2})deg)`;
    console.log('Skewing Sucessfull. Info: \n ID: ' + id + "\n Skew Number 1: " + deg1, " Skew Number 2:" + deg2);
    } else {
      document.getElementById(id).style.transform = `skew(${deg1})`;
      console.log('Skewing Sucessfull. Info: \n ID:' + id + "\n SkewNum "+ deg1);
    }
  }
  function list_childs(item) {
   const list = [];
   console.log('List:')
   const element = document.getElementById(item);
   for (const child of element.children) {
     list.push(child.tagName);
     console.log(children.tagName);
   } 
   return list;

  }
function utf8encode(text) {
  const encoder = new TextEncoder();
  return Array.from(encoder.encode(text));
}

function utf8decode(encodedText) {
  const decoder = new TextDecoder();
  const uint8Array = new Uint8Array(encodedText);
  return decoder.decode(uint8Array);
}
function display_new_error_in_cnsle(type,text) {
    if (type == "uncaught") {
        throw new Error(text);
    } else if (type == "error") {
        console.error(
            text
        );

    } else if (type == "log") {
        console.log(text);
    } else if (type == "war") {
      console.warn(text);
    }
}

sleep(5000)

if (navigator.onLine == false) {
    console.error('No Internet Connection')
    console.error('No Internet Connection')
    console.error('G.S.A.P Functions will not work')
}
console.clear()
console.log('Change It JS has been installed')
console.log('Visit tinyurl.com/changeitjs for more info.')
function prompt_question(question,answer) {
  let q = prompt(question);
  if (q == answer) {
    return true;
  } else {
    return false;
  }
}


// Import green_sock lib.
function import_script(src) {
    const script = document.createElement('script');
    script.src = src;
    
    script.onload = function() {
      // Code to execute after the script has been loaded
    };
    
    script.onerror = function() {
      // Handle any errors that occur while loading the script
    };
    
    document.head.appendChild(script);}
import_script("https://cdn.jsdelivr.net/npm/gsap@3.12.1/dist/gsap.min.js")
import_script("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.0/ScrollTrigger.min.js")
if (navigator.onLine == false) {
  console.error('GSAP Advance DOM Features will not work due to no internet. ')
}
function gsapto(sel,dur,xc,yc) {
    gsap.to(sel,{
      x:xc,
      y:yc,
      duration:dur
    })
    console.log('Finished.')
  }
  function to_advanced_gsap(sel,dur,xc,yc,bgcolor,staggers) {
    if (bgcolor == "none") {
      var comp = "00FFFFFF";
    } else {
      var comp = bgcolor;
    } 
    gsap.to(sel,{
      x:xc,
      y:yc,
      duration:dur,
      backgroundColor:comp,
      stagger:staggers,

    });
    console.log('Finished.')
  }
  function go_to_gsap_webpage() {
    console.log("Going to 'Greensocks' Website: 'https://greensock.com'");
    document.location.replace('https://greensock.com');
  
  }
  function import_script(src) {
      let imp_script = document.createElement("script");
      imp_script.src = src;
      document.body.appendChild(imp_script);
      console.log('Finished. Information: \n Imported Script: ' + src);
  }
  function gsap_from(sel,dur,xcord,y_cord) {
    gsap.from(sel, {
        duration:dur,
        x:xcord,
        y:y_cord
    })
  }
  function gsap_fromTo(sel,dur,starting_x,starting_y,ending_x,ending_y) {
    gsap.fromTo(sel,{
        x:starting_x,
        y:starting_y,
        duration:dur
    },
    {
        x:ending_x,
        y:ending_y
    })
  }
  function setLocation(sel,xc,yc) {
    gsap.set(sel, {
        x:xc,
        y:yc
    })
  }
  // For info on toEases, go to the docs at greensock.
  function toEase(sel,dur,ease2) {
    gsap.to(sel,{
        duration:dur,
        ease:ease2
    })
  } 
  function simpleScrlTrigger(sel,xc,yc) {
    sel, {
        scrollTrigger: sel,
        x: xc,
        y:yc,
    
    }
  }
  function createScrollTrigger(sel, start, end, toggleActions, duration, y, markers) {
    gsap.from(sel, {
      opacity: 0,
      duration: duration,
      y: y,
      scrollTrigger: {
        start: start,
        end: end,
        toggleActions: toggleActions,
        markers: markers
      }
    });
}
function find_current_date() {
    let current_date = new Date()
    return date;
}
function detectCollision(object1, object2) {
    // Check if the bounding boxes of the objects overlap
    if (
      object1.x < object2.x + object2.width &&
      object1.x + object1.width > object2.x &&
      object1.y < object2.y + object2.height &&
      object1.y + object1.height > object2.y
    ) {
      // Collision detected
      return true;
    }
  
    // No collision detected
    return false;
  }
  function create_square_or_rect(width, height, shape_id,color) {
    const new_shape = document.createElement("div");
    new_shape.id = shape_id;
    document.body.appendChild(new_shape);
  
    // Apply styles to the shape
    const shape_iden = document.getElementById(shape_id);
    shape_iden.style.width = width + "px";
    shape_iden.style.height = height + "px";
    shape_iden.style.backgroundColor = color;
  }
  function create_circle(size, shape_id,color) {
    const new_shape = document.createElement("div");
    new_shape.id = shape_id;
    document.body.appendChild(new_shape);
  
    // Apply styles to the circle, get the id of the circle
    const shape_iden = document.getElementById(shape_id);
    shape_iden.style.width = size + "px";
    shape_iden.style.height = size + "px";
    shape_iden.style.backgroundColor = color;
    shape_iden.style.borderRadius = "50%"; // Makes the shape a circle by changing the radius of the Border
  }
  function create_poly(id,point0x, point0y, point1x, point1y, point2x, point2y, point3x, point3y, color) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "400");
    svg.setAttribute("height", "400");
    document.body.appendChild(svg);
  
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", `${point0x},${point0y} ${point1x},${point1y} ${point2x},${point2y} ${point3x},${point3y}`);
    polygon.setAttribute("fill", color);
    polygon.setAttribute("id",id);
    
    svg.appendChild(polygon);
  }
 function resize_element(h,w,id) {
const element = document.getElementById(id);
element.style.width = w + 'px';
element.style.height = h + 'px';
  }


  let date = new Date()
console.log('Today is: ' + date  + ".");
function create_video_element(width2,height2,src2,id2) {
  const video_element = document.createElement("video");
  video_element.src = src2;
  video_element.id = id2;
  document.body.appendChild(video_element);
  const vid_element = document.getElementById(id2);
  vid_element.setAttribute("controls","true");
  vid_element.style.width = width2 + "px";
  vid_element.style.height = height2 + "px";
}
