(function() {
    'use strict';
    console.log("reading js");

    const myForm = document.querySelector('#myForm');
    const rst = document.querySelector('#rst');
    const nInsert = document.querySelector('#nInsert')

    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        document.querySelector('.hidden').className = 'bgDv showing'
        document.querySelector('.hiddenReset').className = 'showing'
        document.querySelector('.showing').className = 'hidden'
        document.querySelector('.showing2').className = 'hidden'
        document.querySelector('.tatami').className = 'tatami showing'
        const noun1 = document.querySelector('#noun1').value;
        const noun2 = document.querySelector('#noun2').value;
        const adj = document.querySelector('#adj').value;
        const verb = document.querySelector('#verb').value;
        const food = document.querySelector('#food').value;
        const concept = document.querySelector('#concept').value;
        const name = document.querySelector('#name').value;
        const fname = document.querySelector('#fname').value;
        
        if(noun1 && noun2 && adj && verb && food && concept && name && fname) {
            var myText = `<p id="userResponse" class="showing">One autumn evening at a mysterious <b>${food}</b> stand behind the <b>${name}</b> Shrine, a <b>${adj}</b> third-year college student bumps into a <b>${noun1}</b> with an <b>${noun2}</b>-shaped head who calls himself a god of <b>${concept}</b>. Meeting this <b>${noun1}</b> causes the student to reflect upon his past two years at college—two years bitterly spent trying to <b>${verb}</b> couples on campus with his only friend <b>${fname}</b><p>`;
        }
        else {
            var myText = "Please give me words so I can make your Mad Lib!"
        }

        nInsert.innerHTML = myText;

        const formData = document.querySelectorAll("input[type=text]");
        for(eachField of formData) {
            eachField.value = "";
        }
    });

    rst.addEventListener('reset', function(event) {
        event.preventDefault();
        window.location.reload();
        /* knew this from previous experience, it made the quickest way to restart */
    })
    

    
})();