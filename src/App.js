import { useState } from 'react';
import './App.css';

function App() {

  //initialize state as empty
  const [formInput, setFormInput] = useState({
    name:'',
    email:'',
    gender:''
  });

  // const [errorMessage, setErrorMessage] = useState({
  //   show: false,
  //   message: ''
  // })

  const handleFormInput = (event) => {
    let inputValue = event.target.value; //get input value
    // console.log(inputValue);

    let inputName = event.target.name; //get input name

    //append all form input into an array setFormInput 
    setFormInput({...formInput, [inputName]:inputValue});
  
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <h1>Studywithme React pt.8</h1>

      <div className='card'>
        <form onSubmit={handleSubmitForm}>
          <div>
            <label>Name: </label>
            <input name='name' type='text' onChange={handleFormInput}/>
          </div>

          <div>
            <label>Email: </label>
            <input name='email' type='email' onChange={handleFormInput}/>
          </div>

          <div>
            <label>Gender: </label>
            <input name='gender' type='radio' value='Female' onChange={handleFormInput}/>Female
            <input name='gender' type='radio' value='Male' onChange={handleFormInput}/>Male
          </div>

          {/* <div>
            <label>Country: </label>
            <select name='country' onChange={handleFormInput}>
              <option value=''>Select</option>
              <option value='Malaysia'>Malaysia</option>
              <option value='Other'>Other country</option>
            </select>
          </div> */}

          <div>
            <button type='submit'>Submit</button>
          </div>

          <div>
            <p>Name: {formInput.name}</p>
            <p>Email: {formInput.email}</p>
            <p>Gender: {formInput.gender}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
