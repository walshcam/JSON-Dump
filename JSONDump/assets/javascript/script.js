



    // ****GLOBAL VARIABLES
    let gifSearch;
    let topics = ["dog","mutt","animal rescue","pitbull","greyhound","cur","pug","french bulldog","boxer"];

    //Render initial set of buttons
    renderButtons()

    // Form Javascript

    //     AJAX Function
    $("#findButton").on('click',function() {
        //verify button click worked
        console.log("Button Clicked")
        // save form input as gifSearch
        gifSearch = $("input").val().trim();
        topics.push(gifSearch);
        //verify the saved input is correct and working
        console.log("GIF Search is: " + gifSearch);
        createGIFs()
        renderButtons()
    });

    //Create reference for row
    function createGIFs() {
        //
        $("#gifContainer").empty();
        let gifAmount = 0;

        console.log("DisplayTastyGIFs Function");
        console.log(gifSearch);

        //API Key for giphy.com
        let apiKey = "jSNwEu8AaYEGy9B8SpoaztT8M3KsQrrO";
        let testAPIKey = "dc6zaTOxFJmzC";
        

        //create URL
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifSearch + "&api_key=" + apiKey + "&limit=10";

        console.log(queryURL);

        //AJAX method
        $.ajax({
            url: queryURL,
            method: "GET"
        })

        .then(function(response) {

        // //     // Create new row if 6 pictures are in the first one
        for (let i = 0; i < 2; i++) {
            let row = $("<div>").addClass("row")

            for (let j = 0; j < 5; j++) {

                console.log(response)
                let gifDiv = $("<div>");
                gifDiv.addClass("col");

                //     // Creating and storing an image tag
                let gifImage = $("<img>");

                //     // List of attributes added to each gif
                gifImage.attr("src", response.data[gifAmount].images.fixed_width_still.url);
                gifImage.attr("data-still",response.data[gifAmount].images.fixed_width_still.url);
                gifImage.attr("data-animate",response.data[gifAmount].images.fixed_width.url);
                gifImage.attr("data-state","still");
                //     // Class added to each gif
                gifImage.addClass("gif");
    
                //     // Prepending the catImage to the images div
                $(gifDiv).append(gifImage);

                //     // Append rating under the GIF
                $(gifDiv).append("<br>");

                //     // Append rating and GIF to the row
                $(gifDiv).append("GIF Rating is: " + response.data[gifAmount].rating);
                $(row).append(gifDiv);

                gifAmount++;
            }

            // Append row to container
            $("#gifContainer").append(row);
        }
        });
    }  

    // Adding a click event listener to all the elements displayed
    $(document).on("click", ".savedButton", function() {
        gifSearch = $(this).attr("data-name").trim();
        createGIFs()
    });

    //     Responsive Button Function  
    function renderButtons() {
    //      // Empties buttons everytime function is called so that the list is not repeated

            $("#buttonArea").empty();

            console.log("renderButtons Function Called")
        //     // Then dynamicaly generating buttons for each movie in the array
        for (var i = 0; i < topics.length; i++) {
        //     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
            let a = $("<button>");
        //     // Adding a class of movie-btn to our button
            a.addClass("savedButton");
        //     // Adding a data-attribute
            a.attr("data-name", topics[i]);
        //     // Providing the initial button text
            a.text(topics[i]);
        //     // Adding the button to the buttons-view div
            $("#buttonArea").append(a);

            console.log(gifSearch)
        }
    }
    
    $(document).on("click", ".gif", function() {

    let state = $(this).attr("data-state");

    // Turn a still into an animation on button click
    if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr("data-state", "animate");
      }
      else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state","still");
      }

      //Turn an animated animation into a still on click.
      if (state === 'animate') {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr("data-state", "still");
      }
      else {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state","animate");
      }

    });
