export class Column {
  constructor(public name: string, public id: string, public tasks: Task[]) {}
}

interface Task {
  title: String
  content?: String
  footer?: String
  date?: Date
  value?: any
}