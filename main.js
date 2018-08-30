/***************************************************\
| Devin's Change Calculator                         |
| created 8/17/2018                                 |
`***************************************************/
// Click handler
document.getElementById('calculate-change').addEventListener('click', calculateTotalChange);

// Calculate
function calculateTotalChange () {
    var due             = parseInt(document.getElementById('amount-due').value * 100); 
    var recd            = parseInt(document.getElementById('amount-received').value * 100);
    var totalMoneyDue   = (recd - due) // keep in pennies
    var wholeDollars    = Math.floor(totalMoneyDue / 100) * 100 // keep in pennies
    var changeOnlyDue   = (totalMoneyDue - wholeDollars);   // in pennies
    var quarters        = Math.floor(changeOnlyDue / 25);
        changeOnlyDue  -= quarters * 25;    
    var dimes           = Math.floor(changeOnlyDue / 10);
        changeOnlyDue  -= dimes * 10;
    var nickels         = Math.floor(changeOnlyDue / 5);         
        changeOnlyDue  -= nickels * 5;
    var pennies         = Math.floor(changeOnlyDue / 1);        
        changeOnlyDue  -= pennies * 1;

// Display coin count on webpage    
    document.getElementById('dollars-output').innerHTML = wholeDollars / 100;
    document.getElementById('quarters-output').innerHTML = quarters;
    document.getElementById('dimes-output').innerHTML = dimes;
    document.getElementById('nickels-output').innerHTML = nickels;
    document.getElementById('pennies-output').innerHTML = pennies;
    document.getElementById('totalChange-output').innerHTML = "Total due customer $" + totalMoneyDue /100;
console.log(due)
console.log(recd)
console.log(totalMoneyDue)
}
