const App = () => {
  console.log('Hello from App component')
  const friends = [
    {name: "Eero", age: 29},
    {name: "Essi", age: 28},
    {name: "Baymax", age: 8}]
  return (
    <div>
      <p>Hello world</p>
      <DateAndTime/>
      <Hello name={friends[0].name} age={friends[0].age}/>
      <Hello name={friends[1].name} age={friends[1].age}/>
      <Hello name={friends[2].name} age={friends[2].age}/>
    </div>
  )
}

const DateAndTime = () => {
  const date = new Date()
  return (
    <div>
      <p>The date is {date.toString()} </p>
    </div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old.</p>
    </div>
  )
}

export default App