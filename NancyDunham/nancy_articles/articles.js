d3.csv("articles.csv", function (error, retrievedData) {
    console.log("%ccsv function called!", "color: green; font-weight: bold")

    //Read csv file and convert properties to numeric as needed
    fillDataArrays(retrievedData);
});
function fillDataArrays(retrievedData) {
    console.log("%cfillDataArrays function called!", "color:DarkGreen; font-weight: bold");
    console.log("retrievedData array:");
    console.table(retrievedData);

    //Note that we are not creating a new data array here,
    //  just modifying the retrievedData array!!
    retrievedData.forEach(function (d, i) {
        d.Title = +d.title,
        d.Picture = +d.picture,
        d.Publisher  = +d.publisher;
    });

    console.log("Modified retrievedData array: ")
    console.table(retrievedData);
    console.log(" ");
}


