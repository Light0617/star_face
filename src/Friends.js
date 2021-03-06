import React, { Component } from 'react';
import './css/style.css';
import Card from './Card/Card.js';
import myface from './State.js';
class Friends extends Component{
    state = {
        friends : [
            { id : 'qwe', name : 'Peng',  detail : 'Coding king'},
            { id : 'asd', name : 'bamboo', detail : 'Nice person'},
            { id : 'zxc', name : 'Anliu', detail : 'cute'},
            { id : 'wer', name : 'Ann',  detail : 'Coding king'},
            { id : 'sdf', name : 'jing', detail : 'Nice person'},
            { id : 'xcv', name : 'Sunny', detail : 'cute'}
        ],
        showFriends: true
    }
    //
    // let friends = null;
    // if(this.state.showFriends){
    //   friends = (
    //     <div>
    //       {this.state.friends.map( (friend, index) => {
    //           return <Friend
    //             name = {friend.name}
    //             img = {friend.img}
    //             detail = {friend.detail}
    //             key = {friend.id}/>
    //       })}
    //     </div>
    //   );

    render() {
        let card = (person, col) => {
            return <div className = 'col-1-of-3'>
                <Card
                name = {person.name}
                col = {col}
                detail = {person.detail}
                key = {person.id}/>
                </div>
        };

        let people1 = this.state.friends.splice(0,3);
        let people2 = this.state.friends.splice(0,3);
        let people3 = this.state.friends.splice(0,3);

        let firstFriends = (people) => {
            const cols = ['1', '2', '3'];
            let items = people.map( (person, i) => {
                return card(person, cols[i]);
                });
          return <div className = 'row'>
            {items}
          </div>
        };

        let x = this.state.friends[0];
        return(
            <div>
                <div className = 'u-center-text u-margin-bottom-big'>
                        <h2 className = 'heading-secondary'> Most closest friend </h2>
                </div>
            {firstFriends(people1)}
            {firstFriends(people2)}
        </div>
      );
    }
}

export default Friends;
