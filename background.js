let dictionary = {};

async function loadKRDict() {
    const u8Response = await fetch(chrome.runtime.getURL("data/krdict.u8"));
    const u8Text = await u8Response.text();

    const lines = u8Text.split('\n');
    let loaded = 0;

    for (const line of lines) {
        if (!line.trim()) continue;

        // format: word word [romanization] /def1/def2/
        const match = line.match(/^(\S+)\s+\S+\s+\[([^\]]*)\]\s+\/(.+)\/$/);
        if (!match) continue;

        const word = match[1];
        const reading = match[2];
        const meaning = match[3].replace(/\//g, ' ◆ ');

        dictionary[word] = { meaning, reading };
        loaded++;
    }

    console.log("KRDICT loaded:", loaded, "entries");
}

loadKRDict();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === "search") {
        const text = request.text.trim();
        let matchWord = null;
        let bestLen = 0;

        for (const word in dictionary) {
            if (text.startsWith(word) && word.length > bestLen) {
                matchWord = word;
                bestLen = word.length;
            }
        }

        if (!matchWord) {
            sendResponse(null);
            return true;
        }

        const entry = dictionary[matchWord];
        sendResponse({
            matchLen: matchWord.length,
            originalText: request.originalText,
            data: [
                [`${matchWord} [${entry.reading}] /${entry.meaning}/`, matchWord]
            ]
        });

        return true;
    }
});
