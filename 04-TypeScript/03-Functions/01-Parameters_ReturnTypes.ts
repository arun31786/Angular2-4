
function showDetails(firstName: string, lastName: string, age:number): string {
    let details = 'Your fullname is '+ firstName +' '+lastName+'\n';
    details = details + 'Your age is ' + age + '\n';

    return details;
}


console.log(showDetails('Arun','Kumar',34));
//console.log(showDetails('Arun','Kumar',true));// compilation error