const nav_children = document.getElementById('header').querySelectorAll('a');

nav_children.forEach((elem) =>
{
    elem.addEventListener('click', () => 
    {
        for (let nav_child of nav_children)
            nav_child.removeAttribute('style');
        elem.setAttribute('style', 'border-bottom: 1px solid');
    });
});