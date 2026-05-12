(function(){
    'use strict';
    console.log('reading JS');

    // Experiment 1: Zoom In Hover
    const container1 = document.querySelector('.container1');
    const experiment1 = document.querySelector('#experiment1');

    container1.addEventListener('mouseenter', function(event){
        experiment1.style.transformOrigin = '52% 70%';
        experiment1.style.transform = 'scale(9)';
        document.body.style.backgroundColor = 'rgb(4, 255, 0)';

    });

    container1.addEventListener('mouseleave', function(){
        experiment1.style.transformOrigin = 'center center';
        experiment1.style.transform = 'scale(1)';
        document.body.style.backgroundColor = 'white';
        
    });

    // Experiment 3: Emoji Overlay
    const container3 = document.querySelector('.container3');
    const emojiOverlay = document.querySelector('#emojiOverlay');

    container3.addEventListener('mouseenter', function(){
        experiment3.style.transformOrigin = '10% 30%';
        experiment3.style.transform = 'scale(9)';
        document.body.style.backgroundColor = 'rgb(255, 0, 0)';
        emojiOverlay.classList.add('emoji-show');
    });

    container3.addEventListener('mouseleave', function(){
        experiment3.style.transformOrigin = 'center center';
        experiment3.style.transform = 'scale(1)';
        document.body.style.backgroundColor = 'white';
        emojiOverlay.classList.remove('emoji-show');
        
    });
})();