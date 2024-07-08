function netSalaryCalc(basicSalary, benefits){
    const grossSalary = basicSalary + benefits;

    let paye;
    if (grossSalary <= 24000){
        paye = grossSalary * 0.1;
    }else if(grossSalary<= 32333){
        paye = grossSalary * 0.25
    }else if (grossSalary > 32333){
        paye = grossSalary * 0.30
    }


    const nhif = grossSalary*0.015;
    const housingLevy = grossSalary * 0.015;
    const nssf = grossSalary * 0.06;
    const netSalary = grossSalary - (paye + nhif + nssf + housingLevy);
 
    return {
        grossSalary: grossSalary.toFixed(2),
        paye: paye.toFixed(2),
        housingLevy: housingLevy.toFixed(2),
        nhif: nhif.toFixed(2),
        nssf: nssf.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}
 
console.log(netSalaryCalc(70000, 5000));
