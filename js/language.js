document.querySelectorAll(".language_select").forEach(function (e) {
    e.addEventListener("change", function () {
      var t = e.value;
      window.location.href = t;
    });
  });