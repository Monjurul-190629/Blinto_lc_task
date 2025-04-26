/// For counter section

const counters = document.querySelectorAll('.count');
let hasCounted = false;

const animateCount = (counter) => {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const increment = Math.ceil(target / 100);

    const update = () => {
        if (current < target) {
            current += increment;
            counter.innerText = current;
            setTimeout(update, 30);
        } else {
            counter.innerText = target;
        }
    };

    update();
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasCounted) {
                counters.forEach(counter => animateCount(counter));
                hasCounted = true;
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% visible
    }
);

const statSection = document.querySelector('.stat-section');
if (statSection) {
    observer.observe(statSection);
}

