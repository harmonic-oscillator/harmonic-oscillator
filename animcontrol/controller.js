//ANIMATION CONTROLLER DEMO
//RARE HAT VFT VERSION
//MNO

//THIS CONSTRUCT GROUPS ANIMATION SUBSETS WITH WEIGHTS FOR TRANSITIONING STATES (WEIGHTING RANGES 0 - 1)
class state {
	constructor(frames_reference, weighting_reference) {
		this.frames = frames_reference;
		this.weighting = weighting_reference;
	}
}

//INSTANTIATE ANIMATION STATES!
//THESE WILL FEED THE STATE MACHINE .................................
var state_idle = new state (idle_array, idle_state_weighting);
var state_hat_on = new state (hat_on_array, hat_on_state_weighting);
var state_idle_hat = new state (idle_hat_array, idle_hat_state_weighting);
var state_hat_off = new state (hat_off_array, hat_off_state_weighting);

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
		//SETS CURRENT SRC FRAME BASED ON REVERSAL BOOLEAN. FORWARD = FRAME 0, REVERSE = LAST FRAME
		if(!this.reversal_boolean) {this.current_frame = 0;}
		else {this.current_frame = this.set[this.current_state].frames.length - 1;}
		this.img_id.src = this.set[this.current_state].frames[this.current_frame];
	}
}
/* SETINTERVALS! */
//INSTANTIATE ANIMATIONS, RUN THEM THROUGH THE CONTROLLER USING SETINTERVAL. SECOND VALUE IS FRAMERATE
var anim_00 = new animStruct(anim_img_id_00, set_00, false);
var t_00 = setInterval(function(){animController.updateAnim(anim_00)},100);


//FRAME-BY-FRAME HANDLER, STATE SWITCHER
class animController {	//CHECKS FOR NULL VALUE, CHECKS FOR PLAY DIRECTION AND RUNS RESPECTIVE UPDATE LOOP
	static updateAnim(anim) {
		if (anim.img_id == null) {return;}
		if (!anim.reversal_boolean) {this.#updateForward(anim);}
		else {this.#updateReverse(anim);}
	}
	
	static #updateForward (anim) {
		anim.current_frame++;
		if (anim.current_frame >= anim.set[anim.current_state].frames.length) {
			anim.current_frame = 0;
			stateMachine.stateDeterminer(anim); //RUNS THE STATE MACHINE AT THE END OF EACH LOOP
		}
		anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
		console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
	}
	
	static #updateReverse (anim) {
		anim.current_frame--;
		if (anim.current_frame < 0) {
			anim.current_frame = anim.set[anim.current_state].frames.length - 1;
			stateMachine.stateDeterminer(anim); //RUNS THE STATE MACHINE AT THE END OF EACH LOOP
		}
		anim.img_id.src = anim.set[anim.current_state].frames[anim.current_frame];
		console.log("[" + anim.current_state + "] [" + anim.current_frame + "]");
	}
}

class stateMachine {
	static stateDeterminer (anim) {
		console.log("STATE MACHINE! [" + anim.current_state + "] [" + anim.current_frame + "]");
		var r = Math.random();
		console.log(r);
		//WEIGHTS ROUTINE
		//ADD UP ALL WEIGHTS (IN THIS CASE THEY WILL ALWAYS ADD TO 1)
		//IF R IS LESS THAN THE FIRST WEIGHT, CHOOSE THE FIRST WEIGHT
		//IF R IS GREATER THAN THE FIRST WEIGHT, SUBTRACT THAT WEIGHT FROM R
		//IF R IS LESS THAN THE SECOND WEIGHT, CHOOSE THE SECOND WEIGHT
		//AND SO ON
		for (let i = 0; i < anim.set[anim.current_state].weighting.length; i++) {
			if (r < anim.set[anim.current_state].weighting[i]) {
				anim.current_state = i;
				break;
			}
			else {r -= anim.set[anim.current_state].weighting[i];}
		}
		
	}
}