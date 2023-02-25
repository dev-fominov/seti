import './reset.css';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Pagebody } from './components/Pagebody/Pagebody';
import { Footer } from './components/Footer/Footer';


export type DataType = {
  // state: PagesType
  store: any
  // dispatch: (action: any)=>void
}

export type PagesType = {
  profilePage: ProfileType
  dialogsPage: DialogsType
}

export type ProfileType = {
  posts: PostType[]
  newPostText: string
}
export type DialogsType = {
  dialogsData: DialogsDataType[]
  messageData: MessageDataType[]
  newMessageBody: string
}

export type StateType = {
  dialogsData: DialogsDataType[]
  messageData: MessageDataType[]
  posts: PostType[]
}



export type DialogsDataType = {
  id: number
  name: string
}
export type MessageDataType = {
  id: number
  message: string
}
export type PostType = {
  id: number
  name: string
  message: string
  like: number
}

function App() {
  
  return (
    <div className={'app-wrapper'}>
      <Header />
      <div className={"contentbody"}>
        <Sidebar />
        <Pagebody />
      </div>
      <Footer />
    </div>
  );
}

export default App;
