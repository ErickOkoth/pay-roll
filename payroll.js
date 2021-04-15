const basicSalary = document.getElementById('basic_salary').value;
const houseAllowance = document.getElementById('house_allowance').value;
const nhif = document.getElementById('nhif').value;
const dogAllowance = document.getElementById('dog_allowance').value;
const paye = document.getElementById('paye').value;

function calculatePayroll() {
    var totalAllowances = parseInt(houseAllowance)+ parseInt(dogAllowance);
    var totalDeductions = parseInt(nhif) + parseInt(paye);
    var expenses = totalAllowances+totalDeductions;
    var taxableIncome = parseInt(basicSalary) + parseInt(totalAllowances) +parseInt(totalDeductions);
    var netIncome = parseInt(basicSalary) - expenses;
    
    document.getElementById('BS').innerHTML = basicSalary;
    document.getElementById('TA').innerHTML = totalAllowances;
    document.getElementById('TD').innerHTML = totalDeductions;
    document.getElementById('TI').innerHTML = taxableIncome;
    document.getElementById('NI').innerHTML = netIncome;


    
    //so
}

const calcButton = document.getElementById('calc');

calcButton.addEventListener('click', calculatePayroll);


function printPayroll(){
var payroll= new jsPDF;
var elementHtml = $('#content').html();
var specialElementHandlers={
    'payroll':function(element,renderer){
        return true;
    }
};
payroll.fromHTML(elementHtml, 15, 15, {
    'width':170,
    'elementHandlers':specialElementHandlers
});
payroll.save('sample-payroll.pdf');


}   
    /*var w = window.open("about:blank");
    if (navigator.appName == 'Microsoft Internet Explorer')
    window.print();
    else w.print(); 
    */
    /**********
     * 
     */
