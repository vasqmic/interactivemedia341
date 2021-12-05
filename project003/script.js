$(document).ready(function() {
    fadeloop('#title',1500,1200,true);
    function fadeloop(el,timeout,timein,loop){
        var $el = $(el),intId,fn = function(){
             $el.fadeOut(timeout).fadeIn(timein);
        };
        fn();
        if(loop){
            intId = setInterval(fn,timeout+timein+100);
            return intId;
        }
        return false;
    }
});

var quotes = [
    'THE FOOL (UP)',
    'THE FOOL (DOWN)',
    'THE MAGICIAN (UP)',
    'THE MAGICIAN (DOWN)',
    'THE HIGH PRIESTESS (UP)',
    'THE HIGH PRIESTESS (DOWN)',
    'THE EMPRESS (UP)',
    'THE EMPRESS (DOWN)',
    'THE EMPEROR (UP)',
    'THE EMPEROR (DOWN)',
    'THE HIEROPHANT (UP)',
    'THE HIEROPHANT (DOWN)',
    'THE LOVERS (UP)',
    'THE LOVERS (DOWN)',
    'THE CHARIOT (UP)',
    'THE CHARIOT (DOWN)',
    'STRENGTH (UP)',
    'STRENGTH (DOWN)',
    'THE HERMIT (UP)',
    'THE HERMIT (DOWN)',
    'WHEEL OF FORTUNE (UP)',
    'WHEEL OF FORTUNE (DOWN)',
    'JUSTICE (UP)',
    'JUSTICE (DOWN)',
    'THE HANGED MAN (UP)',
    'THE HANGED MAN (DOWN)',
    'DEATH (UP)',
    'DEATH (DOWN)',
    'TEMPERANCE (UP)',
    'TEMPERANCE (DOWN',
    'THE DEVIL (UP)',
    'THE DEVIL (UP)',
    'THE TOWER (UP)',
    'THE TOWER (DOWN)',
    'THE STAR (UP)',
    'THE STAR (DOWN)',
    'THE MOON (UP)',
    'THE MOON (DOWN)',
    'THE SUN (UP)',
    'THE SUN (DOWN)',
    'JUDGEMENT (UP)',
    'JUDGEMENT (DOWN)',
    'THE WORLD (UP)',
    'THE WORLD (DOWN)',
    'ACE OF WANDS (UP)',
    'ACE OF WANDS (DOWN)',
    'TWO OF WANDS (UP)',
    'TWO OF WANDS (DOWN)',
    'THREE OF WANDS (UP)',
    'THREE OF WANDS (DOWN)',
    'FOUR OF WANDS (UP)',
    'FOUR OF WANDS (DOWN)',
    'FIVE OF WANDS (UP)',
    'FIVE OF WANDS (DOWN)',
    'SIX OF WANDS (UP)',
    'SIX OF WANDS (DOWN)',
    'SEVEN OF WANDS (UP)',
    'SEVEN OF WANDS (DOWN)',
    'EIGHT OF WANDS (UP)',
    'EIGHT OF WANDS (DOWN)',
    'NINE OF WANDS (UP)',
    'NINE OF WANDS (DOWN)',
    'TEN OF WANDS (UP)',
    'TEN OF WANDS (DOWN)',
    'PAGE OF WANDS (UP)',
    'PAGE OF WANDS (DOWN)',
    'KNIGHT OF WANDS (UP)',
    'KNIGHT OF WANDS (DOWN)',
    'QUEEN OF WANDS (UP)',
    'QUEEN OF WANDS (DOWN)',
    'KING OF WANDS (UP)',
    'KING OF WANDS (DOWN)',
    'ACE OF CUPS (UP)',
    'ACE OF CUPS (DOWN)',
    'TWO OF CUPS (UP)',
    'TWO OF CUPS (DOWN)',
    'THREE OF CUPS (UP)',
    'THREE OF CUPS (DOWN)',
    'FOUR OF CUPS (UP)',
    'FOUR OF CUPS (DOWN)',
    'FIVE OF CUPS (UP)',
    'FIVE OF CUPS (DOWN)',
    'SIX OF CUPS (UP)',
    'SIX OF CUPS (DOWN)',
    'SEVEN OF CUPS (UP)',
    'SEVEN OF CUPS (DOWN)',
    'EIGHT OF CUPS (UP)',
    'EIGHT OF CUPS (DOWN)',
    'NINE OF CUPS (UP)',
    'NINE OF CUPS (DOWN)',
    'TEN OF CUPS (UP)',
    'TEN OF CUPS (DOWN)',
    'PAGE OF CUPS (UP)',
    'PAGE OF CUPS (DOWN)',
    'KNIGHT OF CUPS (UP)',
    'KNIGHT OF CUPS (DOWN)',
    'QUEEN OF CUPS (UP)',
    'QUEEN OF CUPS (DOWN)',
    'KING OF CUPS (UP)',
    'KING OF CUPS (DOWN)',
    'ACE OF SWORDS (UP)',
    'ACE OF SWORDS (DOWN)',
    'TWO OF SWORDS (UP)',
    'TWO OF SWORDS (DOWN)',
    'THREE OF SWORDS (UP)',
    'THREE OF SWORDS (DOWN)',
    'FOUR OF SWORDS (UP)',
    'FOUR OF SWORDS (DOWN)',
    'FIVE OF SWORDS (UP)',
    'FIVE OF SWORDS (DOWN)',
    'SIX OF SWORDS (UP)',
    'SIX OF SWORDS (DOWN)',
    'SEVEN OF SWORDS (UP)',
    'SEVEN OF SWORDS (DOWN)',
    'EIGHT OF SWORDS (UP)',
    'EIGHT OF SWORDS (DOWN)',
    'NINE OF SWORDS (UP)',
    'NINE OF SWORDS (DOWN)',
    'TEN OF SWORDS (UP)',
    'TEN OF SWORDS (DOWN)',
    'PAGE OF SWORDS (UP)',
    'PAGE OF SWORDS (DOWN)',
    'KNIGHT OF SWORDS (UP)',
    'KNIGHT OF SWORDS (DOWN)',
    'QUEEN OF SWORDS (UP)',
    'QUEEN OF SWORDS (DOWN)',
    'KING OF SWORDS (UP)',
    'KING OF SWORDS (DOWN)',
    'ACE OF PENTACLES (UP)',
    'ACE OF PENTACLES (DOWN)',
    'TWO OF PENTACLES (UP)',
    'TWO OF PENTACLES (DOWN)',
    'THREE OF PENTACLES (UP)',
    'THREE OF PENTACLES (DOWN)',
    'FOUR OF PENTACLES (UP)',
    'FOUR OF PENTACLES (DOWN)',
    'FIVE OF PENTACLES (UP)',
    'FIVE OF PENTACLES (DOWN)',
    'SIX OF PENTACLES (UP)',
    'SIX OF PENTACLES (DOWN)',
    'SEVEN OF PENTACLES (UP)',
    'SEVEN OF PENTACLES (DOWN)',
    'EIGHT OF PENTACLES (UP)',
    'EIGHT OF PENTACLES (DOWN)',
    'NINE OF PENTACLES (UP)',
    'NINE OF PENTACLES (DOWN)',
    'TEN OF PENTACLES (UP)',
    'TEN OF PENTACLES (DOWN)',
    'PAGE OF PENTACLES (UP)',
    'PAGE OF PENTACLES (DOWN)',
    'KNIGHT OF PENTACLES (UP)',
    'KNIGHT OF PENTACLES (DOWN)',
    'QUEEN OF PENTACLES (UP)',
    'QUEEN OF PENTACLES (DOWN)',
    'KING OF PENTACLES (UP)',
    'KING OF PENTACLES (DOWN)',
]

