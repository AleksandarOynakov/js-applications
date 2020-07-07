function solve() {
    class Employee {
        constructor(name, age) {
            if (new.target !== Employee) {
                this.name = name;
                this.age = age;
                this.salary = 0;
                this.tasks = [];
            }
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + (this.dividend === undefined ? 0 : this.dividend)} this month.`);
        }

        work() {
            let task = this.tasks.shift();
            let output = `${task}`;
            this.tasks.push(task);
            console.log(output);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a simple task.`);
        }
    }


    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`${this.name} is working on a complicated task.`);
            this.tasks.push(`${this.name} is taking time off work.`);
            this.tasks.push(`${this.name} is supervising junior workers.`);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(`${this.name} scheduled a meeting.`);
            this.tasks.push(`${this.name} is preparing a quarterly report.`);
        }
    }

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}