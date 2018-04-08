



    // ****GLOBAL VARIABLES
    let gifSearch;

    // Form Javascript

    //     AJAX Function
    $("#findButton").on('click',function() {
        //verify button click worked
        console.log("Button Clicked")
        // save form input as gifSearch
        gifSearch = $("input").val().trim();
        //verify the saved input is correct and working
        console.log("GIF Search is: " + gifSearch);
        createGIFs()
        renderButtons()
    });

    // function displayTastyGIFs() {
    //     console.log("DisplayTastyGIFs Function");
    //     console.log(gifSearch);

    //     //API Key for giphy.com
    //     let apiKey = "jSNwEu8AaYEGy9B8SpoaztT8M3KsQrrO";
    //     let testAPIKey = "dc6zaTOxFJmzC";
        

    //     //create URL
    //     let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + testAPIKey + "&tag=" + gifSearch;

    //     console.log(queryURL);

    //     //AJAX method
    //     $.ajax({
    //         url: queryURL,
    //         method: "GET"
    //     })
        
    //     .then(function(response) {
    //         console.log(response)
    //         gifCreation = response;
    //     //ensure ajax is working
    //     //create saved button from response
    //     });
    // }
    //Create reference for row
    function createGIFs() {
        //
        $("#gifContainer").empty();


        // //     // Create new row if 6 pictures are in the first one
        for (let i = 0; i < 3; i++) {
            let row = $("<div>").addClass("row")

            for (let j = 0; j < 3; j++) {
                console.log("DisplayTastyGIFs Function");
                console.log(gifSearch);

                //API Key for giphy.com
                let apiKey = "jSNwEu8AaYEGy9B8SpoaztT8M3KsQrrO";
                let testAPIKey = "dc6zaTOxFJmzC";
                

                //create URL
                let queryURL = "https://api.giphy.com/v1/gifs/random?api_key=" + testAPIKey + "&tag=" + gifSearch;

                console.log(queryURL);

                //AJAX method
                $.ajax({
                    url: queryURL,
                    method: "GET"
                })
        
                .then(function(response) {
                    console.log(response)
                    let gifDiv = $("<div>");
                    gifDiv.addClass("col");

                    //     // Creating and storing an image tag
                    let gifImage = $("<img>");

                    //     // List of attributes added to each gif
                    gifImage.attr("src", response.data.images.fixed_width_still.url);
                    gifImage.attr("data-still",response.data.images.fixed_width_still.url);
                    gifImage.attr("data-animate",response.data.images.fixed_width.url);
                    gifImage.attr("data-state","still");
                    //     // Class added to each gif
                    gifImage.addClass("gif");
        
                    //     // Prepending the catImage to the images div
                    $(gifDiv).append(gifImage);
                    $(row).append(gifDiv);
                });
            // Append row to container
            $("#gifContainer").append(row);
            }
        }
    }  

    // Adding a click event listener to all the elements displayed
    $(document).on("click", ".savedButton", function() {
        gifSearch = $(this).attr("data-name");
        createGIFs()
    });

    //     Responsive Button Function  
    function renderButtons() {
        console.log("renderButtons Function Called")
    //     // Then dynamicaly generating buttons for each movie in the array
    //     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        let a = $("<button>");
    //     // Adding a class of movie-btn to our button
        a.addClass("savedButton");
    //     // Adding a data-attribute
        a.attr("data-name", gifSearch);
    //     // Providing the initial button text
        a.text(gifSearch);
    //     // Adding the button to the buttons-view div
        $("#buttonArea").append(a);

        console.log(gifSearch)
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