function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('past').innerHTML = quotes[randomNumber];
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('present').innerHTML = quotes[randomNumber];
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('future').innerHTML = quotes[randomNumber];
    }



    var colors = new Array(
        [62,35,255],
        [60,255,60],
        [255,35,98],
        [45,175,230],
        [255,0,255],
        [255,128,0]);
      
      var step = 0;
      //color table indices for: 
      // current color left
      // next color left
      // current color right
      // next color right
      var colorIndices = [0,1,2,3];
      
      //transition speed
      var gradientSpeed = 0.002;
      
      function updateGradient()
      {
        
        if ( $===undefined ) return;
        
      var c0_0 = colors[colorIndices[0]];
      var c0_1 = colors[colorIndices[1]];
      var c1_0 = colors[colorIndices[2]];
      var c1_1 = colors[colorIndices[3]];
      
      var istep = 1 - step;
      var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
      var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
      var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
      var color1 = "rgb("+r1+","+g1+","+b1+")";
      
      var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
      var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
      var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
      var color2 = "rgb("+r2+","+g2+","+b2+")";
      
       $('#gradient').css({
         background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
          background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
        
        step += gradientSpeed;
        if ( step >= 1 )
        {
          step %= 1;
          colorIndices[0] = colorIndices[1];
          colorIndices[2] = colorIndices[3];
          
          //pick two new target color indices
          //do not pick the same as the current one
          colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
          colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
          
        }
      }
      
      setInterval(updateGradient,10);