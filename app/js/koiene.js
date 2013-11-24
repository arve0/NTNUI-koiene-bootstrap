var setMenuHeight = function(){
  // sett høyde på meny manuelt for desktop
  var meny = $('.meny');
  if($(window).width() > 767) {
    meny.height($('.innhold').height());
  }
  else {
    meny.height('auto');
  }
}

var setLogoHeight = function(){
  // sett høyde for logo lik høyden til toppbilde
  var h = $('.top-img').height();
  var logo = $('.logo');
  var logoimg = $('.logo > a');
  var padding = ( h - $('.logo > a').height() ) / 2;
  logo.height(h);
  logoimg.css('margin-top', padding + 'px');
}

$(document).ready(function(){
  // ordne kart
  initialize();

  setInterval(setLogoHeight);
  setMenuHeight();

  $(window).resize(function(){
    // resize av browser -> sett høyde på meny
    setMenuHeight();
  });
  var visMeny = false;
  $('.vis-meny').click(function(){
    // utvid meny i mobilversjon
    var linker = $('.under, .under-mobil');
    var underMobil = $('.under-mobil');
    if (visMeny){
      // skjul
      linker.hide(600, function(){
        // legg til klasse etter lenkene er skjult
        $(this).addClass('hidden-xs');
        // egen klasse for 'Hvordan leie?'
        underMobil.removeClass('hidden-xs').removeClass('visible-xs');
      });
      $(this).html('Vis full meny');
      visMeny=false;
    }
    else {
      // vis
      linker.hide().removeClass('hidden-xs'); // skjul, så fjern klasse (for animasjon)
      linker.show(600, function(){
        // hindre at 'hvordan leie' vises i desktop
        $('.under-mobil').addClass('visible-xs');
      });
      $(this).html('Skjul full meny');
      visMeny=true;
    }
  });
});
