const memeText = document.getElementById('memeText')
const memeImg = document.getElementById('memeImg')
const memeAuthor = document.getElementById('memeAuthor')
const memeGeneratorBtn = document.getElementById('memeGeneratorBtn')

async function test() {
    try {
        const response = await fetch("https://meme-api.com/gimme/wholesomememes")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response}`);
        }
        const data = await response.json();
        console.log(data);
        memeImg.src = data.url
        memeText.textContent = data.title
        memeAuthor.textContent = data.author
    } catch (error) {
        console.log(error);
    }
}

test()
memeGeneratorBtn.addEventListener('click', ()=> {
    test()
})