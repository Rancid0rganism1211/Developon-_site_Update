document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const navlinks = document.querySelector('.nav__links');

    menuIcon.addEventListener('click', function () {
        navlinks.classList.toggle('show');
    });
    
        // AJAX submit for header enquiry form (uses Formspree endpoint from the form's action)
        const headerForm = document.querySelector('form.header__form');
        if (headerForm) {
            headerForm.addEventListener('submit', async function (e) {
                e.preventDefault();

                // remove any existing message
                let existingMsg = headerForm.querySelector('.form-message');
                if (existingMsg) existingMsg.remove();

                // create feedback element
                const msg = document.createElement('div');
                msg.className = 'form-message';
                headerForm.appendChild(msg);

                const formData = new FormData(headerForm);

                try {
                    const res = await fetch(headerForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });

                    if (res.ok) {
                        msg.textContent = 'Thanks — your message has been sent!';
                        msg.classList.remove('error');
                        headerForm.reset();
                    } else {
                        const data = await res.json().catch(() => ({}));
                        msg.textContent = data.error || 'Oops — there was a problem sending your message.';
                        msg.classList.add('error');
                    }
                } catch (err) {
                    msg.textContent = 'Network error — please try again later.';
                    msg.classList.add('error');
                }
            });
        }

        const metricsSection = document.querySelector('#metrics');
        if (metricsSection) {
            const counters = metricsSection.querySelectorAll('.counter');
            let animated = false;

            const animateCounter = (el, target, duration = 1500) => {
                let startTs = null;
                const step = (ts) => {
                    if (!startTs) startTs = ts;
                    const progress = Math.min((ts - startTs) / duration, 1);
                    const value = Math.floor(progress * target);
                    el.textContent = value.toLocaleString();
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            };

            const io = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !animated) {
                        animated = true;
                        counters.forEach((el) => {
                            const target = parseInt(el.getAttribute('data-target'), 10) || 0;
                            animateCounter(el, target);
                        });
                        io.disconnect();
                    }
                });
            }, { threshold: 0.3 });

            io.observe(metricsSection);
        }
});
