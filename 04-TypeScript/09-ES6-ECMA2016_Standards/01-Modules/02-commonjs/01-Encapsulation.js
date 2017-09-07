module.exports.myRevealingModule = (function () {
    var name = "",
        age = 0

    function privateFunction() {
        console.log( "Name: " + name );
        console.log( "Age: " + age );
        return {"name": name, "age": age};
    }

    function publicSetName( newName ) {
        name = newName;
    }

    function publicSetAge( newAge ) {
        age = newAge;
    }

    function publicGetObject() {
        privateFunction();
    }

    // Reveal public pointers to
    // private functions and properties
    return {
        setName: publicSetName,
        setAge: publicSetAge,
        getObject: publicGetObject
    };
})();

/*console.log(myRevealingModule);

myRevealingModule.setName( "Arun Kumar" );
myRevealingModule.setAge( 32 );

console.log(myRevealingModule)

myRevealingModule.getObject();*/