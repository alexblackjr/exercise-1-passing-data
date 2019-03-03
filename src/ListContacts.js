import React, { Component } from 'react';


class ListContacts extends Component{
	render(){
      console.log( 'Props', this.props );
    	return(
        	<ol>
				{ this.props.profiles.map( ( profile ) => {
                	<li>
                      { users[ profile.userID ].name  }
               			<h2>favorite Movies is</h2>
                  	</li>
                })}
				
			</ol>
        )
    }
}

export default ListContacts