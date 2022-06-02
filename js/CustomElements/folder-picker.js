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
                    <svg width="60px" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>

                <br>

                <input id="file-upload" type="file" webkitdirectory multiple/>
                Click <b>here</b> to select your folder containing Sky Screenshots
            </label>`;

    }
}

customElements.define("folder-picker", FolderPicker);
