const root = document.getElementById("root");
root.className = "landingpage";

let description = document.createElement("h1");
description.innerHTML = "Almost before we knew it, we had left the ground.";

let folderPicker = document.createElement("folder-picker");

root.append(description, folderPicker);
