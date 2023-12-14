class personClass
{
    constructor(fullName, age, money, sleepMood, healthRate)
    {
        this.fullName = fullName
        this.age = age
        this.money = money
        this.sleepMood = sleepMood
        this.healthRate = healthRate
    }

    sleep(hours) 
    {
        if (hours === 7) {
            this.sleepMood = 'Happy'
        } else if (hours < 7) {
            this.sleepMood = 'Tired'
        } else {
            this.sleepMood = 'Lazy'
        }
    }

    eat(meals) 
    {
        if (meals === 3) {
            this.healthRate = 100
        } else if (meals === 2) {
            this.healthRate = 75
        } else if (meals === 1) {
            this.healthRate = 50
        }
    }

    buy(items) 
    {
        this.money -= items * 10
    }
}

class employee extends personClass
{
    constructor(fullName, age, money, id, email, workMood, salary, isManager)
    {
        super(fullName, age, money)
        this.id = id
        this.email = email
        this.workMood = workMood
        this.salary = salary
        this.isManager = isManager
    }

    work(hours)
    {
        if (hours === 8) {
            this.workMood = 'Happy'
        } else if (hours > 8) {
            this.workMood = 'Tired'
        } else {
            this.workMood = 'Lazy'
        }
    }

}

class office
{
    constructor(name)
    {
        this.name = name
        this.employees = []
    }

    getAllEmployees() {
        return this.employees
    }

    getEmployee(empId) {
        let employee = this.employees.find((emp) => emp.id === empId);
        if (employee) {
            if (employee.isManager) {
                return {
                    id: employee.id,
                    email: employee.email,
                    workMood: employee.workMood,
                    isManager: employee.isManager,
                };
            } else {
                return employee
            }
        } else {
            return null
        }
    }

    fire(empId) {
        this.employees = this.employees.filter(emp => emp.id !== empId)
      }
    
      hire(employee) {
        this.employees.push(employee)
        }
    }

    function userInput() 
    {
        const choice = prompt('Menu:\n1. Add new employee "add"\n2. To quit "q"');
  
        switch (choice.toLowerCase()) {
          case 'add':
            const name = prompt('Enter Name: ')
            const email = prompt('Enter Email: ')
            const isManagerResponse = prompt('Is Manager? (enter "mngr" for manager, "nrml" for normal employee): ')
            const isManager = isManagerResponse.toLowerCase() === 'mngr'
            const employee = new personClass(email, email, '', 1000, isManager)
           
            console.log('Employee added successfully.')
            promptUser()
            break;
  
          case 'q':
            console.log('Quitting the application.')
            break;
  
          default:
            console.log('Invalid choice. Please try again.')
            userInput()
        }
      }
  
      userInput();