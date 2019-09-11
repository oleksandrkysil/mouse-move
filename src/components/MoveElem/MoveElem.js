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

// чтобы картинка двигалась за мышкой осталось только задать динамически стили 'top' и 'left'
// в нативном это можно сделать как в следующих закомментированых строках.
// как средствами Reactа сделать еще не знаю(поразбираюсь еще)
// или ты можешь подсказать?
        
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
