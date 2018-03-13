import React, { Component } from 'react';
import './css/style.css';
import Card from './Card/Card.js';

class Friends extends Component{
    state = {
        friends : [
            { id : 'asd', name : 'Peng',  detail : 'nice girl'},
            { id : 'kas', name : 'Ann', detail : 'OK girl'},
            { id : 'ass', name : 'Sunny', detail : 'cute'},
            { id : 'asa', name : 'Fang', detail : 'cute'}
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
        let card = (person, index) => {
            return <div class = 'col-1-of-3'>
                <Card
                name = {person.name}
                detail = {person.detail}
                key = {person.id}/>
                </div>
        };

        let people = this.state.friends.splice(0,3);
        let firstFriends = (
          <div class = 'row'>
            {people.map( (person, index) => {
              return card(person, index);
            })}
          </div>
        );


        let x = this.state.friends[0];
        return(
            <div>
                <div class = 'u-center-text u-margin-bottom-big'>
                        <h2 class = 'heading-secondary'> Most closest friend </h2>
                </div>
            {firstFriends}
        </div>
      );
    }
}

export default Friends;
