(function() {
  "use strict";

  angular
    .module("explorer", [
      "ui.router",
      "explorer.config",
      "explorer.layout",
      "explorer.subjects",
      "explorer.blocks",
      "explorer.transactions",
      "explorer.stats"
    ]);
})();