import React from 'react'
import {Link} from 'react-router-dom'

export default class Create extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            desc: '',
        }
    }

    //Arrow function statenya punya class
    onSubmit = (e) => {
        //Mencegah function dari html (preventDefault())
        e.preventDefault();
        console.log(this.state.test);
    }

    render(){
        return(
            <div>
                    <Link to='/' className='btn btn-outline-secondary mb-2'>Back</Link>

                    <form onSubmit={this.onSubmit}>
                        <div className='form-group'>
                            <label htmlFor='title'>Title</label>
                            <input 
                                type='text' 
                                id='title' 
                                className='form-control'
                                value = {this.state.title}
                                onChange={e => this.setState({title: e.target.value})}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='desc'>Description</label>
                            <input 
                                type='text' 
                                id='desc' 
                                className='form-control'
                                value = {this.state.desc}
                                onChange={e => this.setState({desc: e.target.value})}/>
                        </div>
                        <button className='btn btn-primary'>Create</button>
                    </form>
            </div>
        )
    }
}