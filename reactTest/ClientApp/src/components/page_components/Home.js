import React, { Component } from 'react';
import TitleComponent from './Title';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Text:'Hello Word!!'
        }
    }
    onClickChange() {
        this.setState({ Text: 'click' });
    }
    render() {
        return (
            <React.Fragment>
                <center>
                    <TitleComponent message="Text Is" message2={this.state.Text}/>
                    <div>
                        {this.state.Text}
                    </div>
                    <button onClick={() => this.onClickChange()} >
                        click
                    </button>
                </center>

            </React.Fragment>            
            );
    }

}
export default Home;