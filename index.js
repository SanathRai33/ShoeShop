var Right = document.querySelector('.right')
var Images = document.querySelector('.image')
var Colors = document.querySelector('.colors')
var Name = document.querySelector('.name')

var Blue = document.querySelector('.blue');
var Red = document.querySelector('.red');
var Black = document.querySelector('.black');
var Grey = document.querySelector('.grey');

Blue.addEventListener('click', function(){
    Right.style.backgroundColor = '#4790be';
    Colors.style.backgroundColor = '#004c7f';
    Images.style.backgroundImage = "url('./Images/blue-shoe.png')";
    Images.style.filter = "drop-shadow(0px 7px 8px black)";
    Name.textContent = 'Blue';
    Name.style.webkitTextStroke = '1px #004c7f';
    
})

Red.addEventListener('click', function(){
    Right.style.backgroundColor = '#62282b';
    Colors.style.backgroundColor = '#370c0e';
    Images.style.backgroundImage = "url('./Images/red-shoe.png')";
    Images.style.filter = "drop-shadow(0px 7px 8px black)";
    Name.textContent = 'Red';
    Name.style.webkitTextStroke = '1px #370c0e';
    
})

Black.addEventListener('click', function(){
    Right.style.backgroundColor = '#000';
    Colors.style.backgroundColor = '#959696';
    Images.style.backgroundImage = "url('./Images/black-shoe.png')";
    Images.style.filter = "drop-shadow(0px 7px 8px white)";
    Name.textContent = 'Black';
    Name.style.webkitTextStroke = '1px #959696';
})

Grey.addEventListener('click', function(){
    Right.style.backgroundColor = '#9c9ca8';
    Colors.style.backgroundColor = '#676168';
    Images.style.backgroundImage = "url('./Images/grey-shoe.png')";
    Images.style.filter = "drop-shadow(0px 7px 8px black)";
    Name.textContent = 'Grey';
    Name.style.webkitTextStroke = '1px #676168';
})

document.addEventListener("DOMContentLoaded", function () {
    var cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function (e) {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    });
});



// https://www.nike.com/in/t/air-jordan-1-mid-shoes-SQf7DM/DQ8426-010
// ---------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    gsap.from(".Nav", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5
    });

    gsap.set(".links a", { opacity: 1, y: 0 });

    gsap.from(".links a", {
        y: -20,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 1.8,
        ease: "power2.out"
    });

    gsap.from(".left h1", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.5
    });

    gsap.from(".left h3", {
        x: -100,
        opacity: 0,
        duration: 1,
        delay: 0.7
    });

    gsap.from(".bttns button", {
        y: 20,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        delay: 1
    });

    gsap.from(".image", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        delay: 1
    });

    gsap.from(".name", {
        y: -20,
        opacity: 0,
        duration: 1,
        delay: 1.2
    });

    gsap.from(".colors button", {
        scale: 0,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 1.5
    });

    gsap.from(".count div", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 1.8
    });
});

gsap.set(".brand-card", { opacity: 0, y: 50 });
gsap.to(".brand-card", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".brands-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
    }
});


gsap.from(".about-text", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  
  gsap.from(".about-image img", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".contact-container", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: ".contact",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
  
  gsap.from(".map iframe", {
    opacity: 0,
    scale: 0.9,
    duration: 1,
    scrollTrigger: {
      trigger: ".map",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
  