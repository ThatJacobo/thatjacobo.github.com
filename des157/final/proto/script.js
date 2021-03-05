(function() {
    'use strict';
    console.log("reading js");

    /* Developer Note - This code can be optimized by a LOT, I was just crunched for time thanks to personal reasons, so here you go! */

    /* All the script relating to Rick side */
    const rick = document.getElementById('dontmove'); /*sets portrait as an entity that'll be used */
    const rickWords = document.querySelector('.words');
    const rickSC =  document.getElementById('cover') 
    rick.addEventListener('click', function() {/* This makes the initial portrait clickable in order to reach the article */
        console.log("does this work")
        document.querySelector('.hidden').className = 'showing'
    });

    rickSC.addEventListener('click', function() {/* makes it so slides can change with clicks */
        nextImg();
    });

    const rickPics = [
        'RickOrtegaPaint.PNG',
        'ChimMaya.PNG',
    ];
    let currentImage = 0;

    const slide1 = document.getElementById('cover');/* slideshow const */


    function nextImg() {/* function that changes the slides (rick vers.)*/
        if (currentImage == 0) {/* If/Else statements to change the description of each photo */
            rickWords.innerHTML =  'Rick at ChimMaya, a gallery whom we have worked with for years';
            currentImage++;
        }
        else if (currentImage == 1) {
            rickWords.innerHTML ='Rick Ortega Painting for an Art Show';
            currentImage = 0;
        }
        slide1.src = `images/${rickPics[currentImage]}`/* both slide1 and slide2 change with this part of each defined function */
    }

    const interval = setInterval(function () {nextImg()}, 5000)/* auto-scrolls through img in slideshow */

    const rst = document.querySelector('.rst');/* reset button script */
    rst.addEventListener('reset', function(event) {
        event.preventDefault();
        window.location.reload();
    })



    /* All the script relating to MY side */
    const Jacob = document.getElementById('movethis'); /*sets portrait as an entity that'll be used */
    const JacobSC = document.getElementById('cover2');
    const JacobWords = document.querySelector('.words2');

    Jacob.addEventListener('click', function() {/* This makes the initial portrait clickable in order to reach the article */
        console.log("does THIS work")
        document.querySelector('.hidden2').className = 'showing'
    });

    JacobSC.addEventListener('click', function() {/* makes it so slides can change with clicks */
        nextImg2();
    });

    const JacobPics = [
        'JacobDraw.jpg',
        'JacobPainting.PNG',
        'GroupPic (2).jpg'
    ];

    let currentImage2 = 0;
    const slide2 = document.getElementById('cover2');

    function nextImg2() {/* function that changes the slides (jacob vers.)*/
        if (currentImage2 == 0) {/* If/Else statements to change the description of each photo */
            JacobWords.innerHTML = 'A portrait of Jacob, painted by his father, Rick Ortega'
            currentImage2++;
        }
        else if (currentImage2 == 1) {
            JacobWords.innerHTML = 'Family Photo with Rick, Jacob, and his brothers Matthew and Vincent'
            currentImage2++;
        }
        else if (currentImage2 == 2) {
            JacobWords.innerHTML = 'Jacob Ortega, Drawing art for a friend of his'
            currentImage2 = 0;
        }
        slide2.src = `images/${JacobPics[currentImage2]}`
    }

    const interval2 = setInterval(function () {nextImg2()}, 7000); /* auto-scrolls through img in slideshow */

    const rst2 = document.querySelector('.rst2'); /* reset button script */
    rst2.addEventListener('reset', function(event) {
        event.preventDefault();
        window.location.reload();
    })
})()