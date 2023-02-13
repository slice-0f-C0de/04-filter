import React from "react";
import {FilterType} from "./App";

export type MoneyDataType = {
    currentMoney: MoneyType[]
    onClickFilterHandler: (nameButton: FilterType) => void
}

export type MoneyType = {
    banknots: string
    value: number
    number: string
}

export const FilteredMoney = (props: MoneyDataType) => {

    return (
        <div>
            <ul>
                {props.currentMoney.map((ObjectFromMoneyArray, index) => {
                    return (
                        <li>
                            <span key={index}> {ObjectFromMoneyArray.banknots}</span>
                            <span> {ObjectFromMoneyArray.value}</span>
                            <span> {ObjectFromMoneyArray.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <button onClick={() => {
                    props.onClickFilterHandler("All")
                }}>All
                </button>
                <button onClick={() => {
                    props.onClickFilterHandler("RUBLS")
                }}>Rubles
                </button>
                <button onClick={() => {
                    props.onClickFilterHandler("Dollars")
                }}>Dollars
                </button>
            </div>
        </div>
    )
}