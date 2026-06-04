const greetings = [
    "ETA",
    "EOD",
    "PTO",
    "FYI",
    "TL;DR",
    "PTO",
    "POC",
    "API",
    "MFA",
    "SQL",
    "ICP",
];

const acronymElement = document.getElementById("acronym");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeWord(word) {
    for (let i = 1; i <= word.length; i++) {
        acronymElement.textContent = word.slice(0, i);
        await sleep(200);
    }
}

async function deleteWord(word) {
    for (let i = word.length; i >= 0; i--) {
        acronymElement.textContent = word.slice(0, i);
        await sleep(100);
    }
}

async function runAnimation() {
    let index = 0;

    while (true) {
        const word = greetings[index];

        await typeWord(word);
        await sleep(2000);
        await deleteWord(word);
        await sleep(1000);

        index = (index + 1) % greetings.length;
    }
}

runAnimation();