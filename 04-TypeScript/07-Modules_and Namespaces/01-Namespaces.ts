

namespace Account {
    export function createAccount(customer:string) {
        console.log("Creating multiple accounts for " + customer);
    }

    //nested namespace 1

    export namespace SavingsAccount {
        export function roi(){
            console.log("ROI for savings account is "+3.5+"%.");
            // return 4;
        }
    }
    //nested namespace 2
    export namespace CurrentAccount {
        export function roi(){
            console.log("ROI for savings account is "+5.5+"%.");
            // return 6;
        }
    }
}

