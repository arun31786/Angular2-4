export default class {
    public accNum: number;
    private usedAccNums:{} = {};
    constructor(public name, public age){
        this.accNum = this.getAvailableAccountNumber();
    }

    private getAvailableAccountNumber(){
        let random = Math.floor(Math.random()*1000);
        if(this.usedAccNums[random]){
            this.getAvailableAccountNumber();
        } else {
            this.usedAccNums[random] = random;
            return random;
        }
    }

    public getPrincipalAmount(amount: number, time: number, roi: number): number{
        // code to get principalAmount
        return 0;
    }
}