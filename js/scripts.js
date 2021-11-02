window.addEventListener('load', function () {
    const form = document.querySelector('.wrapper');
    const btn = document.querySelector('.button');


    ['focusout', 'focusin'].forEach((event) => {

        form.addEventListener(event, (e) => {
            if (e.target.classList.contains('check')) {
                switch (event) {
                    case 'focusout':
                        if (e.target.value.length <= 0) {
                            e.target.classList.add('err')
                            btn.disabled = true
                        }

                        break;
                    case 'focusin':
                        e.target.classList.remove('err')
                        break;
                }

            }
        });
    })


})
