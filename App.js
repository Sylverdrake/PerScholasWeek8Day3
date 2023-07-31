import './App.css';
import Student from './components/Student';
import Score from './components/Score';


function App() {
  const state =
  ({
    students: 
    [
      {
        name: 'Cait Yomorta',
        bio: 'This person burned out',
        scores: [
          {
            date: '2018-02-08',
            score: 77
          },
          {
            date: '2018-04-22',
            score: 92
          },
          {
            date: '2018-09-15',
            score: 68
          }
        ]
      },
      {
        name: 'Holly Baird',
        bio: 'This person is studying very hard',
        scores: [
          {date: '2018-12-14', score: 88},
          {date: '2019-01-09', score: 79},
          {date: '2019-02-23', score: 91},
        ]
      },
      {
        name: 'Wes Mungia',
        bio: 'This person got their act together.',
        scores: [
          {
            date: '2018-10-11',
            score: 62
          },
          {
            date: '2018-11-24',
            score: 74
          },
          {
            date: '2018-12-19',
            score: 85
          }
        ]
      }
    ]
  })
  return (
    <div className='wrapper'>
    <div className="App">
    <Student studentData={state.students[0]}/>
    <hr/>
    <Student studentData={state.students[1]}/>
    <hr/>
    <Student studentData={state.students[2]}/>
    </div>
    </div>
  );
}

export default App;
