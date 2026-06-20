const acronyms = [
    "EOD",
    "PRD",
    "ETA",
    "PTO",
    "FYI",
    "TLDR",
    "ICP",
    "OKR",
    "NFR",
    "MFA",
];

const acronymElement = document.getElementById("acronym");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text, delay = 80) {
    for (let i = 1; i <= text.length; i++) {
        element.textContent = text.slice(0, i);
        await sleep(delay);
    }
}

async function deleteText(element, delay = 50) {
    while (element.textContent.length > 0) {
        element.textContent = element.textContent.slice(0, -1);
        await sleep(delay);
    }
}

async function runAnimation() {
    let index = 0;

    while (true) {
        const word = acronyms[index];

        await typeText(acronymElement, word, 120);
        await sleep(2000);
        await deleteText(acronymElement, 70);
        await sleep(400);

        index = (index + 1) % acronyms.length;
    }
}

runAnimation();
