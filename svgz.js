//HARMONIC OSCILLATOR MENU HTML & SVG STORAGE SCRIPT
//ANZOL

var logo_codeblock =
		  '<svg id="logo" width="100" height="100">' +
		    '<desc>HARMONIC OSCILLATOR Company Logo // Hand-coded by ANZOL</desc>' +
			//CUBE PT.1
			'<polygon points="0,30 50,0 50,100 0,80" fill="#AA3090" stroke="none" stroke-width="1"/>' +
			//SINE WAVE
		    '<path d="M-1,50 C0,90 10,90 10,50 M10,50 C 10,20 20,20 20,50 M20,50 C20,80 30,80 30,50 M30,50 C30,30 40,30 40,50 M40,50 C40,60 50,60 50,50;" fill="none" stroke="#000" stroke-width="1">' +
			  '<animate attributeName="d" values="' +
			  'M-20,50 C-20,100 -10,100 -10,50 M-10,50 C-10,0 -1,0 -1,50 M-1,50 C0,90 10,90 10,50 M10,50 C 10,20 20,20 20,50 M20,50 C20,80 30,80 30,50 M30,50 C30,30 40,30 40,50 M40,50 C40,60 50,60 50,50;' +
			  'M-10,50 C-10,0 -1,0 -1,50 M-1,50 C0,90 10,90 10,50 M10,50 C 10,20 20,20 20,50 M20,50 C20,80 30,80 30,50 M30,50 C30,30 40,30 40,50 M40,50 C40,60 50,60 50,50 M50,50 C50,40 60,40 60,50;"' +
			  'dur="0.5s" repeatCount="indefinite"/>' +
			'</path>' +
			//CUBE PT.2
			'<polygon points="50,0 100,30 100,80 50,100" fill="#000" stroke="#AA3090" stroke-width="1"/>' +
			'<path d="M50,0 50,100;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
			//EYE
			'<ellipse cx="70" cy="53" rx="4" ry="10" fill="#AA3090" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="ry" values="10;10;0;10" keytimes="0;0.8;0.9;1" dur="2s" repeatCount="indefinite"/>' +
			'</ellipse>' +
			'<ellipse cx="82" cy="40" rx="20" ry="10" transform="rotate(10)" fill="none" stroke="#AA3090" stroke-width="1">' +
			  '<animate attributeName="ry" values="10;10;0;10" keytimes="0;0.8;0.9;1" dur="2s" repeatCount="indefinite"/>' +
			'</ellipse>'
		  '</svg>';

var social_1_codeblock =
		'<svg width="50px" height="50px">' +
		  '<desc>Bluesky icon // Hand-coded by ANZOL</desc>' +
		  '<polygon points="2,5 25,25 48,5 45,28 35,30 43,32 30,45 25,40 20,45 7,32 15,30 5,28" fill="#AA3090"/>' +
		'</svg>';

var social_2_codeblock =
		    '<svg width="50px" height="50px">' +
			  '<desc>Email icon // Hand-coded by ANZOL</desc>' +
			  '<polygon points="0,10 25,25 50,10" fill="#AA3090"/>' +
			  '<polygon points="1,13 19,25 1,39" fill="#AA3090"/>' +
			  '<polygon points="49,13 31,25 49,39" fill="#AA3090"/>' +
			  '<polygon points="2,40 20,26 25,29 30,26 48,40" fill="#AA3090"/>' +
			'</svg>';

var menu_nav_codeblock =
			  '<svg width="50" height="50">' +
			    '<desc>Menu Button // Hand-coded by ANZOL</desc>' +
			    '<rect width="50" height="50" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			    '<path d="M6,12 L44,12;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M6,12 L44,12;" dur="1s" repeatCount="1"/>' +
				'</path>' +
				'<path d="M6,25 L44,25;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M6,25 L44,25;" dur="0.75s" repeatCount="1"/>' +
				'</path>' +
				'<path d="M6,38 L44,38;" fill="none" stroke="#AA3090" stroke-width="1">' +
				'<animate attributeName="d" values="M0,0 L0,0; M6,38 L44,38;" dur="0.5s" repeatCount="1"/>' +
				'</path>' +
			  '</svg>';

