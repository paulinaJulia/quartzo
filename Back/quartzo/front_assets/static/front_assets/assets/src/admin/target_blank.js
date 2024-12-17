$(document).ready(function () {
  // Deixa todos as tags a que estão dentro do form com target _blank
  const tagsA = document.querySelectorAll(`
  .file-upload > a,
  .url > a,
  .readonly > a`);

  tagsA && tagsA.forEach((element) => element.setAttribute("target", "_blank"));
});
