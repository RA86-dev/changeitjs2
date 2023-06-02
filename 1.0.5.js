
            console.clear()
            console.log('Preparing to Load')
            sleep(5000)
            console.log('Loading 1%')
            console.log('-----------')
            sleep(2000)
            console.log('Loading 25%')
            console.log('==---------')
            sleep(3000)
            console.log('rtpa')
            console.log('Loading 90%')
            console.log('=========-')
            sleep(7000)
            console.log('Done!')
            console.log('------')
  
                    
        function sleep(milliseconds) {
            var start = new Date().getTime();
            for (var i = 0; i < 1e7; i++) {
              if ((new Date().getTime() - start) > milliseconds){
                break;
              }
            }
          }
          function ClearAfterDelay(delay) {
            setTimeout(() => {
              console.clear();
            }, delay);
          }
          
          function storeinfo(infostore,key) {
            localStorage.setItem(key,infostore)
            console.log('Set Info. \n Key: ' +key + '\n Info:' + infostore)
          }
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
            } 
                if (type == 'def') {
                    alert(text);
                    console.log('Alerted ' + text);
                }
                if (type == 'conf') {
                    var conf = confirm(text)
                    console.log('Output of CONFIRM is ' + conf)
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
                document.designMode = 'on';
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
        }
        function redirectto(url) {
            var redirect = confirm('You are redirecting to the website ' + url + '. ')
            if (redirect == true) {
            document.location.replace(url)
            } if (redirect == false) {
                console.error('user does not want to redirect!')
            }

        }
        function ftc(f) {
            console.log(f+'F to C is'+ (f-32)*(5/9))
        }
        function ctf(c) {
            var calc = (c*9/5) +32
            console.log(c+'C is ' + calc)
        }
        function add(a,b) {
            console.log(a+'+'+b + '=' + (a+b))
        }
        function subtract(a,b) {
            console.log(a+'-'+b + '=' + (a-b))
        }
        function multiply(a,b) {
            console.log(a+'*'+b + '=' + (a*b))
        }
        function divide(a,b) {
            console.log(a+'÷'+b + '=' + (a/b))
        }

        
        
        
        //Designed and made with VSCODE, Created Friday May 26,2023.
       