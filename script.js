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
        this.toDoListContainer.innerHTML = ''

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
        console.log('bu!')
    }

    onNewTaskNameChanged(event){
        console.log(event.target.value)
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