const App = () => {
  const course = 'Half Stack application development'
  const part = [{name:'Fundamentals of React', exercises: 10},
  {name: 'Using props to pass data', exercises: 7},
  {name: 'State of a component', exercises: 14}]
  

  return (
    <div>
      <Header course = {course}/>
      <p> 
      </p>
      <Content part = {part}/>
      <Total part = {part} />
    </div>
  )
  }


const Header = ({course}) => {
return (
  <h1>{course}</h1>
)
}

const Content = ({part}) => {


return (
  <div>
  <p>{part[0].name} {part[0].exercises}</p>
  <p>{part[1].name} {part[1].exercises}</p>
  <p>{part[2].name} {part[2].exercises}</p>
  </div>
)
}

const Total = (props) => {
  return (
    <p>Number of Exercises {props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}</p>
  )
}

const Part = ({name,exercises}) =>
{
  return (
    <p>{name}{exercises}</p>
  )
}

export default App

