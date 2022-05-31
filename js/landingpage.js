/**
 * Executes when the user clicks on the folder picker button.
 * Processes the files and generates data from the files
 * When ready, we write the generated data to localStorage + open the stats.html page. Where we will read in the values from localStorage
 */
document.getElementById("folder").addEventListener("change", function (event)
{
    document.getElementById("folder").className = "hidden";
    document.getElementById("loadingIcon").className = "";
    const loadingText = document.getElementById("loadingText");

    let worker = new Worker(new URL("./WebWorkers/GenerateCreationDates.js", import.meta.url));

    const files = ([...event.target.files]).filter(file => file && file['type'].split('/')[0] === 'image'); //Remove all non image files
    worker.postMessage(files);

    worker.onmessage = function (event)
    {
        if (typeof event.data !== "string")
        {
            let generatedData = event.data;

            console.log(generatedData);

            // window.localStorage.setItem("validFilesAmount", JSON.stringify(creationDates.size)); //Amount of files that will be used to generate the files
            // window.localStorage.setItem("totalFiles", JSON.stringify(files.length)); //The amount of files that the user uploaded. This will later be used to show how many files were valid out of the total amount uploaded
            // window.localStorage.setItem("creationDates", JSON.stringify(creationDates)); //Save the creationDates of all the valid screenshots
            //
            // window.location.href = "/stats.html"; //Open stats page
        }
        else
        {
            loadingText.innerText = event.data;
        }
    };
}, false);
