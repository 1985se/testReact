import React, { Component } from 'react';

class Title extends React.Component {
    render() {
        return (
            <React.Fragment>
                <center>
                    <div>
                        <h1>Title</h1>
                    </div>
                    <div>
                        <h3>{this.props.message}:{this.props.message2}</h3>
                    </div>
                </center>
            </React.Fragment>
            )
    }


}
export default Title;