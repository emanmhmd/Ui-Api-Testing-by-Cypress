import hexStringToByte from "./utils";

/**
 * This function help cypress to upload a file to a file upload input
 * using any type of file extension: png, jpg, jpeg, gif, pdf, svg, mp4, mp3, docx.
 * You need to have your file stored in fixtures cypress directory
 * Call this function with some selector element, with file name, and file type.
 * File types must be input like:
 * - image/png
 * - image/jpeg
 * - image/gif
 * - image/jpg
 * - video/mp4
 * - application/pdf
 * - application/json
 * - text/plain
 * - text/html
 * - audio/mpeg
 * - audio/ogg
 * - audio/mp3
 *
 * @param  {String} selectorElement Some selector information to find the file upload input element
 * @param  {String} fileName Name of the file with with its extension, exampĺe image.png
 * @param {String}      fileType The file type extension like: image/png, image/jpeg, video/mp4, image/gif, application/pdf, text/plain, application/json, audio/mpeg
 * @return {VoidFunction}      This function don't returned anything
 */

function uploadFile(selectorElement, fileName, fileType) {
  cy.get(selectorElement).then((subject) => {
    cy.fixture(fileName, "hex").then((fileHex) => {
      const fileBytes = hexStringToByte(fileHex);
      const testFile = new File([fileBytes], fileName, {
        type: fileType,
      });
      const dataTransfer = new DataTransfer();
      const el = subject[0];

      dataTransfer.items.add(testFile);
      el.files = dataTransfer.files;

      Cypress.log({
        name: "uploadFile",
        displayName: "FILE",
        message: fileName,
      });
    });
  });
}

export default uploadFile;
