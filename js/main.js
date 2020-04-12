$(document).ready(function(){
  const hero = gsap.timeline();
  const about = new TimelineMax();
  const floater = new TimelineMax();
  const expedition = new TimelineMax();
  const leaders = new  TimelineMax();
  const mainLogo = $('#main-logo'); // document.getElementById('main-logo')
  const bannerText = $('#hero-content');
  const aboutHead = $('#head');
  const aboutText = $('.text');
  const leadersText =$('#expedition-content');
  const floaterBox = $('.floater');
  const floaterText = $('.floater-content');
  

  hero.from(mainLogo, {duration: 1, y: -300});
  hero.from(bannerText, {duration: 2, opacity: 0}); //, "-=1" for delay//


  const aboutController = new ScrollMagic.Controller();

  about
  .from('#head', 1, {opacity: 0, y: 100})
  .from('.text', 1, {autoAlpha: 0, x: -100, stagger: 0.5})
  .from($('.about-button'), 0.5, {scaleY:0, ease:Power3, transformOrigin: "top left"
  
  })

  let aboutScene = new ScrollMagic.Scene({
    triggerElement: '.about-us',
    triggerHook: 0.75,
    reverse:false
    
  })
  .setTween(about)
  // .addIndicators({name: "about"})
  .addTo(aboutController);


  const expeditionController = new ScrollMagic.Controller();

  expedition.from(leadersText, 1, {opacity: 0, y: 100, });

  let expeditionScene = new ScrollMagic.Scene({
    triggerElement: ".expedition",
    triggerHook: 0.2,
    reverse:false
  })
  .setTween(expedition)
  // .addIndicators({name: "expedition"})
  .addTo(expeditionController);

  const floaterController = new ScrollMagic.Controller();

  floater
  .from(floaterBox, {duration: 1, opacity: 0, y: 500, ease: "power1", stagger: 0.2})
  .from(floaterText, 1, {autoAlpha: 0, height: 0, transfomOrigin: "bottom", ease: "power1", stagger: 0.2})
  .from($('.floater-button'), 0.5, {scaleY:0, ease:Power3, transformOrigin: "top left"
  });

  let floaterScene = new ScrollMagic.Scene({
    triggerElement: ".floaters",
    triggerHook: 0.95,
    reverse: false
  })
  .setTween(floater)
  // .addIndicators({name: "floater"})
  .addTo(floaterController);


  const leadersController = new ScrollMagic.Controller();

  leaders
  .from($('.img-box'), 1, {autoAlpha:0, skewY:10, yPercent:50, ease:Power2, stagger:0.2})
  .from($('#leaders-content'), 1, {autoAlpha:0, scaleX:0, ease:Power3, transfomOrigin: "center"})
  

  let leadersScene = new ScrollMagic.Scene({
    triggerElement: ".our-leaders",
    triggerHook: 0.7,
    reverse:false
  })
  .setTween(leaders)
  // .addIndicators({name: "leaders"})
  .addTo(leadersController);

  // let aboutTween = new TweenMax.from('.text-container', 1, {opacity: 0, y: -100});
  const photoController = new ScrollMagic.Controller();
  let photos = new TimelineMax();
  
  photos.from($('#grid-container'), 1, {autoAlpha:0, scaleY:0});
  let photoScene = new ScrollMagic.Scene({
    triggerElement: ".photos",
    triggerHook: 0.9,
    reverse: false
  })
  .setTween(photos)
  // .addIndicators({name: "photos"})
  .addTo(photoController);


  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
  
    $('#logo').css("transform", 'translate(0px, -'+wScroll/2+ '%)');

    $('#hero-content').css("transform", 'translate(0px, -'+wScroll/8+ '%)');
    
    $('#expedition-content').css("transform", 'translate(0px, -'+wScroll/200+ '%)');
    
    $('.contact-us h1').css("transform", 'translate(0px, -'+wScroll/40+ '%)');
    
    $('#contact-container').css("transform", 'translate(0px, -'+wScroll/150+ '%)');
   
  });
})