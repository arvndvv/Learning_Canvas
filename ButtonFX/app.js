const buttons = document.querySelectorAll('button');
const turbulence = document.querySelector('feTurbulence');
const DisplacementMap = document.querySelector('feDisplacementMap');
let verticalFrequency = 0.00001;
let horizontalFrequency = 0.00001;
// let scale = 30;
turbulence.setAttribute('baseFrequency', verticalFrequency + ' ' + horizontalFrequency);
// DisplacementMap.setAttribute('scale', scale);
const steps = 30;
const interval = 30;

buttons.forEach(function(button) {
    button.addEventListener('mouseover', function(e) {

        verticalFrequency = 0.00001;

        // scale = 30;
        horizontalFrequency = 0.00001;
        for (i = 0; i < steps; i++) {
            setTimeout(function() {
                verticalFrequency += 0.0012;
                horizontalFrequency += 0.00113;
                // scale -= 0.1;
                turbulence.setAttribute('baseFrequency', verticalFrequency + ' ' + horizontalFrequency);
                // DisplacementMap.setAttribute('scale', scale);



            }, i * interval);
        }
        // setTimeout(function() {
        //     // scale = 30;
        //     verticalFrequency = 0.00001;
        //     horizontalFrequency = 0.00001;

        //     turbulence.setAttribute('baseFrequency', verticalFrequency + ' ' + horizontalFrequency);

        // }, steps * interval)
    })
})