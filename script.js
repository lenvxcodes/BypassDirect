function openURL() {
    var userInput = document.getElementById('urlInput').value;
    var urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([\-\.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;

    if (urlRegex.test(userInput)) {
        console.log("Valid URL:", userInput);
        var win = window.open('about:blank');
        win.onload = function() {
            var iframe = win.document.createElement('iframe');
            iframe.style.border = 'none';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.margin = '0';
            iframe.src = userInput;
            win.document.body.appendChild(iframe);
        };
    } else {
        console.log("Invalid URL. Please enter a valid link.");
        document.getElementById('urlInput').classList.add('invalid-input');
        setTimeout(function() {
            document.getElementById('urlInput').classList.remove('invalid-input');
        }, 500);
    }
}


document.querySelector('.enter-button').addEventListener('click', openURL);

document.getElementById('urlInput').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        openURL();
    }
});
