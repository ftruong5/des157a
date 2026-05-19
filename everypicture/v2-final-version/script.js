(function(){
    'use strict';
    console.log('reading JS');

    const levels = [
        document.querySelector('.level1'),
        document.querySelector('.level2'),
        document.querySelector('.level3')
    ];

    let current = 0;

    // go to the next level
    document.querySelectorAll('.next-btn').forEach(function (btn){
        btn.addEventListener('click', function(){
            levels[current].style.display = 'none';
            current++
            levels[current].style.display = 'block';
        });
    });

    // go to the previous level
    document.querySelectorAll('.back-btn').forEach(function (btn){
        btn.addEventListener('click', function(){
            levels[current].style.display = 'none';
            current--
            levels[current].style.display = 'block';
        });
    });

    // how the image will be interacted with
    document.querySelectorAll('.secret-img').forEach(function (container){
        const overlay = container.querySelector('.overlay');

        // show a message when user clicks on the image
        function showMessage(text, x, y){
            const msg = document.createElement('p');
            msg.textContent = text;
            msg.style.color = '#1b2cc1';
            msg.style.fontFamily = '"Finger Paint", sans-serif';
            msg.style.fontSize = '20px';
            msg.style.position = 'absolute';
            msg.style.left = x + 'px';
            msg.style.top = y + 'px';
            msg.style.margin = '0';
            msg.style.pointerEvents = 'none';
            container.appendChild(msg);

            // message disappears after 1s
            setTimeout(function(){
                msg.remove();
            }, 1000);
        }

        // spotlight effect when the mouse enters the image
        container.addEventListener('mousemove', function (event){
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            overlay.style.background = `radial-gradient(circle 80px at ${x}px ${y}px, transparent 20px, rgba(0,0,0,0.7) 50px, black 70px)`;
        });

        // spotlight effect disappears when the mouse leaves the image
        container.addEventListener('mouseleave', function(){
            overlay.style.background = 'radial-gradient(circle 80px at -999px -999px, transparent 20px, rgba(0,0,0,0.7) 50px, black 70px)';
        });

        // when the user clicks around the image
        container.addEventListener('click', function(event){
            const rect = container.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            // find the specific coordinates of the foot
            // console.log(x, y);

            // defining where the correct spot is
            const correctX = parseFloat(container.dataset.x);
            const correctY = parseFloat(container.dataset.y);
            const radius = parseFloat(container.dataset.radius);
            const distance = Math.sqrt((x - correctX) ** 2 + (y - correctY) ** 2);

            // message output for when the user clicks on a specific area of the image
            if (distance <= radius){
                showMessage('Congratulations, you found the foot!', x, y);
            }
            else{
                showMessage('Oops, try again.', x, y);
            }
        });
    });
})();