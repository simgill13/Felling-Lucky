import React from 'react';
import {connect} from 'react-redux';
import Card from './card';
import Help from './help';
import {
    newGame,
    toggleInfoModel
} from '../actions/actions';


const mapStateToProps = (state, props) => ({
    guesses: state.guesses,
    showInfoModel: state.showInfoModel
});
export class Game extends React.Component {
    constructor(props) {
        super(props);
        this.resetGame = this.resetGame.bind(this);
        this.showHelp = this.showHelp.bind(this);
    }
    showHelp(event) {
       this.props.dispatch(toggleInfoModel())
    }
    resetGame(event) {
      this.props.dispatch(newGame())
    }
    render() {
        if(this.props.showInfoModel === true){
          return (
            <div className = "Help">
              <Help />
            </div>
        )}
        return (
          <div className='Game' >
            {this.props.showInfoModel}
            <div className = "top-nav">
            <button className = "need-help" type="submit" onClick={this.showHelp} > NEED HELP? </button>
            <button type ="submit" className = "new-game" onClick={this.resetGame} > +NEW GAME </button>
            </div>
             <h1 className = "game-title">Feeling Lucky?</h1>
              <Card />
          </div>
        )
    }
  }
export default connect(mapStateToProps)(Game);
