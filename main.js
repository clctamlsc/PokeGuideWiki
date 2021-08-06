window.onload = main;

function main() {
	
	let bttns = document.querySelectorAll('.bttn');

	for (let bttn of bttns) {
		bttn.addEventListener('click', toggle);
	}

    function toggle(event) {
    	let status = event.target.innerHTML;
        let id = event.target.id;
        let block;
        if (id == 'blk1') {
    		block = document.querySelector('#gp1');
    	} else if (id == 'blk2') {
    		block = document.querySelector('#gp2');
    	} else if (id == 'blk3') {
			block = document.querySelector('#gp3');
    	} else if (id == 'blk4') {
    		block = document.querySelector('#gp4');
    	} else {
    		block = document.querySelector('#gp5')
    	}
    	
    	if (status == 'Show') {
    		block.classList.toggle('Off');
    		event.target.innerHTML = 'Hide';
    	} else {
    		block.classList.toggle('Off');
    		event.target.innerHTML = 'Show';
    	}
    }

}