
            console.clear()
            console.log('Preparing to install')
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
          function storeinfo(infostore,key) {
            localStorage.setItem(key,infostore)
            console.log('Set Info. \n Key: ' +key + '\n Info:' + infostore)
          }
          function getinfo(key) {
            var t = localStorage.getItem(key)
            console.log('Got LocalStorage ' + key  + 'That said :' +t)
          }
          
          function crash() { 
            let i = 0 
            while(i < 100) { 
                console.info('Registing.Converting')
                 console.error('Misconcluded. "cjtheme was not defined."') 
                 console.info('GND info fixed. ') 
                 console.clear() 
                 i++;
                } 
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
         
        function info() {
            alert('Change It! is a online interactive Javascript code used for debbuging and playing with websites. This was created on May 26th 2023, And was created by one person. Click OK to continue.')
            alert('Currently, Change It! is a Javascript function definer but maybe be can be made as a extension plugin in the future.')
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
       
