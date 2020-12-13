
window.onload = () => {
    chrome.storage.sync.get(["ytLinks"], function(data) {
        var links = data["ytLinks"];
        if (links !== undefined) {
            var randomChoice = links[Math.floor(Math.random()*links.length)]
            document.getElementById("mainVideo").setAttribute("src",`https://www.youtube.com/embed/${randomChoice}`);
        }
    });
}