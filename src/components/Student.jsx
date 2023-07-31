import React from 'react'

function Student(props) 
{
return (
    <div className='studentCard'>
        <h2>Name: {props.studentData.name}</h2>
        <h3>Bio: {props.studentData.bio}</h3>
            <div className="gradeWrapper">
            <div className="grades1">
            Date: {props.studentData.scores[0].date}
            <br/>
            Grade: {props.studentData.scores[0].score}
            </div>
            <div className="grades2">
            Date: {props.studentData.scores[1].date}
            <br/>
            Grade: {props.studentData.scores[1].score}
            </div>
            <div className="grades3">
            Date: {props.studentData.scores[2].date}
            <br/>
            Grade: {props.studentData.scores[2].score}
            </div>

            </div>
    </div>
)
}

export default Student