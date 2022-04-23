import { useState } from 'react'
import $ from "jquery";
import "../components/styless.css";
import "jquery-nice-select/css/style.css";

window.jQuery = window.$ = $;
require("jquery-nice-select");


  const AddPerson = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [height, setHeight] = useState('')
    const [mass, setMass] = useState('')
    var [eye, setEye] = useState('Blue')
    var [gender, setGender] = useState('Male')
    
  const onSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert('Please add a person')
      return
    }
    if (!eye) {
      alert('Please add a eye')
      return
    }

    onAdd({ name, height, mass, eye, gender })

    setName('')
    setHeight(0)
    setMass(0)
    setEye('')
    setGender('')

  }

  



  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name</label>
        <input
          type='text'
          placeholder='Add Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Height</label>
        <input
          type='number'
          placeholder='Add Height'
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        </div>
          <div className='form-control'>
        <label>Mass</label>
        <input
          type='number'
          placeholder='Add Mass'
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Eye Color</label>
        <select
            value={eye}
            onChange={e => {
              setEye(e.target.value)
            }}
          >
            {["Red","Green","Blue"].map(eye => (
              <option key={eye} value={eye}>
                {eye}
              </option>
            ))}
          </select>
      </div>

      <div className='form-control'>
        <label>Gender</label>
        <select
            value={gender}
            onChange={e => {
              setGender(e.target.value)
            }}
          >
            {["Male","Female"].map(gender => (
              <option key={gender} value={gender}>
                {gender}
              </option>
            ))}
          </select>
      </div>       <input type='submit' value='Save Character' className='btn btn-block' />
    </form>
  )
}

export default AddPerson
