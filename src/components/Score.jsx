import React from 'react'

function Score(props) {
return (
    <div>
        <h2>Date: {props.studentData.scores[0].date} Score:</h2>
    </div>
)
}

export default Score