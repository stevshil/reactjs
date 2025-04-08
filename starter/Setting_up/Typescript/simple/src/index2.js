import { createRoot } from 'react-dom/client'

const greeting = "Hello Again - React!";


function App(params: any) {
    return <h1>{params.message}</h1>;
}

createRoot(document.getElementById('root')).render(
    <App message={greeting} />
)