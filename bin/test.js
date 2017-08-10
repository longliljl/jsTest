/**
 * Created by longli on 2017/7/12.
 */
var n = 10;
console.log(n);
class Foo {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log('hello, this is ', this.name)
    }

    someThingAsync() {
        return Promise.resolve()
    }

    asyncGreet() {
        this.someThingAsync()
            .then(this.greet)
    }
}
new Foo('dog').asyncGreet()