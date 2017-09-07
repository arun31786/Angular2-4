var app;
(function (app) {
    var Greeter = (function () {
        function Greeter(greeting) {
            this.greeting = greeting;
        }
        Greeter.prototype.greet = function () {
            console.log(this.greeting);
            if (this.greeting.trim().length > 0) {
                document.getElementById("greetElement").innerText = this.greeting;
                document.getElementById("error").innerText = "";
            }
            else {
                document.getElementById("error").innerText = "You can not leave it blank...";
            }
        };
        return Greeter;
    }());
    app.Greeter = Greeter;
})(app || (app = {}));
document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("btnGreet");
    btn.addEventListener("click", function () {
        var name = document
            .getElementById("txtName")
            .value;
        var greeter = new app.Greeter(name);
        greeter.greet();
    });
});
