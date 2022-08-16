"use strict";

const buttonStart = document.getElementById('start');
const budgetValue = document.getElementsByClassName('budget-value')[0];
const daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
const levelValue = document.getElementsByClassName('level-value')[0];
const expensesValue = document.getElementsByClassName('expenses-value')[0];
const optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
const incomeValue = document.getElementsByClassName('income-value')[0];
const monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0];
const yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

const expensesItem = document.getElementsByClassName('expenses-item');
const expensesBtn = document.getElementsByTagName('button')[0];
const optionalExpensesBtn = document.getElementsByTagName('button')[1];
const countBtn = document.getElementsByTagName('button')[2];
const optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
const incomeItem = document.querySelector('.choose-income');
const checkSavings = document.querySelector('#savings');
const sumValue = document.querySelector('.choose-sum');
const percentValue = document.querySelector('.choose-percent');
const yearValue = document.querySelector('.year-value');
const monthValue = document.querySelector('.month-value');
const dayValue = document.querySelector('.day-value');

let money;
let time;

function start() {
    money = +prompt ("Ваш бюджет на месяц?", "");
    time = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt ("Ваш бюджет на месяц?", "");
    }
}
start();

const appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for(let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдётся?", '');

            if(typeof(a) === 'string' && typeof(a) !=null && typeof(b) !=null && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш ежедневный бюджет слстовляет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        } 
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for(let i = 1; i < 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });      
    }             
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}