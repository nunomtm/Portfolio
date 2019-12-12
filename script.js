
// The function will start here
$(function() {

    const aboutScroll = $(window).scrollTop();
    $('.scroll').click(function () {
        $('html, body').animate({scrollTop: aboutScroll + 810})
    });

    // const aboutScroll = $(window).scrollTop();
    // $('.submit').click(function () {
    //     $('html, body').animate({scrollTop: wisdomScroll + 970})
    //     $('audio#yoda')[0].play()
    // });

    function randomQuote(optionArray) {
        const item = Math.floor(Math.random() * optionArray.length);
        return optionArray[item];
    }

    $("form").on("submit", function(e) {
        e.preventDefault();
        const joinOption = $('input[name=join]:checked').val();
        const saberOption = $('input[name=saber]:checked').val();

        const selection = rebel[joinOption];
        const option = rebel[joinOption];
        const color = selection.filter((choice) => {
            if(choice.color === saberOption) {
                return true;
            };
        });
    
        const quoteToDisplay = randomQuote(color);

        $('.quote').html(`<p class="quote">${quoteToDisplay.quote}</p>`);

        $('.quote').css('display', 'block');

    });  
});