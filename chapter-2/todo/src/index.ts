import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos = [
    new TodoItem(1, "Buy flowers"), new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"), new TodoItem(4, "call Joe", true)
]

let collection = new TodoCollection("Adam", todos);
console.clear();
console.log(`${ collection.userName}'s Todo List` + `(${collection.getItemCounts().incomplete} items to do)`);

// let newId = collection.addTodo("Go for fun");
// let todoItem = collection.getTodoById(newId);

// todoItem.printDetails();
// collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());
