class ToDo {
    constructor(selector) {
        this.toDoListContainer = document.querySelector(selector)
        this.tasks = []
        this.newTaskName = ''

        this.initTasksSync()
        this.render()
    }

    initTasksSync(){
        firebase.database().ref('tasks').on(
            'value',
            snapshot => {
                this.tasks = snapshot.val()
                this.render()
            }
        )
    }

    saveToDB(){
        firebase.database().ref('tasks').set(this.tasks)
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

            if(this.tasks[i].isCompleted) taskContainer.style.textDecoration = 'line-through'

            taskContainer.addEventListener(
                'click',
                () => this.onTaskClickHandler(i)
            )
            taskContainer.addEventListener(
                'dblclick',
                () => this.onTaskDoubleClickHandler(i)
            )

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

    onTaskClickHandler(index){
        this.tasks[index].isCompleted = !this.tasks[index].isCompleted
        this.saveToDB()
        this.render()
    }

    onTaskDoubleClickHandler(index){
        this.tasks =  this.tasks.filter((task, i) => index !== i )
        this.saveToDB()
        this.render()
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

        this.saveToDB()
        this.render()
    }
}

const toDo1 = new ToDo('div.toDo1')