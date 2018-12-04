export default function hamburgers() {
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
        console.log('click');
        hamburger.classList.toggle('is-active');
    });
}