const e=document.getElementById("statsNumbers");let t=JSON.parse(window.localStorage.getItem("generatedData"));function o(e){let t=Math.floor(e/864e5),o=Math.floor((e%=864e5)/36e5),s=Math.floor((e%=36e5)/6e4),n=Math.round((e%=6e4)/1e3),r="";return 1===t?r+=t+" day ":0!==t&&(r+=t+" days "),1===o?r+=o+" hour ":0!==o&&(r+=o+" hours "),1===s?r+=s+" minute ":0!==s&&(r+=s+" minutes "),1===n?r+=n+" second":0!==n&&(r+=n+" seconds"),r}function s(){setTimeout(()=>{let e=document.getElementById("screenshotsPerHour_Card").offsetHeight;document.getElementById("screensPerMonth_Card").style.height=e+"px"},1e3)}e.innerHTML=`
    <div style="color: white">
        <div class="statsNumbers">
            <svg width="35px" height="35px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            <h5>
                You opened Sky on <em> `+t.daysSkyOpened+` </em> distinct days
            </h5>
        </div>
        <div class="statsNumbers">
            <svg width="35px" height="35px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <h5>
                You played Sky for <em> `+o(t.millisecondsPlayedTotal)+` </em>
            </h5>
        </div>
        <div class="statsNumbers">
            <svg width="35px" height="35px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <h5>
                You took <em> `+new Intl.NumberFormat().format(t.screenshotsTotal)+`</em> screenshots in total.
            </h5>
        </div>
        <div class="statsNumbers">
            <svg width="35px" height="35px" stroke="currentColor" fill="transparent" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            <h5>
                The most amount of screenshots you took on one day was <em> `+new Intl.NumberFormat().format(t.maxScreenshotsOnADay)+` </em>
            </h5>
        </div>
        <div class="statsNumbers">
            <svg width="35px" height="35px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h5>
                Your longest play session lasted <em> `+o(t.maxMillisecondsOnADay)+` </em>
            </h5>
        </div>
    </div>
    `,s(),window.onresize=s;
//# sourceMappingURL=stats.c60c58d5.js.map
