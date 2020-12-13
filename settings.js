

loadTextArea = function() {
    chrome.storage.sync.get(["ytLinks"], function(data) {
        if (data["ytLinks"] !== undefined) document.getElementById("textareaLinks").value = data["ytLinks"].join('\n');
    });
}

window.onload = () => {
    loadTextArea();
    document.getElementById("textareaLinks").onfocus = () => {
        document.getElementById("saveInstructions").innerHTML="Currently editing: Click off the textarea to save.";
    }
    document.getElementById("textareaLinks").onblur = function() {
        var urls = document.getElementById("textareaLinks").value.split('\n');
        
        var i, r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;

        for (i = 0; i < urls.length; ++i) {
            r = urls[i].match(rx);
            if (r !== null) {
                urls[i] = r[1];
            }
        }
        chrome.storage.sync.set({"ytLinks":urls}, () => {
            document.getElementById("saveInstructions").innerHTML="Saved!";
        });
        loadTextArea();
    };
    
};