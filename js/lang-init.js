(function () {
  var lang = localStorage.getItem("fayhaa-lang");
  if (lang !== "en" && lang !== "ar") lang = "ar";
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
})();
