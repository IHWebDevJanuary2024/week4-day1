import './App.css'
import Navbar from './components/Navbar'
import Section from './components/Section'

function App() {

  return (
    <>
      {/* <h1>Task 1</h1> */}
      {/* <Navbar /> */}
      <Navbar >
        <h3>This is the navbar</h3> {/* This is now a child of Navbar*/}
      </Navbar>
      <Section />
      <h1>Task 1</h1>
      <p>Create a components folder ✅</p>
      <h1>Task 2</h1>
      <p>Create a Navbar component and add it to the App component ✅</p>
      <h1>Task 3</h1>
      <p>Create a Section component and add it to the App component with 2 paragraphs (lorem ipsum)✅</p>
      <h1>Task 4</h1>
      <p>Create a Button component and add one button after each paragraph inside the Section component</p>

    </>
  )
}

export default App