var dlog_nav_codeblock =
	'<svg width="50" height="50">' +
	  '<desc> Devlog Menu Button // Hand-coded by ANZOL</desc>' +
      '<rect width="50" height="30" y="10" fill="none" stroke="#AA3090" stroke-width="1"/>' +
      '<path d="M6,17 L6,32 17,32;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M20,18 L30,18 30,32 20,32 20,18;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M44,18 L34,18 34,32 44,32 44,25 38,25;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
    '</svg>';

var spam_buza_codeblock =
'<svg width="100" height="100">' +
  '<desc>Buza Drawing!!! // Hand-coded by ANZOL</desc>' +
  //BALLOON STRING
  '<path d="M50,70 L45,73 55,77 50,80 45,83 55,87 50,90 45,93 55,97 50,100;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
  //EARS (LINES)
  '<circle cx="22" cy="25" r="13" fill="#000" stroke="#AA3090" stroke-width="1"/>' +
  '<circle cx="78" cy="25" r="13" fill="#000" stroke="#AA3090" stroke-width="1"/>' +
  //HEAD
  '<ellipse cx="50" cy="50" rx="40" ry="28" fill="#000" stroke="#AA3090" stroke-width="1"/>' +
  //EARS (SUBTRACT)
  '<circle cx="22" cy="25" r="12" fill="#000" stroke="#none" stroke-width="1"/>' +
  '<circle cx="78" cy="25" r="12" fill="#000" stroke="#none" stroke-width="1"/>' +
  //SMILE
  '<path d="M15,50 C15,67 50,67 50,47 M50,47 C 50,67 85,67 85,50;" fill="none" stroke="#AA3090" stroke-width="1"/>' +
  //NOSEY
  '<ellipse cx="50" cy="40" rx="12" ry="7" fill="#3D0066" stroke="#AA3090" stroke-width="1"/>' +
  //EYES
  '<path d="M22,38 L35,35;" fill="none" stroke="#AA3090" stroke-width="4"/>' +
  '<path d="M65,35 L78,38;" fill="none" stroke="#AA3090" stroke-width="4"/>' +
'</svg>';

var ptBR_nav_codeblock =
	'<svg width="50" height="50">' +
	  '<desc>Brazil Flag: Portuguese language option // Hand-coded by ANZOL</desc>' +
      '<rect width="50" height="30" y="10" fill="none" stroke="#AA3090" stroke-width="1"/>' +
      '<polygon points="4,25 25,14 46,25 25,36" fill="none" stroke="#AA3090" stroke-width="1"/>' +
      '<circle cx="25" cy="25" r="7" fill="none" stroke="#AA3090" stroke-width="1"/>' +
    '</svg>';

var enUS_nav_codeblock =
    '<svg width="50" height="50">' +
	  '<desc>U.S. Flag: English language option // Hand-coded by ANZOL</desc>' +
      '<rect width="50" height="30" y="10" fill="none" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M0,25 L20,25 20,10" fill="none" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M20,15 L50,15 M20,20 L50,20 M20,25 L50,25 M0,30 L50,30 M0,35 L50,35" fill="none" stroke="#AA3090" stroke-width="1"/>' +
	  '<circle cx="6" cy="15" r="2" fill="none" stroke="#AA3090" stroke-width="1"/>' +
	  '<circle cx="14" cy="20" r="2" fill="none" stroke="#AA3090" stroke-width="1"/>' +
    '</svg>';

