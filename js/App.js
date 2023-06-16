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
}
App.init();
