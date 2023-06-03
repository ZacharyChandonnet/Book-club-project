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

        gsap.to('.char',{
            delay: 2.5,
            y: 0,
            stagger: 0.05,
            duration: 0.1,
            opacity: 1,
        });
    }
}
App.init();
