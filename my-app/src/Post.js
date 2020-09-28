import React, { Component } from 'react'

class Post extends Component {

    state={
        value:'sometext here',
        isEditmode:true
    }

    changeEditMode=()=>{
        this.setState({isEditmode:
            !this.state.isEditmode})
       
    }

    render() {


        return this.state.isEditmode?
        <div>
 <input 
 type='text'
 defaultValue={this.state.value}


 />
        </div>:

            <div onDoubleClick={this.changeEditMode}>
            {this.state.value}
            </div>
        
    }
}
export default Post;
