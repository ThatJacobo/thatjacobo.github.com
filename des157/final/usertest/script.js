(function() {
    'use strict';
    console.log("reading js");

    alert("Alright Sorry if this gets repetetive thanks to how I scripted this website... \nReguardless, here is what you need to do:\n-Hover over each article and see the interactions\n-Enter each article and scroll through them\n-Interact with the images (first two articles only)\n");

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

/* script relating to my own mother */
const Alma = document.getElementById('almaMove'); /*sets portrait as an entity that'll be used */
    const AlmaSC = document.getElementById('cover3');
    const AlmaWords = document.querySelector('.words3');

    Alma.addEventListener('click', function() {/* This makes the initial portrait clickable in order to reach the article */
        console.log("does THIS work")
        document.querySelector('.hidden3').className = 'showing'
    });

    AlmaSC.addEventListener('click', function() {/* makes it so slides can change with clicks */
        nextImg3();
    });

    const AlmaPics = [
        'AlmaOrtega.jpg',
/*         'JacobPainting.PNG',
        'GroupPic (2).jpg' */
    ];

    let currentImage3 = 0;
    const slide3 = document.getElementById('cover3');

    function nextImg3() {/* function that changes the slides (jacob vers.)*/
        if (currentImage3 == 0) {/* If/Else statements to change the description of each photo */
            AlmaWords.innerHTML = 'Alma Ortega, Painted by Rick Ortega'
        /*     currentImage3++; */
        }
/*         else if (currentImage3 == 1) {
            AlmaWords.innerHTML = 'Family Photo with Rick, Jacob, and his brothers Matthew and Vincent'
            currentImage3++;
        }
        else if (currentImage3 == 2) {
            AlmaWords.innerHTML = 'Jacob Ortega, Drawing art for a friend of his'
            currentImage2 = 0;
        } */
        slide3.src = `images/${AlmaPics[currentImage3]}`
    }

    const interval3 = setInterval(function () {nextImg3()}, 7000); /* auto-scrolls through img in slideshow */

    const rst3 = document.querySelector('.rst3'); /* reset button script */
    rst3.addEventListener('reset', function(event) {
        event.preventDefault();
        window.location.reload();
    })

    /* Script relating to my brother Vincent */
    const Vince = document.getElementById('vinMove'); /*sets portrait as an entity that'll be used */
    const VinceSC = document.getElementById('cover4');
    const VinceWords = document.querySelector('.words4');

    Vince.addEventListener('click', function() {/* This makes the initial portrait clickable in order to reach the article */
        console.log("does THIS work")
        document.querySelector('.hidden4').className = 'showing'
    });

    VinceSC.addEventListener('click', function() {/* makes it so slides can change with clicks */
        nextImg4();
    });

    const VincePics = [
        'VincentOrtega.jpg',
/*         'JacobPainting.PNG',
        'GroupPic (2).jpg' */
    ];

    let currentImage4 = 0;
    const slide4 = document.getElementById('cover4');

    function nextImg4() {/* function that changes the slides (jacob vers.)*/
        if (currentImage4 == 0) {/* If/Else statements to change the description of each photo */
            VinceWords.innerHTML = 'Vincent Ortega, painted by Rick Ortgea'
        /*     currentImage3++; */
        }
/*         else if (currentImage3 == 1) {
            AlmaWords.innerHTML = 'Family Photo with Rick, Jacob, and his brothers Matthew and Vincent'
            currentImage3++;
        }
        else if (currentImage3 == 2) {
            AlmaWords.innerHTML = 'Jacob Ortega, Drawing art for a friend of his'
            currentImage2 = 0;
        } */
        slide4.src = `images/${VincePics[currentImage4]}`
    }

    const interval4 = setInterval(function () {nextImg4()}, 7000); /* auto-scrolls through img in slideshow */

    const rst4 = document.querySelector('.rst4'); /* reset button script */
    rst4.addEventListener('reset', function(event) {
        event.preventDefault();
        window.location.reload();
    })

    /* Script relating to my brother Matthew */
    const Matt = document.getElementById('mattMove'); /*sets portrait as an entity that'll be used */
    const MattSC = document.getElementById('cover5');
    const MattWords = document.querySelector('.words5');

    Matt.addEventListener('click', function() {/* This makes the initial portrait clickable in order to reach the article */
        console.log("does THIS work")
        document.querySelector('.hidden5').className = 'showing'
    });

    MattSC.addEventListener('click', function() {/* makes it so slides can change with clicks */
        nextImg4();
    });

    const MattPics = [
        'MatthewOrtega.jpg',
/*         'JacobPainting.PNG',
        'GroupPic (2).jpg' */
    ];

    let currentImage5 = 0;
    const slide5 = document.getElementById('cover5');

    function nextImg5() {/* function that changes the slides (jacob vers.)*/
        if (currentImage5 == 0) {/* If/Else statements to change the description of each photo */
            MattWords.innerHTML = 'Placeholder Matthew Image'
        /*     currentImage3++; */
        }
/*         else if (currentImage3 == 1) {
            AlmaWords.innerHTML = 'Family Photo with Rick, Jacob, and his brothers Matthew and Vincent'
            currentImage3++;
        }
        else if (currentImage3 == 2) {
            AlmaWords.innerHTML = 'Jacob Ortega, Drawing art for a friend of his'
            currentImage2 = 0;
        } */
        slide5.src = `images/${MattPics[currentImage4]}`
    }

    const interval5 = setInterval(function () {nextImg5()}, 7000); /* auto-scrolls through img in slideshow */

    const rst5 = document.querySelector('.rst5'); /* reset button script */
    rst5.addEventListener('reset', function(event) {
        event.preventDefault();
        window.location.reload();
    })
})()
