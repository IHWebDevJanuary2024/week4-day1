# Our first react APP!

In this lesson we've learned how to create a simple react app using `vite` and how to run it using `npm run dev`.

We've also learned how to create a simple component and how to use it in our app.

## Create a component

To create a component we need to create a new file in the `src` folder. For example, let's create a `HelloWorld` component.

```jsx
// src/HelloWorld.jsx
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}
export default HelloWorld;
```
Remember to export the component!

## Props

We can pass props to our components. For example, let's create a `Hello` component that receives a `name` prop.

```jsx
// src/Hello.jsx
function Hello(props) {
  return <h1>Hello, {props.name}!</h1>;
}
export default Hello;
```
We can use the `Hello` component in our `App` component like this:

```jsx
// src/App.jsx
import HelloWorld from './HelloWorld';
import Hello from './Hello';

function App() {
  return (
    <div>
      <HelloWorld />
      <Hello name="John" /> {/* props.name = "John" */}
    </div>
  );
}
export default App;
```

## Children

We can also pass children to our components. For example, let's create a `Card` component that receives a `title` prop and a `children` prop.

```jsx
// src/Card.jsx

function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>{props.children}</div>
    </div>
  );
}
export default Card;
```

We can use the `Card` component in our `App` component like this:

```jsx
// src/App.jsx
import HelloWorld from './HelloWorld';
import Hello from './Hello';
import Card from './Card';

function App() {
  return (
    <div>
      <HelloWorld />
      <Hello name="John" />
      <Card title="My Card">
        <p>This is the content of my card</p>
      </Card>
    </div>
  );
}
export default App;
```


