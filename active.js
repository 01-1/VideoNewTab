function shuffleArray(array) {
    // https://stackoverflow.com/a/12646864/9245282
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


window.onload = () => {
    chrome.storage.sync.get(["ytLinks"], function(data) {
        var links = data["ytLinks"];
        if (links !== undefined) {
            shuffleArray(links);
            document.getElementById("mainVideo").setAttribute("src",`https://www.youtube.com/embed/${links[0]}?playlist=`+links.join(','));
        }
    });
}