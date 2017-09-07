function Book1(){
    let self = this;
    self.publishDate = '15May2016';
    setInterval(function() {
        console.log(self.publishDate);
    }, 2000);
}


function Book2(){
    this.publishDate = '15May2016';
    setInterval( () => {
        console.log(this.publishDate);
    }, 2000);
}