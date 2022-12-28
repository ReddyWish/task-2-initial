import './index.css';


const cookieConsent = document.querySelector('.cookie-consent')
const cookieConsentButton = document.querySelector('.cookie-consent__button')

// localStorage.removeItem('cookieButton')

    if (window.localStorage.getItem('cookieButton')) {
        cookieConsent.classList.add('hide')
    }

   cookieConsentButton.addEventListener('click', event => {

         cookieConsent.classList.add('hide')
         window.localStorage.setItem('cookieButton', 'accepted')
         console.log(window.localStorage)
   })



console.log(localStorage.getItem('cookieButton'))



