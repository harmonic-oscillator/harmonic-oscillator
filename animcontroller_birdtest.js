//ANIMATION CONTROLLER SCRIPT
//MNO

class animStruct {
	constructor(img_id_reference, frames_reference, update_freq_reference) {
		this.img_id = img_id_reference;
		this.frames = frames_reference;
		this.update_freq = update_freq_reference;
		this.current_frame = 0;
  }
}
/*//DORMANT CODE
class animState {
	constructor(state_id_reference, state_update_freq_reference, reversal_boolean_reference) {
		this.state_id = state_id_reference;
		this.state_update_freq = state_update_freq_reference;
		this.reversal_boolean = reversal_boolean_reference;
	}
}*/

var anim_img_id_01 = document.getElementById('page_02_panel_01_anim');
var anim_img_id_02 = document.getElementById('page_02_panel_02_anim');

var frame_00X = 'assets/birdpages/page_02_panel_01_frame_00.png';
var frame_01X = 'assets/birdpages/page_02_panel_01_frame_01.png';
var frame_00 = 'assets/birdpages/page_02_panel_02_frame_00.png';
var frame_01 = 'assets/birdpages/page_02_panel_02_frame_01.png';
var frame_02 = 'assets/birdpages/page_02_panel_02_frame_02.png';
var frame_03 = 'assets/birdpages/page_02_panel_02_frame_03.png';
var frame_04 = 'assets/birdpages/page_02_panel_02_frame_04.png';
var frame_05 = 'assets/birdpages/page_02_panel_02_frame_05.png';
var frame_06 = 'assets/birdpages/page_02_panel_02_frame_06.png';
var frame_07 = 'assets/birdpages/page_02_panel_02_frame_07.png';
var frame_08 = 'assets/birdpages/page_02_panel_02_frame_08.png';
var frame_09 = 'assets/birdpages/page_02_panel_02_frame_09.png';
var frame_10 = 'assets/birdpages/page_02_panel_02_frame_10.png';
var frame_11 = 'assets/birdpages/page_02_panel_02_frame_11.png';

var frames_01 = [frame_00X, frame_01X];
var frames_02 = [frame_00, frame_01, frame_02, frame_03, frame_04, frame_05, frame_06, frame_07, frame_08, frame_09, frame_10, frame_11];

var freq_01 = 300;
var freq_02 = 100;

var anim_1 = new animStruct(anim_img_id_01, frames_01, freq_01);
var anim_2 = new animStruct(anim_img_id_02, frames_02, freq_02);

var t_1 = setInterval(function(){updateAnim(anim_1)}, anim_1.update_freq);
var t_2 = setInterval(function(){updateAnim(anim_2)}, anim_2.update_freq);

function updateAnim(anim) {
	if (anim.img_id == null) return;
	anim.img_id.src = anim.frames[anim.current_frame];
	anim.current_frame++;
	if (anim.current_frame >= anim.frames.length) {anim.current_frame = 0;}
}