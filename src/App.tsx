import React, {useState} from 'react';
import './App.css';
import {FilteredMoney} from "./FilteredMoney";

export type FilterType = "All" | "RUBLS" | "Dollars" // 7. Создаём тип для фильтров

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    let [filter, setFilter] = useState<FilterType>("All") // 8. Типизируем стейт

    let currentMoney = money

    if (filter === "RUBLS") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
    }
    if (filter === "Dollars") {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "Dollars")
    }

    const onClickFilterHandler = (nameButton: FilterType) => { // 9. Типизируем название кнопки
        setFilter(nameButton)
    }

    return (
        <FilteredMoney currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
    );
}

export default App;
