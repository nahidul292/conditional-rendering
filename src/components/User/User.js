import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    console.log(familiar);
    let greetings;
    if(familiar){
        greetings= <p>Welcome, my friend.</p>
    }
    else{
        greetings= <p>Who the hell are you?</p>
    }
    return (
        <div>
           <h1>Greetings</h1>
            {greetings}
           <br/>
           <h1>Food</h1>
           {    
                familiar ? <p>I will buy you a food.</p> : <p>Let's eat his his whose whose</p>
           }
           <br/>
           <h1>Connect</h1>
           {
               familiar &&  <p>Lets Join you on facebook.</p>
           }
          
        </div>
    );
};

export default User;