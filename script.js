class ToDo {
    constructor(selector) {
        this.toDoListContainer = document.querySelector(selector)
        this.tasks = [{
            taskName: 'Wynieś śmieci',
            isCompleted: false
        }]

        this.render()
    }

    render(){

    }

    addTask(taskName) {
        this.tasks = this.tasks.concat({
            isCompleted: false,
            taskName: taskName
        })

        this.render()
    }
}

const toDo1 = new ToDo('div.toDo1')