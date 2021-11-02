window.addEventListener('load', function () {
    const form = document.querySelector('.wrapper');


    ['focusout', 'focusin', 'click'].forEach((event) => {
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
                case 'click':
                    if (e.target.classList.contains('button')) {
                        e.preventDefault()


                        console.log('btn')
                    }
                    break;

            }

        });

    })

})
