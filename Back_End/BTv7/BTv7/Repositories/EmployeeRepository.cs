﻿using BTv7.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BTv7.Repositories
{
    public class EmployeeRepository : Repository<Employee>
    {
        public List<Employee> GetEmployeeByID(int id)
        {
            return this.context.Set<Employee>().Where(x => x.ID == id).ToList();
        }
        public List<Employee> GetEmployeeByLoginID(int loginID)
        {
            return this.context.Set<Employee>().Where(x => x.LoginID == loginID).ToList();
        }

        public List<Employee> GetByName(string id)
        {
            return this.context.Set<Employee>().Where(x => x.Name.ToLower().Contains(id.ToLower())).ToList();
        }

        public void UpdateEmployeeDetails(Employee emp)
        {
            using (var employee = new BTv7DbContext())
            {
                int noOfEmployeeRowAffected = employee.Database.ExecuteSqlCommand("UPDATE Employees SET Name = '"+emp.Name+ "', Salary = '" + emp.Salary + "' WHERE ID = "+emp.ID+";");
            }
        }

        public List<Employee> GetEmployeeByUserDesignation()
        {
            return this.context.Set<Employee>().Where(x => x.Login.UserDesignationID==4).ToList();
        }
    }
}