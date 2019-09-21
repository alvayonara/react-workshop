import React from 'react'
import  { BrowserRouter, Route, Switch } from 'react-router-dom'
import List from './List.js'
import Detail from './Detail.js'
import Header from './Header.js'
import Create from './Create.js'

//# Cara function based component
// const App = () => {
//     return (
//         <div className='d-flex flex-wrap p-5'>
//             <Card title='Judul' description='desc'/>
//             <Card title='Judul 2' description='desc 2'/>
//             <Card title='Judul 3' description='desc 3'/>
//         </div>
//     );
// }

//# Cara class based component
//tidak perlu this
//didMount-> ketika component pertama kali ditampilkan
//punya state -> tiap komponen pny state tersendiri
//ketika state berubah, maka akan merender ulang

//(Route Path) exact -> jika URL == component
class App extends React.Component {
    render(){
        return(
            <div className='p-5'>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={List} />
                        <Route path='/create' exact component={Create} />
                        <Route path='/detail/:id' exact component={Detail} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;