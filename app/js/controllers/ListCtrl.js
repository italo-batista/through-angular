/**
 * Created by italohmb on 17/01/17.
 */

app.controller('ListCtrl', function (messages){
    var self = this;

    self.messages = messages.list;
});