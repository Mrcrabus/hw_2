window.addEventListener('load', function () {
    const form = document.querySelector('.wrapper');


    ['focusout', 'focusin', 'submit'].forEach((event) => {
        form.addEventListener(event, (e) => {
            switch (event) {
                case 'focusout':
                    if (e.target.classList.contains('check')) {
                        if (e.target.value.length <= 0) {
                            e.target.classList.add('err')
                        }
                    }
                    break;
                case 'focusin':
                    e.target.classList.remove('err')
                    break;
                case 'submit':

                    if (e.target.classList.contains('wrapper')) {

                        for (let i = 0; i < (e.target.length - 1); i++) {
                            if (e.target[i].value.length <= 0) {
                                e.target[i].classList.add('err')
                                e.preventDefault()

                            }

                        }
                    }
                    break;
            }

        });

    })

})
