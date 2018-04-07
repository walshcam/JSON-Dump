// ****GLOBAL VARIABLES
let gifSearch;

// Form Javascript

//     AJAX Function

function displayTastyGIFs() {
    console.log("DisplayTastyGIFs Function")

    let apiKey = "jSNwEu8AaYEGy9B8SpoaztT8M3KsQrrO"
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&apikey=" + apiKey;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response)
      renderButtons();
    });
}

$("form").submit(function() {
    console.log("Button Clicked")
    gifSearch = $("input").val();
    console.log("GIF Search is: " + gifSearch);
    displayTastyGIFs()

});

//     Responsive Button Function  
function renderButtons() {

  // Looping through the array of movies
  for (var i = 0; i < movies.length; i++) {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("savedButton");
    // Adding a data-attribute
    a.attr("data-name", gifSearch);
    // Providing the initial button text
    a.text(gifSearch);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}

//     Type In Search 

//     Click Form Button 

//     Add Button to Button List 

//     Remove Display of GIFs 

//     Display GIFs 

// Click button on button List 

//     Remove Display of original GIFs 

//     Display GIFs


// GIFs
//     Default as static image

//     Show full GIF if clicked on 

    