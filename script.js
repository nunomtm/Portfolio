
// The function will start here

// Type.js in header //
let TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    let css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// End of Type.js //

// Mobile nav button //
let menuBtn = $('.menu');

menuBtn.on("click", function () {
    $(this).toggleClass('open');
    $('body').toggleClass('open');
    $('.mobileNav').slideToggle('slow');
});

// Show scrow to top button //
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.arrowUp').fadeIn();
    } else {
        $('.arrowUp').fadeOut();
    }
});

const up = $('.arrowUp');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        up.addClass('show');
    } else {
        up.removeClass('show');
    }
});

up.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '100');
});



// $(function() {

//     const aboutScroll = $(window).scrollTop();
//     $('.scroll').click(function () {
//         $('html, body').animate({scrollTop: aboutScroll + 815})
//     });
    
// });

    // const aboutScroll = $(window).scrollTop();
    // $('.submit').click(function () {
    //     $('html, body').animate({scrollTop: wisdomScroll + 970})
    //     $('audio#yoda')[0].play()
    // });

    // function randomQuote(optionArray) {
    //     const item = Math.floor(Math.random() * optionArray.length);
    //     return optionArray[item];
    // }

    // $("form").on("submit", function(e) {
    //     e.preventDefault();
    //     const joinOption = $('input[name=join]:checked').val();
    //     const saberOption = $('input[name=saber]:checked').val();

    //     const selection = rebel[joinOption];
    //     const option = rebel[joinOption];
    //     const color = selection.filter((choice) => {
    //         if(choice.color === saberOption) {
    //             return true;
    //         };
    //     });
    
    //     const quoteToDisplay = randomQuote(color);

    //     $('.quote').html(`<p class="quote">${quoteToDisplay.quote}</p>`);

    //     $('.quote').css('display', 'block');

    // });  