(function(){
	if (window.top !== window.self) window.top.location.replace(window.self.location.href); // Prevent iframing, simple!

	$('#navbar').scrollspy();
	
	$(document).ready(function(){
		$(".nav.scroll-link li a[href^='#'], a.scroll").on('click', function(e) {
		   e.preventDefault();
		   $('html, body').stop(true).animate({ scrollTop: $(this.hash).offset().top }, 750, 'easeOutQuint');
		});
	});
	
	$('.option-set a').unbind().click(function(e){
   		//close_overlay();
   		$('.nav.option-set').removeAttr("style");
	});
	$('.element').mouseenter(function(){
		$text = $(this).find('.portfolio-text');
		$img = $(this).find('.portfolio-image');
		var top_pos = $(this).height() - $text.height();
		$text.stop().animate({top:top_pos},250);
		$img.stop().animate({opacity: 0.4},250);
	}).mouseleave(function(){
		$text = $(this).find('.portfolio-text');
		$text.stop().animate({top:$(this).height()+'px'},250);
		$img.stop().animate({opacity: 1.0},250);
	});

	$('.contact-row input, .contact-row textarea').focus(function(){
		$('.contact-row').removeClass('active-row');
		$(this).closest('.contact-row').addClass('active-row');
	}).focusout(function(){
		$(this).closest('.contact-row').removeClass('active-row');
	});

    // isotope
    $(window).bind("resize", function() {
    	scale_elements();
        var cw=$('#container-isotope').width();
        var cw3=parseInt(cw/4, 10);
        if($(window).width() <= 930){
        	cw3=parseInt(cw/3, 10);
        }
        if($(window).width() <= 800){
			cw3=parseInt(cw/2, 10);
        }
        if($(window).width() <= 450){
			cw3=parseInt(cw, 10);
        }
        $('#container-isotope').isotope({
            masonry: {
                columnWidth: cw3
            }
        });
        $('.nav.option-set').removeAttr("style");
    }).resize();
	$(window).load(function(){
		$(window).resize();
	});
    var $optionSets = $('.option-isotope'),
		$optionLinks = $optionSets.find('a'),
		$container = $('#container-isotope');
	$optionLinks.click(function(e){
		e.preventDefault();
		$clicked   = $(this);
		var current_select = $clicked.hasClass("selected"); 
		var $this = $(this);

		if ( $this.hasClass('selected') )
		return false;

		var $optionSet = $this.parents('.option-isotope');
		$optionSet.find('.selected').removeClass('selected');
		$this.addClass('selected');

		var options = {},
		key = $optionSet.attr('data-option-key'),
		value = $this.attr('data-option-value');
		
		value = (value === 'false') ? false : value;
		options[ key ] = value;
		if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' )
			changeLayoutMode( $this, options );
		else
			$container.isotope( options );

		return false;
	});

	// Responsive nav
	$('.small-nav-toggle').click(function(e){
		e.preventDefault();
		$('.nav.option-set').slideToggle(150);
	})

	function scale_elements(){
		$('.element').each(function(){
			$(this).css('height',$(this).width()+'px');
		});
	}
	
	var ie = (function(){
		var undef,
			v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');

		while (
			div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
			all[0]
		);

		return v > 4 ? v : undef;

	}());

})();

   
