function VarVsLet() {
    if (5 > 3) {
        var v = "older var";
        let l = "newer let";
    }
    console.log(v);// works fine
//    console.log(l);// error
}

VarVsLet();