var esES_nav_codeblock =
	'<svg width="50" height="50">' +
	  '<desc>Spain Flag: Spanish language option // Hand-coded by ANZOL</desc>' +
      '<rect width="50" height="30" y="10" fill="none" stroke="#AA3090" stroke-width="1"/>' +
      '<path d="M0,16 L50,16" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M0,34 L50,34" stroke="#AA3090" stroke-width="1"/>' +
	  '<rect width="8" height="8" x="8" y="22" fill="none" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M12,22 L12,30 M8,26 L16,26" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M4,22 L4,30 M20,22 L20,30" stroke="#AA3090" stroke-width="1"/>' +
	  '<path d="M10,22 L8,20 12,19 16,20 14,22" fill="none" stroke="#AA3090" stroke-width="1"/>' +
    '</svg>';

var side_1_codeblock =
			'<svg width="50" height="50">' +
		    '<desc>A D6 Die on #1 // Hand-coded by ANZOL</desc>' +
		    '<rect width="50" height="50" fill="#000" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="25" cy="25" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '</svg>';

var side_2_codeblock =
			'<svg width="50" height="50">' +
		    '<desc>A D6 Die on #2 // Hand-coded by ANZOL</desc>' +
		    '<rect width="50" height="50" fill="#000" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="12" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="38" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '</svg>';

var side_3_codeblock =
			'<svg width="50" height="50">' +
		    '<desc>A D6 Die on #3 // Hand-coded by ANZOL</desc>' +
		    '<rect width="50" height="50" fill="#000" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="12" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="25" cy="25" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="38" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '</svg>';

var side_4_codeblock =
			'<svg width="50" height="50">' +
		    '<desc>A D6 Die on #4 // Hand-coded by ANZOL</desc>' +
		    '<rect width="50" height="50" fill="#000" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="12" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="38" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="12" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="38" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '</svg>';

var side_5_codeblock =
			'<svg width="50" height="50">' +
		    '<desc>A D6 Die on #5 // Hand-coded by ANZOL</desc>' +
		    '<rect width="50" height="50" fill="#000" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="12" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="38" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="25" cy="25" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="12" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="38" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '</svg>';

var side_6_codeblock =
			'<svg width="50" height="50">' +
		    '<desc>A D6 Die on #6 // Hand-coded by ANZOL</desc>' +
		    '<rect width="50" height="50" fill="#000" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="12" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="12" cy="25" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="12" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '<circle cx="38" cy="12" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="38" cy="25" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
			'<circle cx="38" cy="38" r="5" fill="none" stroke-width="1" stroke="#AA3090"/>' +
		    '</svg>';

var default_osc_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="100" height="50">' +
				    '<desc>HARMONIC OSCILLATOR Vector Arts // Hand-coded by ANZOL</desc>' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M0,0 L50,50; M0,0 L100,50; M0,0 L50,50;" dur="2s" repeatCount="indefinite"/>' +
		            '</path>' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M0,50 L100,0; M0,50 L50,0; M0,50 L100,0;" dur="2s" repeatCount="indefinite"/>' +
		            '</path>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var default_osc_wide_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="300" height="50">' +
				    '<desc>HARMONIC OSCILLATOR Vector Arts // Hand-coded by ANZOL</desc>' +
					'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
                    '<animate attributeName="d" values="M300,0 L300,0; M0,0 L300,50; M0,50 L0,50;" dur="2s" repeatCount="indefinite"/>' +
                    '</polygon>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var rings_osc_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg class="rings" width="100" height="50">' +
				    '<desc>HARMONIC OSCILLATOR Vector Arts // Hand-coded by ANZOL</desc>' +
		            '<circle cx="50" cy="25" r="400" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="400; 0; 300;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="50" cy="25" r="300" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="300; 0; 200;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="25" r="200" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="200; 0; 100;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="25" r="110" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="110; 0; 90;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="50" cy="25" r="100" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="100; 0; 80;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="25" r="90" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="90; 0; 70;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>LOADED DICE</h2>';

