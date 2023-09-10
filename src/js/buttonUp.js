// import { getRefs } from '../refs';

const refs = document.querySelector(`.up-button`);

export const buttonUp = {
  el: refs,
  show() {
    this.el.classList.remove('up-button_hiden');
  },
  hide() {
    this.el.classList.add('up-button_hiden');
  },
  

  addEventListener() {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
      scrollY > 400 ? this.show() : this.hide();
    });
      document.querySelector('.up-button').onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
  },
};

buttonUp.addEventListener();