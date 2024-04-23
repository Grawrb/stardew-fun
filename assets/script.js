const starDewBtn = document.getElementById('sdBtn');

const starDewModal = document.createElement('dialog');
document.body.appendChild(starDewModal);
const starDewForm = document.createElement('div');
starDewModal.appendChild(starDewForm);
const sdMessage = document.createElement('h3');
sdMessage.textContent = ("Tell me what you're doing!");
starDewForm.appendChild(sdMessage);
const inputLine = document.createElement('input');
inputLine.setAttribute('type', 'text');
starDewForm.appendChild(inputLine);
const submitBtn = document.createElement('button');
submitBtn.textContent = ('Submit');
starDewForm.appendChild(submitBtn);

function createModal() {
    starDewModal.showModal();
};

starDewBtn.addEventListener('click', createModal);

function submitClick() {
    starDewModal.close();
    const playMessage = document.createElement('h2');
    playMessage.textContent = ('Go play Stardew Valley!');
    document.body.appendChild(playMessage);
}

submitBtn.addEventListener('click', submitClick);