var rings_osc_wide_codeblock =
				'<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg class="rings" width="300" height="50">' +
				    '<desc>HARMONIC OSCILLATOR Vector Arts // Hand-coded by ANZOL</desc>' +
		            '<circle cx="150" cy="25" r="500" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="500; 0; 400;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="150" cy="25" r="400" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="400; 0; 300;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="150" cy="25" r="300" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="300; 0; 200;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="150" cy="25" r="30" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="30; 0; 30;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		            '<circle cx="150" cy="25" r="20" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="20; 0; 20;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="150" cy="25" r="10" fill="none" stroke="#AA3090" stroke-width="1">' +
					'<animate attributeName="r" values="10; 0; 10;" dur="5s" repeatCount="indefinite"/>' +
					'</circle>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var birds_osc_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="100" height="50">' +
				    '<desc>HARMONIC OSCILLATOR Vector Arts // Hand-coded by ANZOL</desc>' +
				    '<!--CLOUDS ON LEFT-->' +
					'<circle cx="0" cy="25" r="20" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="-20; 0; 20; 40;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-30; 0; -100; -100;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 20; 100; 50;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="0" cy="25" r="15" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="-15; 30; 40; 20;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-20; 0; -10; -40;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 10; 20; 0;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<!--CLOUDS ON RIGHT-->' +
					'<circle cx="110" cy="50" r="20" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="160; 110; 70; 60;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="70; 50; 40; 30;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 20; 10; 0;" dur="10s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="80" cy="50" r="5" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="110; 80; 60; 65;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="60; 55; 35; 30;" dur="10s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="10; 20; 10; 0;" dur="10s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<!--BIRDS-->' +
					'<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M50,25 L55,30 L60,25 L55,28 L50,25; M50,28 L55,33 L60,28 L55,31 L50,28; M50,30 L55,28 L60,30 L55,26 L50,30; M50,28 L55,27 L60,28 L55,24 L50,28; M50,25 L55,30 L60,25 L55,28 L50,25;" dur="1s" repeatCount="indefinite"/>' +
		            '</path>' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M15,10 L30,20 L45,10 L30,15 L15,10; M15,15 L30,25 L45,15 L30,20 L15,15; M15,20 L30,20 L45,20 L30,15 L15,20; M15,15 L30,16 L45,15 L30,10 L15,15; M15,10 L30,20 L45,10 L30,15 L15,10;" dur="1.5s" repeatCount="indefinite"/>' +
		            '</path>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

