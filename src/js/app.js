define(['riot',  'messages'], function (riot, messages) {

    var app = {
        init : function () {
            require(['tags/todo'], function (){
                riot.mount('todo', { title: 'My TODO app', items: [ {'title':'testando'}, {'title':'testando 2'} ] })
            });
            console.log(messages.getHello());
        }
    }

    return app;
});
