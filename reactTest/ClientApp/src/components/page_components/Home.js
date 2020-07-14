import React, { Component } from 'react';
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
                <canter>
                    <div>
                        {this.state.Text}
                    </div>
                    <button onClick={() => this.onClickChange()} >
                        click
                    </button>
                </canter>

            </React.Fragment>            
            );
    }

}
export default Home;