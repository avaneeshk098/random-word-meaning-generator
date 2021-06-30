const randomWord = function(req, res){
    if(req.method === 'GET'){
        var word = ""
        fetch("https://random-word-api.herokuapp.com/word?number=1")
        .then(response => {
            return response.json();
        })
        .then(response => {
            word = response[0]
            fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=f107334b-d27d-4a4e-a42f-9cf46bd32c6b`)
            .then(response => {
                return response.json()
            })
            .then(response => {
                res.status(200).json({randWord: word, def: response[0].shortdef})
            })
            .catch(err => console.log(err))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default randomWord

