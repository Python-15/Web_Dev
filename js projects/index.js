  // 1 ways to print in java script
        //  console.log("hellow")
        // alert.log("donot reload")
        // document.write("This is help to print in consol")
        
        
        //  2 javascript console API
        // console.log("hellow");
        
        // document.write("This is help to print in consol");
        // 3 variable int javaScript
        var numb1 = 455;
        var numb2 = 889;
       // 5 String data type
       var str1 = "this is string";
         // Object
         var marks = {
             rvi: 32, ram: 46,
            adiee: 100
         }
        //  operators in js
        var a = 6;
        var b = 5;
        console.log("sum of a+b = " +  a + b  );
        // DOM MANUPLATION methond
        let elem = document.getElementById('click');
        
        let elemCLass = document.getElementsByClassName("container");
      
        // elemCLass[0].style.background = "yellow";

        elemCLass[0].classList.add("bg-primary")
       tn = document.getElementsByTagName('div')
       console.log(tn)
       Eleme = document.Eleme('p')
       Ele.innerText ="this is a created para"
       tn[0].appendChild(Eleme);
       // you can add remove in  java script
       // Events in javaScripit

       function clicked(){
           console.log("the button was clicked");
       }
       window.onload = function(){
           console.log('The document was loaded')
       }
       /* there are many event in js as you click
       anything you do on webpage like click on buuton
       open a link all are event
       */
       container.addEventListener('click' , function(){
          console.log("Clicked on Container")
      })
      firstcontainer.addEventListener('mouseout', function(){
          console.log("mosue out of container")
      })
      firstcontainer.addEventListener('mouseover', function(){
          console.log("mouse in the container")
      })