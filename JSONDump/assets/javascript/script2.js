// ****GLOBAL VARIABLES
let gifSearch;
let gifCount = 0;
let rowCount = 1;

// Form Javascript

//     AJAX Function

function displayTastyGIFs() {
    //Ensure function is working
    console.log("DisplayTastyGIFs Function")

    //API Key for giphy.com
    let apiKey = "jSNwEu8AaYEGy9B8SpoaztT8M3KsQrrO"

    //create URL
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&apikey=" + apiKey;

    //AJAX method
    $.ajax({
      url: queryURL,
      method: "GET"

      //Promise
    }).then(function(response) {
      //ensure ajax is working
      console.log(response)
      //create saved button from response
    //   renderButtons();
    //   showGIF();
    });
}

// Submit Form Button Clicked
$("#formButton").on('click',function() {
    //verify button click worked
    console.log("Button Clicked")
    // save form input as gifSearch
    gifSearch = $("input").val();
    //verify the saved input is correct and working
    console.log("GIF Search is: " + gifSearch);
    //transfer searched input to AJAX
    displayTastyGIFs()

});

//     Responsive Button Function  
function renderButtons() {

    // Then dynamicaly generating buttons for each movie in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    let a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("savedButton");
    // Adding a data-attribute
    a.attr("data-name", gifSearch);
    // Providing the initial button text
    a.text(gifSearch);
    // Adding the button to the buttons-view div
    $("#buttonArea").append(a);
}

//     Remove Display of GIFs 

//     Display GIFs 

// Click button on button List 

//     Remove Display of original GIFs 

//     Display GIFs
function showGIF() {

    // Create new row if 6 pictures are in the first one
    if (gifCount % 6){
      rowCount++;
      let row = $("<div>").addClass("row").attr("value",rowCount);
      row.insertAfter($("row").attr("value",rowCount-1));
      let gifDiv = $("<div>");
      gifDiv.addClass("col-md-2");
      $(row).append(gifDiv);
    }
    //Add one to the gif count to keep track of the number of images
    gifCount++;


    //create div that contains the image
    let gifDiv = $("<div>");
    gifDiv.addClass("col-md-2");
    $(row).append(gifDiv);

    // Creating and storing an image tag
    let gifImage = $("<img>");

    // List of attributes added to each gif
    gifImage.attr("src", imageUrl);
    gifImage.attr("data-still","#");
    gifImage.attr("data-animate","#");
    gifImage.attr("data-state","still");

    //class added to each gif
    gifImage.addClass("gif");

    // Prepending the catImage to the images div
    $(gifDiv).append(gifImage);
}


// GIFs
//     Default as static image

//     Show full GIF if clicked on 

 