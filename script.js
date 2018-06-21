class ToDo {
    constructor(selector) {
        this.toDoListContainer = document.querySelector(selector)
        this.tasks = [{
            taskName: 'Wynieś śmieci',
            isCompleted: false
        }]
        this.newTaskName = ''

        this.render()
    }

    render(){
        this.toDoListContainer.innerHTML = ''

        this.buildUI()
        this.renderTasksList()
    }

    renderTasksList(){
        // you can use Array.prototype.forEach instead of for loop
        for(let i = 0; i < this.tasks.length; i++){
            const taskContainer = document.createElement('div')
            taskContainer.innerHTML = this.tasks[i].taskName
            this.toDoListContainer.appendChild(taskContainer)
        }
    }

    buildUI(){
        const input = document.createElement('input')
        const button = document.createElement('button')
        button.innerHTML = 'Dodaj zadanie!'

        input.addEventListener(
            'input',
            (event) => this.onNewTaskNameChanged(event)
        )
        button.addEventListener(
            'click',
            () => this.onAddNewTaskClickHandler()
        )

        this.toDoListContainer.appendChild(input)
        this.toDoListContainer.appendChild(button)
    }

    onAddNewTaskClickHandler(){
        this.addTask(this.newTaskName)
        this.newTaskName = ''
        this.render()
    }

    onNewTaskNameChanged(event){
        this.newTaskName = event.target.value
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