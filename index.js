console.log('dame');


/*for (let nav_a of nav)
{
    nav_a.addEventListener("'click'", () => 
    {
        console.log('clicked');
    }, false);
}*/
addEventListener('click', function (event)
{
    const anchor = event.target.closest("a");   // Find closest Anchor (or self)
    if (!anchor) return;

    const home_a_tag = document.getElementById('home_a_tag');
    home_a_tag.removeAttribute('style');

    const nav_children = document.getElementById('nav').children;
    for (let nav_child of nav_children)
    {
        nav_child.removeAttribute('style');
    }

    // Not found. Exit here.
    anchor.setAttribute('style', 'border-bottom: 1px solid');
    console.log(anchor.getAttribute('href'));  // Log to test
});