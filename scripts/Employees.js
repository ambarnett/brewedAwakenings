import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let employeesHTML = "<ul>"

    for (const employee of employees) {
        employeesHTML += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    employeesHTML += "</ul>"

    return employeesHTML
}

