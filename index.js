const employee = {
    name: "John",
    streetAddress: "123 Fake Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,[key]: value,
    }
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee, "name", "Sara"
    
  )

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

const newE = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "name",
    "sara"
  )

function deleteFromEmployeeByKey(employee, key, value) {
    return {
        ...employee, [key]: value,
    }
}

const newEmp = deleteFromEmployeeByKey(
    employee,
    "name"
)
function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value

    return employee
}

delete employee.name