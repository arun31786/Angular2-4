function createCustomerId(name: string, id: number): string{
    return name+id;
}
/*
 let idGenerator: (chars:string, nums: number) => string;
 idGenerator = createCustomerId;
 */

interface stringGenerator{
    (chars: string, nums: number): string;
}

let idGenerator: stringGenerator;
idGenerator = createCustomerId;