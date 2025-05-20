import React from 'react'
import CustomButton from './CustomButton'

const Card = (props) => {
  return (
    <div className="Card" style={{backgroundColor:props.complete===true && '#4D5D53', color:props.complete===true && 'white' }}>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <div className="btnWrapper">
            <CustomButton name='Complete' color='white' bg='#1877F2' click={props.update} />
            <CustomButton name='Delete' color='white' bg='red' click={props.delete} />
            </div>
    </div>
  )
}

export default Card