const button = document.querySelector('#quote-btn');
const quoteContainer = document.querySelector('#quote-container');
const adviceId = document.querySelector('#adviceId')

button.addEventListener("click", () => {
    fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
      quoteContainer.innerHTML = `<p>"${data.content}"</p><p>- ${data.author}</p>`;
    });
    // const currentId = parseInt(adviceId.textContent);
    const randomNumber = Math.floor(Math.random() * 200) + 1;
    adviceId.textContent = randomNumber;
})

