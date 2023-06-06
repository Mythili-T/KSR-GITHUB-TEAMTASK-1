function Employee(empName, empId, baseSalary) {
    this.empName = empName;
    this.empId = empId;
    this.baseSalary = baseSalary;
    this.monthlyBonus=1200;

    this.calSalary=function(){
        let salary=baseSalary+monthlyBonus;
        console.log('Final Salary: '+ salary);
    }

    this.getEmpDetails=function(){
        console.log('Name : '+ this.empName+ 'ID : '+ this.empId);
        this.calSalary();
    }

}
let emp1=new Employee('Swetha',84,40000);
emp1.getEmpDetails();
