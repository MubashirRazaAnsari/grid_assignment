import React from 'react'

const Button = (props : any) => {
  return (
    <div>
        <button className={`${props.btnBG} text-white px-4 py-2 rounded`}>
            {props.btnTitle}
          </button>
      
    </div>
  )
}

export default Button
