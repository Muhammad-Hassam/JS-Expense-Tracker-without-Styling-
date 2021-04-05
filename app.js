var saving = 0;
var list = document.getElementById("expenses");
var exp=[];
var expenses = [];
var expense;
var category;
var data;

function Expense (expense, category) {
    this.expense = expense;
    this.category = category;
}
function TransData(save,expense, category){
    this.save=save;
    this.expense = expense;
    this.category = category;
}
function addIncome() {
    saving += parseInt(document.getElementById("income").value)
   showIncome()
}

function showIncome () {
    document.getElementById("currentIncome").innerText = "Saving " + saving
}

function addExpense() {
    expense =  document.getElementById("expense");
    category = document.getElementById("category");
    var newExpense = new Expense(parseInt(expense.value), category.value)
    expenses.push(newExpense)
    saving -= parseInt(expense.value)
    showIncome()
    renderItem()
}

function renderItem () {
    var item = "";
    for(var i = 0; i < expenses.length;i++) {
        item += "<li>" + expenses[i].expense + " - " + expenses[i].category +"</li>"
    }
    list.innerHTML = item;
}

function showFilterExpense() {
    var category = document.getElementById("showExpense").value;

    var item = "";
    for(var i = 0; i < expenses.length;i++) {
        if(category === "all") {
            item += "<li>" + expenses[i].expense + " - " + expenses[i].category +"</li>"
        } else if(category ===  expenses[i].category) {
            item += "<li>" + expenses[i].expense + " - " + expenses[i].category +"</li>"
        }
    }
    list.innerHTML = item;
}

function showtransaction() {
    data=document.getElementById("transact");
    save=document.getElementById("currentIncome");
    var transObj=new TransData(save.value,parseInt(expense.value), category.value)
    exp.push(transObj);
    renderItems();
}
function renderItems() {
    var items = "";
    for(var i = 0; i < exp.length;i++) {
        items += "<li> savings "  + saving  +" Expenses "+exp[i].expense + " - " + " Category "+ exp[i].category +"</li>"
    }
    data.innerHTML = items;
} 
    
function showFilterExpenses() {
    var category = document.getElementById("transDatas").value;
    var lists=document.getElementById("expData");
    var items = "";
    for(var i = 0; i < exp.length;i++) {
        if(category === "All") {
            items += "<li> savings "  + saving  +" Expenses "+exp[i].expense + " - " + " Category "+ exp[i].category +"</li>"
        } else if(category ===  "Savings") {
            items += "<li> saving " + exp[i]+saving +"</li>"
        }
        else if(category ===  "Expenses") {
            items += "<li> Expenses" + expenses[i].expense + " - " +"Category "+ expenses[i].category +"</li>"
        }
    }
    lists.innerHTML = items;
}
    