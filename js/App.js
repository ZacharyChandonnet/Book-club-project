/**
 * @module App
 */
export default class App {
  /**
   * Méthode principale. Sera appelée après le chargement de la page.
   */
  static main() {
    this.slogan();
    this.title();
    this.scroll();
    this.hover();
    this.text();
    this.alert();
    this.review();
    this.data();
    this.icons();
  }
  /**
   * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
   * @returns undefined Ne retourne rien
  */
  static init() {
    window.addEventListener("load", () => {
      this.main();
    });
  }

  static scroll() {
    document.querySelectorAll('a[data-scroll]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  static slogan() {
    gsap.from(".slogan", {
      delay: 2,
      duration: 2.5,
      opacity: 0,
      ease: "power4.easeIn",
    });

    gsap.from(".start", {
      delay: 2,
      duration: 2.5,
      opacity: 0,
      ease: "power4.easeIn",
    });
  }

  static title() {
    const myText = new SplitType('.title');

    gsap.to('.char', {
      delay: 2.5,
      y: 0,
      stagger: 0.05,
      duration: 0.1,
      opacity: 1,
    });
  }

  static hover() {
    const elements = document.querySelectorAll('.box');
    const arrows = document.querySelectorAll('.box .fa-arrow-left');

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    arrows.forEach(arrow => {
      arrow.classList.remove('arrow');
    });

    const mobileThumbnails = ['/img/alexis.jpg', '/img/karo.jpg', '/img/r1.jpg', '/img/r2.jpg'];

    elements.forEach((element, index) => {
      const arrow = arrows[index];

      if (isMobile) {
        element.addEventListener('touchstart', () => {
          element.classList.toggle('hoveredmobile');

          if (element.classList.contains('hoveredmobile')) {
            arrow.classList.add('arrow');
            element.querySelector('.thumbnail').style.opacity = '1';
            element.querySelector('.thumbnail').style.backgroundImage = `url(${mobileThumbnails[index]})`;
          } else {
            arrow.classList.remove('arrow');
            element.querySelector('.thumbnail').style.opacity = '';
            element.querySelector('.thumbnail').style.backgroundImage = '';
          }
        });
      } else {
        element.addEventListener('mouseover', () => {
          element.classList.add('hoveredpc');
          arrow.classList.add('arrow');
        });

        element.addEventListener('mouseout', () => {
          element.classList.remove('hoveredpc');
          arrow.classList.remove('arrow');
        });
      }
    });

  }

  static text() {
    const myText = document.querySelector(".friends");
    const text = myText.innerText;
    let index = 0;

    function nextLetter() {
      myText.style.display = "block";
      myText.innerText = text.substr(0, index);
      index++;

      if (index <= text.length) {
        gsap.delayedCall(0.08, nextLetter);
      } else {
        gsap.delayedCall(1, clearText);
      }
    }

    function clearText() {
      gsap.to(myText, { duration: 0.5, opacity: 0, onComplete: restartAnimation });
    }

    function restartAnimation() {
      myText.textContent = "";
      index = 0;
      gsap.to(myText, { duration: 0.1, opacity: 1, onComplete: nextLetter });
    }

    nextLetter();
  }


  static alert() {

    const form = document.querySelector('.formu');
    const email = document.querySelector('#email');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (email.value == '') {
        setTimeout(() => {
          alert('Make sure you have entered your email address !');
        }, 100);
      } else {
        setTimeout(() => {
          alert('Your email has been sent, Thank you !');
        }, 100);
      }
    });
  }

  static review() {

    // ANIMATION  
    var user = document.querySelector('.users');
    var tl = new TimelineMax({ repeat: -1 });

    tl.fromTo(
      user,
      1,
      { y: "+=20" },
      { y: "-=20", yoyo: true, repeat: 10 }
    );

    tl.repeatDelay(0);
  }

  static data() {

    var formulaire = document.getElementById('mon-formulaire');
    formulaire.addEventListener('submit', function (e) {
      e.preventDefault();

      var user = document.getElementById('nom').value;
      var review = document.getElementById('cote').value;
      var book = document.getElementById('book').value;
      var donnee = document.getElementById('donnee');

      var imageInput = document.getElementById('imageFile');
      var file = imageInput.files[0];



      if (user == '' || review == '' || book == '' || file == '') {
        alert('Please fill in all fields !');
      } else {

        if (file && (file.type === 'image/png' || file.type === 'image/jpeg') || file.type === 'image/jpg' || file.type === 'image/gif') {
          var reader = new FileReader();
          reader.onload = function (e) {
            var imgSrc = e.target.result;

            var img = donnee.appendChild(document.createElement('img'));
            img.src = imgSrc;
            img.alt = 'user';
            img.classList.add('photo');

            var hfour = donnee.appendChild(document.createElement('h4'));
            hfour.classList.add('utilisateur');
            hfour.innerHTML = user;

            var hfive = donnee.appendChild(document.createElement('h5'));
            hfive.innerHTML = book;

            var cote = donnee.appendChild(document.createElement('p'));
            cote.classList.add('cote');
            cote.innerHTML = ' " ' + review + ' " ';
          };
          reader.readAsDataURL(file);
        }
        else {
          alert("Please upload a valid image file");
        }
      }
    });
  }

  static icons() {
    const icon = document.getElementById("bulled");
    gsap.to(icon, {
      opacity: 0,
      duration: 3, 
      ease: "power1.inOut", 
      repeat: -1, 
      yoyo: true 
    });

    const icon2 = document.getElementById("bulle");
    gsap.to(icon2, {
      opacity: 0,
      duration: 3, 
      ease: "power1.inOut", 
      repeat: -1, 
      yoyo: true 
    });
  }
}
App.init();
