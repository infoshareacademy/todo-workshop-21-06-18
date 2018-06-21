class ToDo {
    constructor() {
        this.tasks = [{
            taskName: 'Wynieś śmieci',
            isCompleted: false
        }]
    }

    addTask(taskName) {
        this.tasks = this.tasks.concat({
            isCompleted: false,
            taskName: taskName
        })
    }
}

const toDo1 = new ToDo()