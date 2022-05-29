const root = document.getElementById("root");
root.className = "landingpage";

let description = document.createElement("h1");
description.innerHTML = "Sky Screenshot Stats";

let folderPicker = document.createElement("folder-picker");

root.append(description, folderPicker);
