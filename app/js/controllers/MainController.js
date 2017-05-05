/**
 * Created by italohmb on 17/01/17.
 */

app.controller('MainController', function() {

    var self = this;
    
    (function main() {

        var newEle = angular.element("<div>ohytrytrytroi</div>");
        var target = document.getElementById('test');
        angular.element(target).append(newEle);
    })();
});
