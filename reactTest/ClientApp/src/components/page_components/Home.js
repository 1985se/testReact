import React, { Component } from 'react';
import TopbarComponent from '../global_components/Topbar';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Text:'Hello Word!!'
        }
    }
  
    render() {
        return (
            <React.Fragment>
                <center>
                    <TopbarComponent/>
                    <div className="main-banner">
                        <img src={require('../assets/image/banner.jpg')} style={{ width:'-webkit-fill-available' }} />
                    </div>
              
                </center>

            </React.Fragment>            
            );
    }

}
export default Home;