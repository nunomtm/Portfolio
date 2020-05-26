// The function will start here

// Toggle hamburger menu function
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLinks = document.querySelectorAll('.navLinks li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('navActive');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.6}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
};
navSlide();
// Toggle function ends here

// Header Type.js Animation //
const TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    const that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
        const toRotate = elements[i].getAttribute('data-type');
        const period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
    document.body.appendChild(css);
};
// End of Type.js

$(function() {
    // Active tabs on scroll
    const sections = $('section');
    const nav = $('.navContainer');
    const navHeight = nav.outerHeight();

    $(window).on('scroll', function() {
        // Scroll to top button animation
        if ($(this).scrollTop() > 100) {
            $('.arrowUp').fadeIn();
        } else {
            $('.arrowUp').fadeOut();
        }

        // Transition active tabs on scroll
        const curPos = $(this).scrollTop();

        sections.each(function() {
            const top = $(this).offset().top - navHeight;
            const bottom = top + $(this).outerHeight();

            if (curPos >= top && curPos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find(`a[href="#${$(this).attr('id')}"]`).addClass('active');
            }
        });
    });

    // Active tab scroll function
    $('a').on('click', function() {
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - navHeight + 1,
            },
            900
        );
        return false;
    });

    // Portfolio Scroll Animation
    AOS.init({
        duration: 1500,
        disable: 'phone',
    });
});
