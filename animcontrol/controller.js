//ANIMATION CONTROLLER DEMO
//RARE HAT VFT VERSION
//MNO

//DATA.JS
var anim_img_id_00 = document.getElementById('test-anim');

var frame_00 = 'testframes/idle-1.png';
var frame_01 = 'testframes/idle-2.png';
var frame_02 = 'testframes/idle-3.png';
var frame_03 = 'testframes/idle-4.png';

var frame_04 = 'testframes/hat-on-1.png';
var frame_05 = 'testframes/hat-on-2.png';
var frame_06 = 'testframes/hat-on-3.png';
var frame_07 = 'testframes/hat-on-4.png';

var frame_08 = 'testframes/idle-hat-1.png';
var frame_09 = 'testframes/idle-hat-2.png';
var frame_10 = 'testframes/idle-hat-3.png';
var frame_11 = 'testframes/idle-hat-4.png';

var frame_12 = 'testframes/hat-off-1.png';
var frame_13 = 'testframes/hat-off-2.png';
var frame_14 = 'testframes/hat-off-3.png';
var frame_15 = 'testframes/hat-off-4.png';

//ARRAYS FOR EACH SET OF FRAMES
var idle_array = [frame_00, frame_01, frame_02, frame_03];
var hat_on_array = [frame_04, frame_05, frame_06, frame_07];
var idle_hat_array = [frame_08, frame_09, frame_10, frame_11];
var hat_off_array = [frame_12, frame_13, frame_14, frame_15];

var state_id_00 = idle_array;
var state_id_01 = hat_on_array;
var state_id_02 = idle_hat_array;
var state_id_03 = hat_off_array;

//nextState (class)
class nextState {
	constructor(state_id, weight) {
		this.state_id = state_id;
		this.weight = weight;
	}
}

var next_is_idle = new nextState (idle_array, 1);
var next_is_hat_on = new nextState (hat_on_array, 1);
var next_is_idle_hat = new nextState (idle_hat_array, 1);
var next_is_hat_off = new nextState (hat_off_array, 1);

//exitProtocol (array)
var exit_protocol_00 = [next_is_hat_on, next_is_idle_hat];
var exit_protocol_00 = [next_is_hat_off, next_is_idle];

/*
//animState (class)
class animState () {
	constructor (state_id, frame_array, exit_protocol) {
		//???
	}
}

//animStruct (class)
class animStruct() {
	constuctor(img_id, initial_animState) {
		//sets current_frame to 0?
	}
}

//stateMachine (class)
class stateMachine () {
	//7.1. create function for determining new states
	//7.2. pass in animStruct
	//7.3. chooses a new state based on exitProtocol and Math.random()
	//7.4. after choosing a new state, update current_state for animStruct
}

function updateAnim() {
	//8.1. pass in animStruct
	//8.2. uses current_state to update current frames
	//8.3. when current_state finishes, ask stateMachine for a new current_state
}
*/

//NECROMANCY
class animStruct {
	constructor(img_id, frames, update_freq) {
		this.img_id = img_id;
		this.frames = frames;
		this.update_freq = update_freq;
		this.current_frame = 0;
    }
}

var freq_00 = 100;
var anim_0 = new animStruct(anim_img_id_00, idle_array, freq_00);
var t_0 = setInterval(function(){updateAnim(anim_0)}, anim_0.update_freq);


function updateAnim(anim) {
	if (anim.img_id == null) return;
	anim.img_id.src = anim.frames[anim.current_frame];
	anim.current_frame++;
	if (anim.current_frame >= anim.frames.length) {anim.current_frame = 0;}
}