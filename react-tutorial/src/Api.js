import React, { Component } from 'react';

class App extends Component {
    state = {
        data: [],
    };

    componentDidMount() {
        const url =
            'https://dog.ceo/api/breeds/image/random';

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result,
                })
            })
    }

    render() {


        return <ul>hi</ul>
    }
}

export default App

