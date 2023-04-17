    function doAnimations(elems) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';
        elems.each(function () {
            var $this = jQuery(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    //Variables on page load
    var $immortalCarousel = jQuery('.animate_text'),
        $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
    //Initialize carousel
    $immortalCarousel.carousel();
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
    //Other slides to be animated on carousel slide event
    $immortalCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = jQuery(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });
// custom javascript
var $toosweb = jQuery.noConflict();

//nav menu
     $toosweb('#navigation ul li.menu-item-has-children').addClass('dropdown');
     $toosweb('#navigation ul li.menu-item-has-children').children('ul').addClass('dropdown-menu');
     $toosweb('#navigation ul li.menu-item-has-children > a').addClass('dropdown-toggle');
     $toosweb('#navigation ul li.menu-item-has-children > a').attr('data-toggle','dropdown');
     $toosweb('#navigation ul li.menu-item-has-children > a').append('<span class="caret">');
     $toosweb('#navigation ul.navbar-nav > li:first').addClass('active');

$toosweb(document).ready(function(){
    
    //add class img-responsive
            $toosweb('img').addClass('img-responsive');

$toosweb("#preload").fadeOut("slow");
      
    
    //mega-menu    
            window.prettyPrint && prettyPrint()
            $toosweb(document).on('click', '.yamm .dropdown-menu', function(e) {
                e.stopPropagation()
            });
    
   

         //toggle-nav
       $toosweb('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$toosweb(this).parent().siblings().removeClass('open');
		$toosweb(this).parent().toggleClass('open');
	});
    
    
    //serch clicked to large
        $toosweb('#search-form #search-text').on('click', function() {
            $toosweb(this).css({
                'width': '180px',
                'transition': 'all .3s',
                'webkit-transition': 'all .3s'
            });
        });
        $toosweb('#search-form #search-text').on('blur', function() {
            $toosweb(this).css({
                'width': '150px'
            });
        });
    
    
    //navfix
        var navheight = $toosweb('#navigation').height();
        $toosweb('#navigation').wrap('<div class="parent-nav">');
        $toosweb('.parent-nav').css({
            'width': '100%',
            'min-height': navheight
        });
    
        $toosweb(window).scroll(function() {
            var h = $toosweb('#intro-bar').height();
            if ($toosweb(this).scrollTop() > h) {
                $toosweb('#navigation').addClass('fixnav');

            } else {
                $toosweb('#navigation').removeClass('fixnav');
            }
        });
    
    //thumb slider
     $toosweb("#owl-demo").owlCarousel({
        autoPlay: 3000,
		 navigation: true,
        items : 4,
         pagination : false,
		 slideSpeed : 800,
          paginationSpeed : 800,
        stopOnHover : true,
  
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
      });
         
        //underline hover top-menu
      $toosweb('#navbar > li > a').addClass('hvr-underline-from-right');
    
        //active first-child slide 
           $toosweb('#top-slider .carousel-indicators li:first').addClass('active');
		   $toosweb('#top-slider .carousel-inner div:first').addClass('active');
		   
    //scroll animation plugin

           function onScrollInit( items, trigger ) {
               items.each( function() {
               var osElement = $toosweb(this),
                   osAnimationClass = osElement.attr('data-os-animation'),
                   osAnimationDelay = osElement.attr('data-os-animation-delay');

                   osElement.css({
                       '-webkit-animation-delay':  osAnimationDelay,
                       '-moz-animation-delay':     osAnimationDelay,
                       'animation-delay':          osAnimationDelay
                   });

                   var osTrigger = ( trigger ) ? trigger : osElement;

                   osTrigger.waypoint(function() {
                       osElement.addClass('animated').addClass(osAnimationClass);
                       },{
                           triggerOnce: true,
                           offset: '90%'
                   });
               });
           }

           onScrollInit( $toosweb('.os-animation') );
           onScrollInit( $toosweb('.staggered-animation'), $toosweb('.staggered-animation-container') );
    
    
    //remove empty text for slider-bootstrap
    $toosweb('.carousel-caption h3 a').each(function(){
        var temp = $toosweb(this).html();
       if((temp.length)<3) {
           $toosweb(this).parent('h3').remove();  
       }
        
    });
 
/*
=clicked botton go to up
---------------------------------------------*/
$toosweb(window).scroll(function(){
  if ($toosweb(this).scrollTop() > 150) {
    $toosweb('#go-top').fadeIn();
   } else {
    $toosweb('#go-top').fadeOut();
}
});
	
//Click event to scroll to top
$toosweb('#go-top').click(function(){
$toosweb('html, body').animate({scrollTop : 0},800);
return false;
});   
    
 //add wordpress gallery
    $toosweb('.gallery .gallery-item a').unwrap();
   $toosweb('.gallery .gallery-item a').addClass('lightbox_gallery');

     $toosweb('.gallery .gallery-item a').each(function(){
    var $src_lightbox = $toosweb(this).children('img').attr('src');
    $toosweb(this).attr('href',$src_lightbox);
    });
    
    $toosweb('.gallery').children('br').remove();

    $toosweb('.lightbox_gallery').viewbox({
    setTitle: false,
    margin: 20,
    resizeDuration: 700,
    openDuration: 400,
    closeDuration: 400,
    closeButton: true,
    navButtons: true,
    closeOnSideClick: true,
    nextOnContentClick: false,
    useGestures: true
  });   
   
$toosweb('#link-box .wpcf7-form textarea').parents('p').addClass('select_full');

//filter

    //Simple filter controls
    $toosweb('.simplefilter li').click(function() {
        $toosweb('.simplefilter li').removeClass('active');
        $toosweb(this).addClass('active');
    });
    //Multifilter controls
    $toosweb('.multifilter li').click(function() {
        $toosweb(this).toggleClass('active');
    });
    //Shuffle control
    $toosweb('.shuffle-btn').click(function() {
        $toosweb('.sort-btn').removeClass('active');
    });
    //Sort controls
    $toosweb('.sort-btn').click(function() {
        $toosweb('.sort-btn').removeClass('active');
        $toosweb(this).addClass('active');
    });
	$toosweb('.filtr-container').filterizr();


  
    
  //end  
 }); 