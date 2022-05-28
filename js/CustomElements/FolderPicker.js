/**
 * This Web component consists of a label and an input element.
 * Upon clicking on the label, the user will be prompted to select a folder.
 */
class FolderPicker extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = `
            <label for="file-upload" class="custom-file-upload">
                Click here to select your folder containing Sky Screenshots
            </label>
            <input id="file-upload" type="file" webkitdirectory multiple/>`;
    }
}

customElements.define("folder-picker", FolderPicker);
