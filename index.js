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
    //event.preventDefault();                     // Don't navigate!
    const nav_children = document.getElementById('nav').children;
    //console.log(nav_children[0].getAttribute('style'));
    /*nav_children.forEach(element =>
    {
        element.removeAttribute('border-bottom');
    });*/
    for (let nav_child of nav_children)
    {
        nav_child.removeAttribute('style');
    }

    const anchor = event.target.closest("a");   // Find closest Anchor (or self)
    if (!anchor) return;                        // Not found. Exit here.
    anchor.setAttribute('style', 'border-bottom: 1px solid');
    console.log(anchor.getAttribute('href'));  // Log to test
});