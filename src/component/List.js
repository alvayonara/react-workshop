import React from 'react'
import axios from 'axios'
import Card from './Card.js'

export default class List extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            books: [
            ]
        }
    }

    //Cara ambil data dari API
    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        //untuk get data dari API
        const todos = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        let books = this.state.books;
        todos.data.map(todo => books.push({
            id: todo.id,
            title: todo.title,
            desc: todo.completed.toString()
        }));
        this.setState({books});
    }

    createBook = () => {
        let books = this.state.books;

        //push = array baru
        books.push({
            id: books.length + 1,
            title: `Judul ${books.length + 1}`,
            desc: `Deskripsi ${books.length + 1}`,
        });

        this.setState({ books });
    }

    render() {
        return(
            <div className='d-flex flex-wrap p-5'>
                {
                    this.state.books.map(book => 
                        <Card key={book.id} id={book.id} title={book.title} desc={book.desc} />
                    )
                }

                <button onClick={this.createBook} className='btn btn-primary'>
                    Tambah Buku
                </button>
            </div>
        )
    }
}