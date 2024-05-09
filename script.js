const _quote = document.getElementById('quote'),
    _author = document.getElementById('author'),
    _btn = document.getElementById('btn');

const APIUrl = "https://api.quotable.io/random";

document.addEventListener("DOMContentLoaded", function () {
    updateUI();
});

async function fetchQuote() {
    const promise = await fetch(`${APIUrl}`);
    return promise.json();
}

async function updateUI() {
    //Opcaity is used for getting smooth transition when quote changes
    _quote.style.opacity = 0;
    _author.style.opacity = 0;


    const result = await fetchQuote();
    _quote.innerHTML = `<span class="quotation">"</span> ${result.content} <span class="quotation">"</span>`;
    _author.innerHTML = `- ${result.author}`;

    /* we set their opacity to 1 after a short delay (10 milliseconds in this example). This delay allows the browser to apply the opacity change as a transition, creating a smooth fade-in effect.*/
    setTimeout(() => {
        _quote.style.opacity = 1;
        _author.style.opacity = 1;
    }, 10);
}

_btn.addEventListener('click', updateUI);