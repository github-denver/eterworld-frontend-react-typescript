import React from 'react'
import { Link } from 'react-router-dom'

const User = React.memo(function User({ user, onRemove, onToggle }) {
  console.log('3-2. const User = React.memo(function User({ user, onRemove, onToggle }) { .. }')

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}>
        {user.username}
      </b>

      <span>({user.email})</span>

      <button type="button" onClick={() => onRemove(user.id)}>
        삭제
      </button>
    </div>
  )
})

function UserList({ users, onRemove, onToggle }) {
  console.log('3-1. const UserList({ users, onRemove, onToggle }) { .. }')

  return (
    <div style={{ backgroundColor: 'skyblue' }}>
      <Link to="/">UserList.js</Link>

      <br />

      <div>
        {users.map((user) => (
          <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </div>

      <hr />
    </div>
  )
}

export default React.memo(UserList)
