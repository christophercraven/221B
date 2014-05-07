/* ccSlider.js beta by Chris Craven February 21, 2014 */
$(document).ready(function(){
							 
	var $img = " ";
	var $txt = " ";
	var $i = 0;
	//** Get the images loaded into the page **//
	$('#slider a').each(function( index ){
			$i++;  
		$img = $( this ).attr('href');
		$txt = $(this).text();
		
		if ($img==$(this).attr('href')) {
			$(this).before('<img src=\"'+$img+'\" style=\"width: 100%;\">');
			$(this).after('<a href=\"#\" class="button">&#x25BA;</a>');
			$(this).css({'margin-top':'-20.5em'});
			
		};
		//console.log( index + ": " + $('#slider li').html());
	});

	/** Style the list and their links **/
	var $css = $('#slider').css({
		'display':'block','position':'relative',
		'width':'100%',
		'z-index':'0',
		'margin-left':'-10',
		'padding-left':'0',
		'list-style-type':'none'
		});
	/** Initialize the slider by hiding all the images except one **/	
	var $max = $i;
	$($('#slider li').get().reverse()).each(function( index ){
				 if (($i-1)!=index) {$(this).css('display','none');
				 console.log(($i-1)+" index: "+index);
		   }
	});
	/** Not in use **/
	function hideMe(){
	$('#slider li').each(function( index ){
			   if (($i-1)!=index) {
			   	  $(this).slideUp();
			   	  console.log(($i-1)+" "+index);
			   }
	});
	}
	/* Slider button operation */
	if ($i==$max) $i=1;
	$('.button').click(function() {
	 var $size = $('#slider li:nth-of-type('+$i+')').css('height');
	  //var frame = $('#slider li:nth-of-type('+$i+')');						  
	  //var frame = '#slider li:nth-of-type';
	 //$('#slider li:nth-of-type('+$i+')').fadeOut(500);
	  //$('#slider li:nth-of-type('+$i+')').css('opacity','0');
	 $('#slider li:nth-of-type('+$i+')').css('display','none');
	  $i++;
	  if ($i>$max) 
	  	 $i=1;
	  //hideMe();
	  //} else {
	   // $('#slider li:nth-of-type('+($i)+')').css('opacity','1');
	  $('#slider li:nth-of-type('+$i+')').fadeIn(120);
	  $('#slider li:nth-of-type('+$i+')').slideDown(600);
	 // $('#slider li:nth-of-type('+($i-1)+')').css('display','none');
	  console.log(($i)+" $i $f: "+$size); 
	  //}
	  
	});
								  	
		
	//$css = $('#slider a').css('margin-top');
	console.log($i+": $i "+$max+": $max initialized.");
	
});