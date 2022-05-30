/**
 * Executes when the user clicks on the folder picker button.
 * Processes the files and generates data from the files
 * When ready, we write the generated data to localStorage + open the stats.html page. Where we will read in the values from localStorage
 */
document.getElementById("folder").addEventListener("change", function (event)
{
    const creationDates = new Set(); //This set contains the creation date of all (valid) files in Unix time

    const files = ([...event.target.files]).filter(file => file && file['type'].split('/')[0] === 'image'); //Remove all non image files

    for (let file of files)
    {
        let fileName = file.name;
        let dateTime; //The dateTime the screenshot was taken, in Unix time, adjusted to the user's local timezone

        let matchesDate;
        let matchesTime;

        //region IOS (Extract Unix time from filename)
        if (fileName.toLowerCase().match(/(am\.[^.]*$|pm\.[^.]*$)/))
        {
            matchesDate = fileName.match(/(20\d\d).?([0-1]\d).?([0-3]\d)/) || Array(4).fill("");

            fileName = fileName.replace(matchesDate[1], "");
            fileName = fileName.replace(matchesDate[2], "");
            fileName = fileName.replace(matchesDate[3], "");

            matchesTime = fileName.match(/([ 12]\d).?([0-5]\d).?([0-5]\d)/) || Array(4).fill("");

            matchesDate = matchesDate.map(match => parseInt(match));
            matchesTime = matchesTime.map(match => parseInt(match));

            matchesTime[1] += fileName.toLowerCase().match(/am\.[^.]*$/) ? 0 : 12;

            dateTime = (new Date(matchesDate[1], matchesDate[2] - 1, matchesDate[3], matchesTime[1], matchesTime[2], matchesTime[3])).getTime();
        }
        //endregion

        //region Android (Extract Unix time from filename)
        if (!dateTime) //If we don't have a valid dateTime yet
        {
            matchesDate = fileName.match(/(20\d\d).?([0-1]\d).?([0-3]\d)/) || Array(4).fill("");

            fileName = fileName.replace(matchesDate[1], "");
            fileName = fileName.replace(matchesDate[2], "");
            fileName = fileName.replace(matchesDate[3], "");

            matchesTime = fileName.match(/([0-2]\d).?([0-5]\d).?([0-5]\d)/) || Array(4).fill("");

            matchesDate = matchesDate.map(match => parseInt(match));
            matchesTime = matchesTime.map(match => parseInt(match));

            dateTime = (new Date(matchesDate[1], matchesDate[2] - 1, matchesDate[3], matchesTime[1], matchesTime[2], matchesTime[3])).getTime();
        }
        //endregion

        //region file.lastModified (Extract Unix time from file's properties)
        if (!dateTime)
        {
            dateTime = file.lastModified;
        }
        //endregion

        //Check whether or not the date is valid. I.e. Sky cotl release date < dateTime < present date + two days
        if (1514761200000 < dateTime && dateTime < Date.now() + (2 * 86400000))
        {
            dateTime += (new Date(dateTime)).getTimezoneOffset() * -60000; //Adjust for local timezone
            creationDates.add(dateTime);
        }
    }


    window.localStorage.setItem("validFilesAmount", JSON.stringify(creationDates.size)); //Amount of files that will be used to generate the files
    window.localStorage.setItem("totalFiles", JSON.stringify(files.length)); //The amount of files that the user uploaded. This will later be used to show how many files were valid out of the total amount uploaded
    window.localStorage.setItem("creationDates", JSON.stringify(creationDates)); //Save the creationDates of all the valid screenshots

    window.location.href = "/stats.html"; //Open stats page
}, false);



