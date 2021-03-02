const navChildren = document.getElementById('header').querySelectorAll('a');

navChildren.forEach((elem) =>
{
    elem.addEventListener('click', () => 
    {
        for (let navChild of navChildren)
            navChild.removeAttribute('style');
        elem.setAttribute('style', 'color: var(--header-text-selected-color)');
    });
});

const svg = document.querySelector('div.float-right.color-text-secondary').querySelectorAll('svg');
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

const themeSwitch = document.getElementById('theme-switch');
const body = document.getElementById('body');

if (localStorage.getItem('lightTheme') === 'true')
{
    themeSwitch.checked = true;
    body.style.background = 'var(--light-body-bg)';
    body.style.color = 'var(--light-text)';
}

themeSwitch.addEventListener('change', () =>
{
    if (themeSwitch.checked)
    {
        body.style.background = 'var(--light-body-bg)';
        body.style.color = 'var(--light-text)';
        localStorage.setItem('lightTheme', 'true');
    }
    else
    {
        body.style.background = 'var(--dark-bg)';
        body.style.color = 'var(--dark-text)';
        localStorage.removeItem('lightTheme');
    }
});

