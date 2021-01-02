import React from 'react'
import { Link } from 'react-router-dom'

const CreateUser = ({ username, email, onChange, onCreate }) => {
  console.log('2. const CreateUser = ({ username, email, onChange, onCreate }) => { .. }')

  return (
    <div style={{ backgroundColor: 'pink' }}>
      <Link to="/">CreateUser.js</Link>

      <br />

      <input name="username" placeholder="계정명" onChange={onChange} value={username} />

      <input name="email" placeholder="이메일" onChange={onChange} value={email} />

      <button type="button" onClick={onCreate}>
        등록
      </button>

      <hr />
    </div>
  )
}

export default React.memo(CreateUser)
