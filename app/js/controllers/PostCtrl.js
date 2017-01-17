/**
 * Created by italohmb on 17/01/17.
 */

app.controller('PostCtrl', function (messages){

    var self = this;

    self.newMessage = '';

    self.addMessage = function(message){
        messages.add(message);
        self.newMessage = '';
    };
});