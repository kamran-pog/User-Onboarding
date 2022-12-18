import React from 'react'

const Form = (props) => {
  const { change, submit, errors} = props;
  const { username , email, password, tos } = props.values;
  
  const onChange = (e) => {
    const {name, value, checked, type} = e.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  }
  return (
    <div>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
        <p>{errors.tos}</p>
        <form onSubmit={onSubmit}>

            <label>Name:
                <input
                    values={username}
                    onChange={onChange}
                    name="username"
                    type="text"
                />
            </label>
            
            <label>Email:
                <input
                    values={email}
                    onChange={onChange}
                    name="email"
                    type="text"
                />
            </label>

            <label>Password
                <input
                    values={password}
                    onChange={onChange}
                    name="password"
                    type="password"
                />
            </label>
            
            <label>Terms of Service:
                <input
                    type="checkbox"
                    name="tos"
                    checked={tos}
                    onChange={onChange}
                />
            </label>
            <input type="submit" value="create a friend"  />
        </form>
    </div>
  )
}

export default Form;