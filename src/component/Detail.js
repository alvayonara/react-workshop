import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Detail extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            desc: '',
        }
    }

    //getData Detail menggunakan axios
    componentDidMount(){
        this.getData();
    }

    getData = async () => {
        const todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`);
        console.log(todo);
        this.setState({
            title: todo.data.title,
            desc: todo.data.completed.toString()
        })
    }
 
    render(){
        return (
            <div>
                <Link to='/' className='btn btn-outline-secondary mb-2'>
                    Back
                </Link>
                <h4>{this.state.title}</h4>
                <p>{this.state.desc}</p>
            </div>
        )
    }
}

export default Detail;