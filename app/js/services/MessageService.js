/**
 * Created by italohmb on 17/01/17.
 */

app.factory('messages', function(){
    var messages = {};

    messages.list = [];

    messages.add = function(message){
        messages.list.push({id: messages.list.length, text: message});
    };

    return messages;
});