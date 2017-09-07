define(['dojo/dom'], function(dom) {
    return {
        setText: function(id, text) {
            var element = dom.byId(id);
            element.innerHTML = text;
        },
        restoreText: function(id){
            var element = dom.byId(id);
            element.innerHTML = "Hello World";
        }
    };
});