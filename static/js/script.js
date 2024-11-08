document.addEventListener('input', function (event) {
    if (event.target.tagName.toLowerCase() === 'textarea') {
        autoExpand(event.target);
    }
});

function autoExpand(field) {
    field.style.height = 'auto';
    field.style.height = field.scrollHeight + 'px';
}
