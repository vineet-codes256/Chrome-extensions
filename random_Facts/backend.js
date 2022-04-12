fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(response => response.json())
    .then(data => {
        document.getElementById('fact').innerHTML = data.text;
    });