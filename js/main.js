AOS.init();

// cache the navigation links 
var $navigationLinks = $('.navbar-nav > li > a');
// cache (in reversed order) the sections
var $sections = $($("section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function () {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('.navbar-nav > li > a[href=\\#' + id + ']');
});

// throttle function, enforces a minimum time interval
function throttle(fn, interval) {
    var lastCall, timeoutId;
    return function () {
        var now = new Date().getTime();
        if (lastCall && now < (lastCall + interval)) {
            // if we are inside the interval we wait
            clearTimeout(timeoutId);
            timeoutId = setTimeout(function () {
                lastCall = now;
                fn.call();
            }, interval - (now - lastCall));
        } else {
            // otherwise, we directly call the function 
            lastCall = now;
            fn.call();
        }
    };
}

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop() + 300;

    // iterate the sections
    $sections.each(function () {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top;

        // if the user has scrolled over the top of the section  
        if (scrollPosition >= sectionTop) {
            // get the section id
            var id = currentSection.attr('id');
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!$navigationLink.hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('active');
                // add .active class to the current link
                $navigationLink.addClass('active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

$(window).scroll(throttle(highlightNavigation, 100));

// if you don't want to throttle the function use this instead:
// $(window).scroll( highlightNavigation );

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('img').lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime: 1000,
        visibleOnly: true
    });
})

function Shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

const technologies = [
    "C++",
    "WordPress",
    "C#",
    ".NET Core",
    "JavaScript (ES6+)",
    "PHP (v7+)",
    "Python",
    "MySQL",
    "NodeJS",
    "CSS",
    "HTML",
    "WebSockets",
    "Active Directory",
    "Hyper-V",
    "ML.NET",
    "YOLOv3+",
    "Bootstrap",
    "ASP.NET",
    "Enterprise Networking",
    "UniFI Networks",
    "Computer Hardware",
    "Microsoft Azure",
    "PyTorch",
    "REST APIs",
    "Group Policy",
    "jQuery",
    "Google Colaboratory",
    "WebRTC",
    "Express",
    "Raspberry Pi",
    "Debian GNU/Linux",
    "Ubuntu",
    "Cisco Networking",
    "Discord API",
    "GitHub"
];

new TypeIt("#workedWith", {
    strings: Shuffle(technologies),
    lifeLike: true,
    breakLines: false,
    loop: true,
    nextStringDelay: [3000, 0],
    cursor: true
}).go();