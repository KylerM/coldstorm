﻿Directives.directive("lineauthor", function ()
{
    return {
        controller: "LineAuthorCtrl",
        replace: true,
        restrict: "E",
        scope: { user: "=user", channel: "=channel" },
        templateUrl: "views/lineauthor.html",
        transclude: true
    }
});