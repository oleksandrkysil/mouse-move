import React, {Component} from 'react'
import './MoveElem.css'

class MoveElem extends Component {
    constructor(props) {
        super(props);
        this.state = { x: 0, y: 0 };
    }
    onMouseMove(e) {
        this.setState({
            x: e.pageX,
            y: e.pageY
        });


        // this.style.top = (e.pageY) + 'px';
        // this.style.left = (e.pageX) + 'px';
        //
        
    }


    render() {
        const { x, y } = this.state;
        return (
            <div className="container">
                <div>
                    <img alt="bla"
                         onMouseMove={this.onMouseMove.bind(this)}
                         src="https://i.redd.it/7yebhlpngdt11.jpg" />
                </div>
                <h1>{ x } { y }</h1><br/>
            </div>
         )
    }
}

export default MoveElem