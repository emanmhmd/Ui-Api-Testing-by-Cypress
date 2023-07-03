# Cypress Upload File

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/abramenal/cypress-file-upload/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/cypress-upload-file.svg?style=flat&color=important)](https://www.npmjs.com/package/cypress-upload-file)

Upload any file quickly and easily with cypress! You only need two lines of code to upload it! This library works with cypress in version 5.5.0 and also with higher and lower versions!

## How to install

```bash
npm install --save-dev cypress-upload-file
```

## How to use

`cypress-file-upload` extends Cypress' `cy` command.
Add this line to your project's `cypress/support/commands.js` or `cypress/support/commands.ts` file:

```javascript
import uploadFile from "cypress-upload-file";
```

```javascript
describe("Upload the file", () => {
  it("Upload the file and assert the name of the file uploaded", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");

    // Name of the file in your directory cypress/fixture
    // If yout file is inside another folder you must put the path
    // example 'folderName/blank.pdf'
    const fileName = "blank.pdf";
    // The type extension for this file like: image/png, image/jpeg, video/mp4, application/pdf, text/plain, application/json
    const fileType = "image/png";
    // Selector path to find the input element in UI that we want to upload a file, in our example the element
    // has an id name "file-upload" so we can use here "#file-upload"
    const selector = "#file-upload";

    uploadFile(selector, fileName, fileType);
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("blank");
  });
});
```

## Documentation

```
This function help cypress to upload a file to a file upload input
using any type of file extension: png, jpg, jpeg, gif, pdf, svg, mp4, mp3, docx.
You need to have your file stored in fixtures cypress directory
Call this function with some selector element, with file name, and file type.
File extension types must be input like:
- image/png
- image/jpeg
- image/jpg
- video/mp4
- application/pdf
- application/json
- text/plain
- image/gif
- text/html
- audio/mpeg
- audio/ogg
- audio/mp3

- @param {String} selectorElement Some selector information to find the file upload input element
- @param {String} fileName Name of the file with with its extension, exampĺe image.png
- @param {String} fileType The file type extension like: image/png, image/jpeg, video/mp4, image/gif, application/pdf, text/plain, application/json, audio/mpeg
- @return {VoidFunction} This function don't returned anything
```

## Feature Request

If you have any feature request just open an issue describing your request or feel free with your feature! Any pull pull request are welcome!

## Found an issue?

Register the issue [here](https://github.com/CaiqueCoelho/cypress-upload-file/issues) and wait for us to solve it as soon as possible.
In addition, any contribution is welcome, so feel free to make a pull request if you want to solve any problem :happy:

## License

[MIT](https://github.com/abramenal/cypress-file-upload/blob/master/LICENSE)
