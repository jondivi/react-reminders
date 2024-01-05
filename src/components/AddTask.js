import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        // if(!text) {
        //     alert('Please add a reminder')
        //     return
        // }
        onAdd({text, date, time, reminder})

        setText('')
        setDate('')
        setTime('')
        setReminder(false)
    }

  return (
    <form className='add-form' onSubmit=
    {onSubmit}>
      <div className='form-control'>
      <label>Reminder</label>
        <input type='string' placeholder='Add Reminder' required value={text} onChange={(e) => setText(e.target.value)} />
      </div>

      <div className='form-control'>
      <label>Date</label>
        <input type='date' placeholder='Add Date' required value={date} onChange={(e) => setDate(e.target.value)}/>
      </div>

      <div className='form-control'>
      <label>Time</label>
        <input type='time' placeholder='Add Time' value={time} onChange={(e) => setTime(e.target.value)}/>
      </div>

      <div className='form-control form-control-check'>
      <label>Set Reminder</label>
        <input 
         type='checkbox'
         checked={reminder}
         value={reminder} 
         onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input className='btn btn-block' type='submit' value= 'Save Reminder' />
        
    </form>
  )
}

export default AddTask
