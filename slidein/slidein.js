const sliders = document.getElementsByClassName('slider')

const startAnimation = (entries, observer) => {
    for(entry of entries) {
        if (!entry.isIntersecting)
            continue;

        console.log('starting animation', entry)

        entry.target.classList.remove('slider')
        entry.target.classList.add('slide')

        observer.unobserve(entry.target)
    }
}

const observer = new IntersectionObserver(startAnimation, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
})

Array.from(sliders).forEach(slider => {
    observer.observe(slider)
});