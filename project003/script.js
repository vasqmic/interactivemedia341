$(document).ready(function() {
    $('#title').hover(
        function(){
            $('#title').fadeOut(1000);
            },
        function(){
            $('#title').fadeIn(1000);
    });
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
]

function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('past').innerHTML * quotes[randomNumber];
    }