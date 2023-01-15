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

//ARRAYS FOR EACH ANIMATION SUBSET
var idle_array = [frame_00, frame_01, frame_02, frame_03];
var hat_on_array = [frame_04, frame_05, frame_06, frame_07];
var idle_hat_array = [frame_08, frame_09, frame_10, frame_11];
var hat_off_array = [frame_12, frame_13, frame_14, frame_15];

//THIS CONSTRUCT GROUPS ANIMATION SUBSETS WITH A DEFAULT WEIGHT # (WEIGHTING RANGES 0 - 1)
//THE RESULTING "STATES" WILL FEED THE STATE MACHINE
class state {
	constructor(frames_reference, weight_reference) {
		this.frames = frames_reference;
		this.weight = weight_reference;
	}
}

//INSTANTIATE ANIMATION STATES!
var state_idle = new state (idle_array, 1);
var state_hat_on = new state (hat_on_array, 1);
var state_idle_hat = new state (idle_hat_array, 1);
var state_hat_off = new state (hat_off_array, 1);

//DEFINE SETS OF ANIMATIONS (A SET IS THE TOTALITY OF INTANTIATED ANIM SUBSETS (STATES) FOR A GIVEN IMG ID)
var set_00 = [state_idle, state_hat_on, state_idle_hat, state_hat_off];

//BUILD THE ANIMATION!
//COMPONENTS OF EACH ANIMATION: IMG ID, ANIM SET, INITIAL STATE (ANIM SET[0]), REVERSAL BOOLEAN (ANIM PLAY DIRECTION)
class animStruct {
	constructor(img_id_reference, set_reference, reversal_boolean_reference) {
		this.img_id = img_id_reference;
		this.set = set_reference;
		this.current_state = 0;
		this.reversal_boolean = reversal_boolean_reference;
		
		if(!this.reversal_boolean) {this.current_frame = 0;}
		else {this.current_frame = this.set[this.current_state].frames.length - 1;}
		this.img_id.src = this.set[this.current_state].frames[this.current_frame];
	}
}

//INSTANTIATE ANIMATIONS, RUN THEM THROUGH THE CONTROLLER USING SETINTERVAL. SECOND VALUE IS FRAMERATE
var anim_00 = new animStruct(anim_img_id_00, set_00, true);
var t_00 = setInterval(function(){animController.updateAnim(anim_00)}, 600);


//FRAME-BY-FRAME HANDLER, STATE SWITCHER
class animController {
	static updateAnim(anim_reference) {
		if (anim_reference.img_id == null) {return;}
		if (!anim_reference.reversal_boolean) {this.#updateForward(anim_reference);}
		else {this.#updateReverse(anim_reference);}
	}
	
	static #updateForward (anim) {
		anim.current_frame++;
		if (anim.current_frame >= anim.set[anim.current_state].frames.length) {
			stateMachine.stateDeterminer();
			anim.current_frame = 0;
		}
		anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
		console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
	}
	
	static #updateReverse (anim) {
		anim.current_frame--;
		if (anim.current_frame < 0) {
			stateMachine.stateDeterminer();
			anim.current_frame = anim.set[anim.current_state].frames.length - 1;
		}
		anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
		console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
	}
}


class stateMachine {
	static stateDeterminer () {console.log("STATE MACHINE TIME!");}
}