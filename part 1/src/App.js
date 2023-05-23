const App = () => {
  const course = {name :'Half Stack application development',

  part : [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
}

  return (
    <div>
      <Header course = {course.name}/>
      <Content content = {course.part}/>
    </div>
  )
  
}


const Header = ({course}) => {
return (
  <h1>{course}</h1>
)
}

const Content = (props) => {
  return (
    <div>
      <p> 
        <Part part ={props.part[0].name} exercises = {props.part[0].exercises}/>
        <Part part ={props.part[1].name} exercises = {props.part[1].exercises}/>
        <Part part ={props.part[2].name} exercises = {props.part[2].exercises}/>
      </p>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}</p>
  )
}
export default App