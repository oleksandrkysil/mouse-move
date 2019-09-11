import React, {Component} from 'react'
import './Block.css'
import MoveElem from '../components/MoveElem/MoveElem'

class Block extends Component {
    render() {
        return (
            <div className="Block">
                <MoveElem/>
            </div>
        )
    }
}

export default Block