import React, { useState } from 'react'

const Login = () => {
    let [form, setform] = useState({username : "" , password : ""})
    let handleChange = (e) =>{
        setform({...form, [e.target.name] : e.target.value})
        console.log(form)
    }
    let handlesubmit = (e) => {
        e.preventDefault();
        console.log(form)
        alert("login successfull")
    }
  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handlesubmit}>
        <input type="text" name='username' value={form.username} onChange={handleChange}/>
        <input type="password" name='password' value={form.password} onChange={handleChange}/>
        <button type='submit'>Login</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  )
}

export default Login
