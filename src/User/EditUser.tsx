import React from 'react'

function EditUser() {
  return (
    <div style={{
      height: '100vh',
      width: '100%',
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>

      <div style={{
        border: 'thin solid black',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img style={{height: 50, width: 50}} />
          <input type="file" />
        </div>
        <div>
          <input placeholder="name" />
        </div>
        <div>
          <select>
            <option>Plan</option>
          </select>
        </div>
      </div>

      <button>Save</button>
    </div>
  )
}

export default EditUser