var birds_osc_wide_codeblock =
	            '<h1>HARMONIC OSCILLATOR</h1>' +
		        '<div>' +
		          '<svg width="300" height="50">' +
				    '<desc>HARMONIC OSCILLATOR Vector Arts // Hand-coded by ANZOL</desc>' +
				    '<!--BIRDS-->' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M140,10 L150,20 L160,10 L150,15 L140,10; M140,15 L150,25 L160,15 L150,20 L140,15; M140,25 L150,23 L160,25 L150,20 L140,25; M140,20 L150,18 L160,20 L150,15 L140,20; M140,10 L150,20 L160,10 L150,15 L140,10;" dur="1s" repeatCount="indefinite"/>' +
		            '</path>' +
		            '<path d="" fill="none" stroke="#AA3090" stroke-width="1">' +
		            '<animate attributeName="d" values="M115,20 L125,30 L135,20 L125,25 L115,20; M115,25 L125,35 L135,25 L125,30 L115,25; M115,35 L125,33 L135,35 L125,30 L115,35; M115,30 L125,28 L135,30 L125,25 L115,30; M115,20 L125,30 L135,20 L125,25 L115,20;" dur="1.5s" repeatCount="indefinite"/>' +
		            '</path>' +
					'<!--CLOUDS ON LEFT-->' +
					'<circle cx="100" cy="50" r="10" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="100; 0; 100;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 40; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="10; 20; 10;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="80" cy="50" r="15" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="80; -20; 80;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 30; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="15; 30; 15;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="50" cy="50" r="30" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="50; -50; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 90; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="30; 50; 30;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="0" cy="50" r="20" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="0; -20; 0;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="50; 0; 50;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="20; 30; 20;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="40" cy="-20" r="40" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="40; 0; 40;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-30; -60; -30;" dur="20s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="40; 50; 40;" dur="20s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<!--CLOUDS ON RIGHT-->' +
					'<circle cx="220" cy="50" r="10" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="220; 340; 220" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="10; 50; 10;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="300" cy="-10" r="40" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="300; 250; 300;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="-10; -70; -10;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="40; 50; 40;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
					'<circle cx="270" cy="50" r="30" fill="#300020" stroke="" stroke-width="">' +
					'<animate attributeName="cx" values="260; 360; 260;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="cy" values="60; 10; 60;" dur="15s" repeatCount="indefinite"/>' +
					'<animate attributeName="r" values="30; 40; 30;" dur="15s" repeatCount="indefinite"/>' +
					'</circle>' +
		          '</svg>' +
		        '</div>' +
	            '<h2>Underground Arts</h2>';

	//ID->SVG FUNCTIONALITY
	
	var logo = document.getElementById('logo');
	var menu_nav = document.getElementById('menu-nav');
	var dlog_nav = document.getElementById('dlog-nav');
	var ptBR_nav = document.getElementById('ptBR-nav');
	var enUS_nav = document.getElementById('enUS-nav');
	var social_1 = document.getElementById('social-1');
	var social_2 = document.getElementById('social-2');
	var spam_buza = document.getElementById('spam-buza');
	
	var default_osc = document.getElementById('default-osc')
	var rings_osc = document.getElementById('rings-osc')
	var birds_osc = document.getElementById('birds-osc')
	
	var default_osc_wide = document.getElementById('default-osc-wide')
    var rings_osc_wide = document.getElementById('rings-osc-wide')
	var birds_osc_wide = document.getElementById('birds-osc-wide')
	
	var svgs = [
	  logo, menu_nav, dlog_nav, ptBR_nav, enUS_nav,
	  social_1, social_2, spam_buza,
	  default_osc, rings_osc, birds_osc,
	  default_osc_wide, rings_osc_wide, birds_osc_wide
	  ];

	var codeblocks = [
	  logo_codeblock, menu_nav_codeblock, dlog_nav_codeblock, ptBR_nav_codeblock, enUS_nav_codeblock,
	  social_1_codeblock, social_2_codeblock, spam_buza_codeblock,
	  default_osc_codeblock, rings_osc_codeblock, birds_osc_codeblock,
	  default_osc_wide_codeblock, rings_osc_wide_codeblock, birds_osc_wide_codeblock
	  ];
	
	for(i=0; i < svgs.length; i++) {if (existingElement(svgs[i])) {svgs[i].innerHTML = codeblocks[i];}}
	
	//DICE INCORPORATOR
	
	var side_1_dice = document.getElementsByClassName('side-1');
	var side_2_dice = document.getElementsByClassName('side-2');
	var side_3_dice = document.getElementsByClassName('side-3');
	var side_4_dice = document.getElementsByClassName('side-4');
	var side_5_dice = document.getElementsByClassName('side-5');
	var side_6_dice = document.getElementsByClassName('side-6');
	
	for(i=0; i < side_1_dice.length; i++) {if(existingElement(side_1_dice)) {side_1_dice[i].innerHTML = side_1_codeblock;}}
	for(i=0; i < side_2_dice.length; i++) {if(existingElement(side_2_dice)) {side_2_dice[i].innerHTML = side_2_codeblock;}}
	for(i=0; i < side_3_dice.length; i++) {if(existingElement(side_3_dice)) {side_3_dice[i].innerHTML = side_3_codeblock;}}
	for(i=0; i < side_4_dice.length; i++) {if(existingElement(side_4_dice)) {side_4_dice[i].innerHTML = side_4_codeblock;}}
	for(i=0; i < side_5_dice.length; i++) {if(existingElement(side_5_dice)) {side_5_dice[i].innerHTML = side_5_codeblock;}}
	for(i=0; i < side_6_dice.length; i++) {if(existingElement(side_6_dice)) {side_6_dice[i].innerHTML = side_6_codeblock;}}

function existingElement(id_element) {
	if(id_element == null) return false;
	else return true;
}