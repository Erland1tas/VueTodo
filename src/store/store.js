import { defineStore } from 'pinia'

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    willDoTasks: [
      { description: 'Do at least something', date: '2023.04.05', isFav: false, id: 457 },
      { description: 'Finish the app', date: '2023.04.02', isFav: false, id: 127 },
      {
        description:
          'Cia kazkoks taskas daug ilgesnios tiesiog paziureti kaip talpina visa sita suda, gal ir visai gerai. Laukiu skambucvio is gentys, tikiuosi paskambis, o gal ir ne, bet butu jega.',
        date: '2023.03.01',
        isFav: false,
        id: 112
      }
    ],
    doneTasks: [
      { description: 'Clean the room', date: '2023.04.01', id: 793 },
      {
        description: 'Go for a walk sometimes, it is quite good for the head',
        date: '2023.04.10',
        id: 222
      }
    ]
  }),
  getters: {
    // If I want to use arrow function, I have access with parameters to state, because 'this' does not point to an object with arrow function.
    favTasks: (state) => {
      return state.willDoTasks.filter((task) => task.isFav)
    }
  },
  actions: {
    newData(data) {
      this.willDoTasks.unshift(data)
    },
    doneOrReverse(id, taskSide) {
      const index = this[taskSide].findIndex((task) => task.id === id)
      const [filteredTask] = this[taskSide].filter((task) => task.id === id)
      const side = taskSide === 'willDoTasks' ? 'doneTasks' : 'willDoTasks'
      this[side].unshift(filteredTask)
      this[taskSide].splice(index, 1)
    },
    deleteTask(id, taskSide) {
      const index = this[taskSide].findIndex((task) => task.id === id)
      this[taskSide].splice(index, 1)
    },
    favTask(id) {
      const foundTask = this.willDoTasks.find((task) => task.id === id)
      foundTask.isFav = !foundTask.isFav
    }
  }
})
