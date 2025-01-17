import React, { FunctionComponent } from "react"
import { NextIcon, PreviousIcon, TodayIcon } from "../../Icons"
import { ParsedDate } from "../../types/types"
import MonthPicker from "./pickers/MonthPicker"
import YearPicker from "./pickers/YearPicker"

interface CalenderControllerProps {
    onNextMonth: () => void
    onPreviousMonth: () => void
    onToday: () => void
    onYearSelect: (year: number) => void
    onMonthSelect: (year: number) => void
    calenderDate: ParsedDate
}

const CalenderController: FunctionComponent<CalenderControllerProps> = props => {
    const { onNextMonth, onPreviousMonth, calenderDate, onToday, onYearSelect, onMonthSelect } = props

    return (
        <div className="calendar-controller">
            <span className="control icon" title="prev" onClick={onPreviousMonth}>
                <PreviousIcon />
            </span>
            <span className="control icon" title="today" onClick={onToday}>
                <TodayIcon />
            </span>

            <MonthPicker date={calenderDate} onSelect={onMonthSelect} />
            <YearPicker date={calenderDate} onSelect={onYearSelect} />

            <span className="control icon" title="next" onClick={onNextMonth}>
                <NextIcon />
            </span>
        </div>
    )
}

export default CalenderController
