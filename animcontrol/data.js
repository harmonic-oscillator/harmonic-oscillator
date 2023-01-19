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

//LIKELIHOOD OF SWAPPING TO NEW STATE! TRANSITIONAL STATES WILL ALWAYS TRANSITION
//WEIGHTS SHOULD ALWAYS ADD UP TO 1
var idle_state_weighting = [0.9, 0.1, 0, 0];
var hat_on_state_weighting = [0, 0, 1, 0];
var idle_hat_state_weighting = [0, 0, 0.8, 0.2];
var hat_off_state_weighting = [1, 0, 0, 0];
