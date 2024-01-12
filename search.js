
// function myFunction() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName('li');
//   search = document.getElementById('button button2');



//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

    function test() {
        console.log("help");
    }


    function myFuction2() {
        const input = document.getElementById('myInput').value;

        fetch('http://www.omdbapi.com/?apikey=4097db37&s=$' + input)
            .then(response => response.json())
            .then(data => {
                if(data.Response === 'True') {
                    displayMovieInfo(data);
                } else {
                    const movieInfoDiv = document.getElementById('list');
                    movieInfoDiv.innerHTML = '';
                    movieInfoDiv.innerHTML = data.Error;
                }
            })
            .catch(error => console.error('Error ', error));
    }

    function displayMovieInfo(movies) {
        const movieInfoDiv = document.getElementById('box');
        console.log(movies);
        movieInfoDiv.innerHTML = '';

        for(var el in movies.Search) {
            var element = movies.Search[el];

            let movieDiv = document.createElement('div');
            const title = '<h2>' + element.Title + '<h2>';
            const image = '<img src="' + element.Poster + '" alt="' + element.Title + ' Poster"></img>';
            movieDiv.innerHTML = title + image;
            movieInfoDiv.appendChild(movieDiv);
        }


    }