const UserInput=()=>{
    const submitHandler=(event)=>{
        event.preventDefault();//preventing so that react does not get reloaded
    
    };
    const resetHandler=(event)=>{ 
        
    };
    return <form onSubmit={submitHandler} className="form">
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" id="duration" />
      </p>
    </div>
    <p className="actions">
      <button onClick={resetHandler}type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>
};
export default UserInput;