// public/effect.js

document.addEventListener("DOMContentLoaded", function () {
  const $ = window.jQuery;

  if (!$) {
    console.error("jQuery not loaded.");
    return;
  }

  $("#btnAdd, #btnView, #btnEdit, #btnDel").on("click", function () {
    $("#frmForm").toggle(100);
  });
});
