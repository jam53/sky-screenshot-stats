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

            window.localStorage.setItem("generatedData", JSON.stringify(generatedData)); //Save the data to localStorage, so that the stats.html page can load it in later

            window.location.href = "/stats.html"; //Open stats page
        }
        else
        {
            loadingText.innerText = event.data;
        }
    };
}, false);
