import ReactDOM from 'react-dom';
import './index.css';
import App, { PagesType } from './App';
import { BrowserRouter } from 'react-router-dom';


export const rerenderEntireTree = (state: PagesType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
