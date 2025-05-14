const Employee = require('../models/employeeModel');

class EmployeeController {
  // Get all employees
  static getEmployees(req, res) {
    Employee.getAllEmployees((err, data) => {
      if (err) {
        console.error('Error fetching employees:', err);
        return res.status(500).json({ error: 'Failed to fetch employees' });
      }
      res.status(200).json(data);
    });
  }

  // Create a new employee
  static createEmployee(req, res) {
    const { FullName, position, Department, salary, email } = req.body;

    if (!FullName || !position || !Department || !salary) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newEmployee = { FullName, position, Department, salary, email };
    Employee.insertEmployee(newEmployee, (err, result) => {
      if (err) {
        console.error('Error inserting employee:', err);
        return res.status(500).json({ error: 'Failed to insert employee' });
      }

      res.status(201).json({ message: 'Employee created successfully', id: result.insertId });
    });
  }
      // UPDATE an existing employee
    static updateEmployee(req, res) {
      const employeeId = req.params.id;
      const { FullName, position, Department, salary } = req.body;
  
      if (!FullName || !position || !Department || !salary) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const updatedData = { FullName, position, Department, salary };
  
      Employee.updateEmployee(employeeId, updatedData, (err, result) => {
        if (err) {
          console.error('Error updating employee:', err);
          return res.status(500).json({ error: 'Failed to update employee' });
        }
  
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Employee not found' });
        }
  
        res.status(200).json({ message: 'Employee updated successfully' });
      });
    }

    //Delete employee
    static deleteEmployee(req, res) {
      const employeeId = req.params.id;

      Employee.deleteEmployee(employeeId, (err, result) => {
        if (err) {
          console.error('Error deleting employee:', err);
          return res.status(500).json({ error: 'Failed to delete employee' });
        }
    
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: 'Employee not found' });
        }

        else
        res.status(200).json({ message: 'Employee deleted successfully' });

      });
    }

    //Get employee by Id
    static getEmployeeById(req, res) {
      const employeeId = req.params.id;
    
      Employee.getEmployeeById(employeeId, (err, employee) => {
        if (err) {
          console.error('Error fetching employee:', err);
          return res.status(500).json({ error: 'Failed to fetch employee' });
        }
    
        if (!employee) {
          return res.status(404).json({ error: 'Employee not found' });
        }
    
        res.status(200).json(employee);
      });
    }

  }
  
  
  
  
module.exports = EmployeeController;
