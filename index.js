const nav_children = document.getElementById('header').querySelectorAll('a');

nav_children.forEach((elem) =>
{
    elem.addEventListener('click', () => 
    {
        for (let nav_child of nav_children)
            nav_child.removeAttribute('style');
        elem.setAttribute('style', 'color: var(--header-text-selected-color)');
    });
});

const svg = document.querySelector('div.float-right.text-gray').querySelectorAll('svg');
svg.forEach((elem) =>
{
    let width = elem.getAttribute("width");
    let height = elem.getAttribute("height");
    // Remove height property entirely
    elem.removeAttribute("height");
    // Width property should be set to 100% to fill entire container
    elem.setAttribute("width", "1.3%");
    // Add a viewBox property based on the former width/height
    elem.setAttribute("viewBox", "0 0 " + width + " " + height);
});

const theme_switch = document.getElementById('theme-switch');
const body = document.getElementById('body');

if (localStorage.getItem('lightTheme') === 'true')
{
    theme_switch.checked = true;
    body.style.background = 'var(--light-bg)';
}

theme_switch.addEventListener('change', () =>
{
    if (theme_switch.checked)
    {
        body.style.background = 'var(--light-bg)';
        localStorage.setItem('lightTheme', 'true');
    }
    else
    {
        body.style.background = 'var(--dark-bg)';
        localStorage.removeItem('lightTheme');
    }
});

