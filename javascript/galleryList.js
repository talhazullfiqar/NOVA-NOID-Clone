function gallerylist() {
    const buttons = document.querySelectorAll('.buttonClass');
    const items = document.querySelectorAll('.gallery__item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const filter = button.id;

            items.forEach(item => {
                const itemCategories = item.getAttribute('data-gallery').split(' ');
                if (filter === 'all') {
                    item.classList.remove('blur');
                    item.setAttribute('data-gallery', itemCategories.join(' '));
                } else {
                    if (itemCategories.includes(filter)) {
                        item.classList.remove('blur');
                    } else {
                        item.classList.add('blur');
                    }
                    if (itemCategories.length > 2 && !itemCategories.includes(filter)) {
                        item.setAttribute('data-gallery', filter);
                    }
                }
            });
        });
    });
}

export default gallerylist;
