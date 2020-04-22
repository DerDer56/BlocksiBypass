javascript: (function() {
  alert("Thank you for using the SudoTeam bypass method!");
  var choice = prompt(
    "Enter (GO) to go to a blocked site and (R) to un-blocksi all links on this site so you can continue browsing."
  );
  if (choice == "GO") {
    var url = prompt("Enter a URL to be unblocked (in domain.tld format).");
    if (url != null) {
      location.replace("https://" + url + "/?ghlpmldmjjhmdgmneoaibbegkjjbonbk");
    }
  }
  if (choice == "R") {
    alert("Done!");
    $("a[href]").each(function() {
      var elem = $(this);
      var href = elem.attr("href");
      elem.attr(
        "href",
        href +
          (href.indexOf("?") != -1 ? "&" : "?") +
          "ghlpmldmjjhmdgmneoaibbegkjjbonbk"
      );
    });
  }
})();
