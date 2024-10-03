
const employee = {
    name: "James",
    streetAddress: "000023 Narobi"
  };
  
  

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const { [key]: _, ...newEmployee } = employee; 
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
