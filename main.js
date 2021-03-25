window.addEventListener('load', function(){

    const block = document.querySelector('.block');
    const img = document.querySelector('img');

    document.addEventListener('keydown', pressKey);

    document.addEventListener('keydown', event => {
        if(event.keyCode === 17){
            img.style.transition = '0s';
            img.style.width = '80%';
            img.style.height = '60%';
        }
    })

    document.addEventListener('keyup', (event) => {
        if(event.keyCode === 17){
            img.style.width = '100%';
            img.style.height = '100%';
        }
    })


    function pressKey(event) {
        if (event.keyCode === 38 && !event.ctrlKey) {
            block.style.top = block.offsetTop - 10 + 'px';
        } else if (event.keyCode === 40 && !event.ctrlKey) {
            block.style.top = block.offsetTop + 10 + 'px';
            //down
        } else if (event.keyCode === 37) {
            block.style.left = block.offsetLeft - 10 + 'px';
            img.style.transform = 'scale(-1, 1)';
            img.style.transition = '0.5s';
        } else if (event.keyCode === 39) {
            block.style.left = block.offsetLeft + 10 + 'px';
            img.style.transform = 'scale(1)';
            img.style.transition = '0.5s';
            //right
        } else if (event.keyCode === 32 && !event.ctrlKey && !event.repeat) {
            block.style.top = block.offsetTop - 70 + 'px';
            img.style.transition = '2s';
            setTimeout(() => block.style.top = block.offsetTop + 70 + 'px', 400);
            //space
        }

        if (!isBlockInWindow()) {
            return;
        }
    }

    function isBlockInWindow() {

        if (block.offsetLeft <= 0) {
            block.style.left = 1 + 'px';
            return false;
        }

        if (block.offsetTop <= 0) {
            block.style.top = 1 + 'px';
            return false;
        }
        if (block.offsetLeft + block.offsetWidth >= window.innerWidth) {
            block.style.left = window.innerWidth - block.offsetWidth - 1  + 'px';
            return false;
        }
        if (block.offsetTop + block.offsetHeight >= window.innerHeight) {
            block.style.top = window.innerHeight - block.offsetHeight - 1  + 'px';
            return false;
        }

        return true;
    }

});



