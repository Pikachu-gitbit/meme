const API_CALL = ("https://meme-api.herokuapp.com/gimme");

function getmeme() {
    fetch(API_CALL)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
            const meme = data.url;
            document.getElementById("meme_image").src = (meme);
            document.getElementById("download").href = (meme);
        }
        )
}