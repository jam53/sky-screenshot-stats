(function(){"use strict";onmessage=function(u){let a=new Set,y=0,d=u.data,p=d.length;for(let e of d){let t=e.name,l,s,n;t.toLowerCase().match(/(am\.[^.]*$|pm\.[^.]*$)/)&&(s=t.match(/(20\d\d).?([0-1]\d).?([0-3]\d)/)||Array(4).fill(""),t=t.replace(s[1],""),t=t.replace(s[2],""),t=t.replace(s[3],""),n=t.match(/([ 12]\d).?([0-5]\d).?([0-5]\d)/)||Array(4).fill(""),s=s.map(o=>parseInt(o)),n=n.map(o=>parseInt(o)),n[1]+=t.toLowerCase().match(/am\.[^.]*$/)?0:12,l=new Date(s[1],s[2]-1,s[3],n[1],n[2],n[3]).getTime()),l||(s=t.match(/(20\d\d).?([0-1]\d).?([0-3]\d)/)||Array(4).fill(""),t=t.replace(s[1],""),t=t.replace(s[2],""),t=t.replace(s[3],""),n=t.match(/([0-2]\d).?([0-5]\d).?([0-5]\d)/)||Array(4).fill(""),s=s.map(o=>parseInt(o)),n=n.map(o=>parseInt(o)),l=new Date(s[1],s[2]-1,s[3],n[1],n[2],n[3]).getTime()),l||(l=e.lastModified),l<Date.now()+2*864e5&&(l+=new Date(l).getTimezoneOffset()*-6e4,a.add(l)),y++;let _=Math.round(y/p*100);postMessage(`Files processed: ${_}% (${y}/${p})`)}postMessage("Sorting screenshots"),a=Array.from(a),a.sort((e,t)=>e-t),postMessage("Generating stats from screenshots");let h=Array(7).fill(0);a.forEach(e=>{let t=new Date(e).getTimezoneOffset()*6e4;return h[new Date(e+t).getDay()]++});let g=Array(7).fill(0);for(let e=1;e<a.length;e++)if(a[e]-a[e-1]<12e5){let t=new Date(a[e]).getTimezoneOffset()*6e4,l=new Date(a[e]+t).getDay();g[l]+=a[e]-a[e-1]}let P=Array(24).fill(0);a.forEach(e=>{let t=new Date(e).getTimezoneOffset()*6e4;return P[new Date(e+t).getHours()]++});let i={};for(let e of a){let t=new Date(e).toISOString().slice(0,10),l=new Date(t).getTime();i[l]=1+(i[l]||0)}let m={};for(let e=1;e<a.length;e++)if(a[e]-a[e-1]<12e5){let t=new Date(a[e]).toISOString().slice(0,10),l=new Date(t).getTime();m[l]=a[e]-a[e-1]+(m[l]||0)}let w=Array(12).fill(0);a.forEach(e=>{let t=new Date(e).getTimezoneOffset()*6e4;return w[new Date(e+t).getMonth()]++});const D=Object.keys(i).map(Number).sort((e,t)=>e-t);let c=0,f=1;for(let e=1;e<D.length;e++)D[e]-D[e-1]===864e5?f++:(c=Math.max(c,f),f=1);c=Math.max(c,f),postMessage("Finishing touches");let r={};r.validFilesAmount=a.length,r.totalFiles=d.length,r.screenshotsPerDay_Week=h,r.millisecondsPerDay_Week=g,r.screenshotsPerHour_Day=P,r.screenshotsPerDay_Playtime=i,r.millisecondsPerDay_Playtime=m,r.screenshotsPerMonth_Playtime=w,r.daysSkyOpened=Object.keys(i).length,r.millisecondsPlayedTotal=g.reduce((e,t)=>e+t,0),r.screenshotsTotal=h.reduce((e,t)=>e+t,0),r.maxScreenshotsOnADay=Math.max(...Object.values(i)),r.maxMillisecondsOnADay=Math.max(...Object.values(m)),r.longestPlayStreak=c,postMessage(r)}})();
