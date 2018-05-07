$(document).ready(function() {
	$('#fullpage').fullpage({
		menu: '#menu',
		verticalCentered: true,
		sectionsColor: ['#000000', '#000000'],
		navigation: true,
		navigationPosition: 'right',
		onLeave: function(index, nextIndex, direction){
			
			if(nextIndex == 1){
				$('.logo h1').css({"border": "1px solid #000", "color": "#000"});
			}
			else if(nextIndex == 2){
				$('.logo h1').css({"border": "1px solid #555", "color": "#555"});
			}
		}
	});
	$('.arrow').click(function(){
		$.fn.fullpage.moveSectionDown();
	});
	$('.more').click(function(){
		$.fn.fullpage.moveSectionUp();
	});
});
