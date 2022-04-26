import styled from 'styled-components'
import { useState } from 'react';

const FormRow = styled.div`
    display:flex;
`

const FormDiv = styled.div`
    border: 2px solid white;
    width:200px;
    font-size:20px;
    text-align: left;
`

export default function(props){
    const initialTeam = [{
        name:'Bruce Wayne',
        email:'bw@gmail.com',
        role:'Batman'
    }]
    const blankForm = {
        name:'',
        email:'',
        role:''
    }

    const [currentTeam, setCurrentTeam] = useState(initialTeam);
    const [addMember, setAddMember] = useState(blankForm);
  
    function onChange(evt){
        const {name, value} = evt.target
        setAddMember({...addMember, [name]:value})
    }

    function submit(evt){
         evt.preventDefault();
         let clone = [...currentTeam, addMember]
         setCurrentTeam(clone)
         setAddMember(blankForm)
    }

    return (
        <div>
            <div>
                <form onSubmit ={submit}>               
                    <input 
                        name = 'name' 
                        type = 'text' 
                        placeholder='Enter Name'
                        onChange = {onChange}
                        value = {addMember.name}
                        maxLength = '14'
                    />
                    <input 
                        name = 'email' 
                        type = 'text' 
                        placeholder='Enter Email'
                        onChange = {onChange}
                        value = {addMember.email}
                    />
                    <input 
                        name = 'role'
                        type = 'text' 
                        placeholder='Enter Role'
                        onChange = {onChange}
                        value = {addMember.role}
                    />
                    <input type = 'submit'/>
                </form>
            </div>
            <div>
                {
                    currentTeam.map((a,i)=>{
                        return      <FormRow key = {i}>
                                        <FormDiv>{a.name}</FormDiv> 
                                        <FormDiv>{a.email}</FormDiv>  
                                        <FormDiv>{a.role}</FormDiv>
                                        <button>Edit</button>
                                    </FormRow>
                                    

                    })
                }
            </div>
        </div>
    )
}