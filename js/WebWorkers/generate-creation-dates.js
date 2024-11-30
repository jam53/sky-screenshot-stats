/**
 * This WebWorker generates the CreationDates of all the screenshots
 *
 * By using WebWorkers, we try ot avoid freezing the page, while processing the files.
 * All the processing is handled separately from the UI thread, therefore the page doesn't get frozen.
 * However, when the user selects a large amount of files, lets say about 20K.
 * In that case the page will still freeze initially. We can't do anything about this however,
 * since it's the browser itself that is busy with collecting the files. At that point we aren't doing any
 * calculations yet inside any of our scripts.
 */
onmessage = function process(event)
{
    let creationDates = new Set(); //This set contains the creation date of all (valid) files in Unix time

    let filesProcessed = 0;
    let files = event.data;
    let totalFiles = files.length;

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

        //region file.lastModified (Extract Unix time from the file's properties)
        if (!dateTime)
        {
            dateTime = file.lastModified;
        }
        //endregion

        //Check whether or not the date is valid. I.e. dateTime < present date + two days
        if (dateTime < Date.now() + (2 * 86400000))
        {
            dateTime += (new Date(dateTime)).getTimezoneOffset() * -60000; //Adjust for local timezone
            creationDates.add(dateTime);
        }

        filesProcessed++;
        let percentProcessed = Math.round((filesProcessed / totalFiles) * 100);
        postMessage(`Files processed: ${percentProcessed}% (${filesProcessed}/${totalFiles})`);
    }

    postMessage("Sorting screenshots");
    creationDates = Array.from(creationDates);
    creationDates.sort((a, b) => a - b);

    postMessage("Generating stats from screenshots");
    //region amount of screenshots per day of the week
    let screenshotsPerDay_Week = Array(7).fill(0); //Sunday being 0, Saturday being 6
    creationDates.forEach(timestamp => {
        let offset = (new Date(timestamp)).getTimezoneOffset() * 60000; //Adjust for local timezone
        return screenshotsPerDay_Week[(new Date(timestamp + offset)).getDay()]++
    });
    //endregion

    //region milliseconds per day played, per day of the week ~ this is an average
    let millisecondsPerDay_Week = Array(7).fill(0); //Sunday - 0, Saterday - 6
    for (let i = 1; i < creationDates.length; i++)
    {
        if (creationDates[i] - creationDates[i - 1] < 1200000)
        {//If there is less than 20 minutes between the two screenshots.
            let offset = (new Date(creationDates[i])).getTimezoneOffset() * 60000; //Adjust for local timezone
            let day = (new Date(creationDates[i] + offset)).getDay(); //Sunday - 0, Saturday - 6

            millisecondsPerDay_Week[day] += creationDates[i] - creationDates[i - 1];
        }
    }
    //endregion

    //region amount of screenshots per hour of the day
    let screenshotsPerHour_Day = Array(24).fill(0); //0 = 00:00 ; 23 = 12pm
    creationDates.forEach(timestamp => {
        let offset = (new Date(timestamp)).getTimezoneOffset() * 60000; //Adjust for local timezone
        return screenshotsPerHour_Day[(new Date(timestamp + offset)).getHours()]++
    });
    //endregion

    //region amount of screenshots per day, for every day played
    let screenshotsPerDay_Playtime = {};

    for (let timestamp of creationDates)
    {
        let yyyy_mm_dd = (new Date(timestamp)).toISOString().slice(0,10); //This outputs the day in: "yyyy-mm-dd"
        let day = (new Date(yyyy_mm_dd)).getTime(); //Timestamp in Unix, representing the day the screenshot was taken.

        screenshotsPerDay_Playtime[day] = 1 + (screenshotsPerDay_Playtime[day] || 0);
    }
    //endregion

    //region milliseconds per day played, for every day played ~ this is an average
    let millisecondsPerDay_Playtime = {}; //key: Day in Unix time, value: amount of milliseconds that day played.
    for (let i = 1; i < creationDates.length; i++)
    {
        if (creationDates[i] - creationDates[i - 1] < 1200000)
        {//If there is less than 20 minutes between the two screenshots.
            let yyyy_mm_dd = (new Date(creationDates[i])).toISOString().slice(0,10); //This outputs the day in: "yyyy-mm-dd"
            let dayInUnix = (new Date(yyyy_mm_dd)).getTime();

            millisecondsPerDay_Playtime[dayInUnix] = creationDates[i] - creationDates[i - 1] + (millisecondsPerDay_Playtime[dayInUnix] || 0);
        }
    }
    //endregion

    //region screenshots per month, for every month played
    let screenshotsPerMonth_Playtime = Array(12).fill(0); //0 = jan ; 11 = dec
    creationDates.forEach(timestamp => {
        let offset = (new Date(timestamp)).getTimezoneOffset() * 60000; //Adjust for local timezone
        return screenshotsPerMonth_Playtime[(new Date(timestamp + offset)).getMonth()]++
    });
    //endregion

    //region longest play streak, as in the most consecutive days played
    const timestamps = Object.keys(screenshotsPerDay_Playtime).map(Number).sort((a, b) => a - b);

    let longestPlayStreak = 0;
    let currentPlayStreak = 1;

    for (let i = 1; i < timestamps.length; i++)
    {
        // Check if the current timestamp is exactly 1 day after the previous one
        if(timestamps[i] - timestamps[i - 1] === 86400000)
        {
            currentPlayStreak++;
        }
        else
        {
            longestPlayStreak = Math.max(longestPlayStreak, currentPlayStreak);
            currentPlayStreak = 1;
        }
    }

    longestPlayStreak = Math.max(longestPlayStreak, currentPlayStreak);
    //endregion

    postMessage("Finishing touches");
    let generatedData = {};
    generatedData["validFilesAmount"] = creationDates.length;
    generatedData["totalFiles"] = files.length;
    generatedData["screenshotsPerDay_Week"] = screenshotsPerDay_Week;
    generatedData["millisecondsPerDay_Week"] = millisecondsPerDay_Week;
    generatedData["screenshotsPerHour_Day"] = screenshotsPerHour_Day;
    generatedData["screenshotsPerDay_Playtime"] = screenshotsPerDay_Playtime;
    generatedData["millisecondsPerDay_Playtime"] = millisecondsPerDay_Playtime;
    generatedData["screenshotsPerMonth_Playtime"] = screenshotsPerMonth_Playtime;

    generatedData["daysSkyOpened"] = Object.keys(screenshotsPerDay_Playtime).length;
    generatedData["millisecondsPlayedTotal"] = millisecondsPerDay_Week.reduce((partialSum, a) => partialSum + a, 0); //Takes the sum
    generatedData["screenshotsTotal"] = screenshotsPerDay_Week.reduce((partialSum, a) => partialSum + a, 0); //Takes the sum
    generatedData["maxScreenshotsOnADay"] = Math.max(...(Object.values(screenshotsPerDay_Playtime)));
    generatedData["maxMillisecondsOnADay"] = Math.max(...(Object.values(millisecondsPerDay_Playtime)));
    generatedData["longestPlayStreak"] = longestPlayStreak;


    postMessage(generatedData); //Passing data back to the script that created this worker
};
