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
      <Content name = {part[0].name} exercises={part[0].exercises} />
      <Content name = {part[1].name} exercises={part[1].exercises} />
      <Content name = {part[2].name} exercises={part[2].exercises} />
      <Total part = {part} />
    </div>
  )
  }


const Header = ({course}) => {
return (
  <h1>{course}</h1>
)
}

const Content = ({name,exercises}) => {

return (
  <p>{name} {exercises}</p>
)
}

const Total = (props) => {
  return (
    <p>Number of Exercises {props.part[0].exercises+props.part[1].exercises+props.part[2].exercises}</p>
  )
}

export default App

