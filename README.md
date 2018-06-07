![Alt text](./src/images/react-logo.png?raw=true "React logo")

# Understanding State in React

State is an important part of React components and how they work. If you’ve been dabbling in React you probably know by now that components are essentially just functions that return JSX. That said, you can have components that are stateful or stateless. It is likely that you won’t want to simply hard code JSX in all your components, you’ll probably want to change information inside your component.

State is an object that determines how that component renders and behaves. You will generally set the initial state of the component in the constructor and call setState when you want to change it.