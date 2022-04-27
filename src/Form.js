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
        role:'Batman',
        team: 'A'
    },{
        name:'Artanis',
        email:'sc@gmail.com',
        role:'Executor',
        team: 'B'
    }]
    const blankForm = {
        name:'',
        email:'',
        role:'',
        team: ''
    }

    const [currentTeam, setCurrentTeam] = useState(initialTeam);
    const [addMember, setAddMember] = useState(blankForm);
    const [memberToEdit, setMemberToEdit] = useState('')
  
    function onChange(evt){
        const {name, value} = evt.target
        setAddMember({...addMember, [name]:value})
    }

    function submit(evt){
         evt.preventDefault();

         if(memberToEdit){
            let clone = [...currentTeam]
            clone.splice(memberToEdit,1,addMember)
            setCurrentTeam(clone)
            setAddMember(blankForm)
            setMemberToEdit('')
         }else{
             if(addMember)
            console.log(addMember)
            let clone = [...currentTeam, addMember]
            setCurrentTeam(clone)
            setAddMember(blankForm)
         }
    }

    function editMember(evt){
        setMemberToEdit(evt)
        setAddMember(currentTeam[evt])
        console.log(memberToEdit)
    }


    function showToggle(i){
        const bttn = document.querySelector(`#button${i}`)
        bttn.classList.toggle('show')
    }

    return (
        <div>
            <div>
                <h3>Come join the team, enter below now.</h3>
                <h5>To edit current member, click on row then edit button.</h5>
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
                    <select name = 'team' onChange={onChange}>
                        <option></option>
                        <option value='A'>Team A</option>
                        <option value='B'>Team B</option>
                    </select>
                    <input type = 'submit'/>
                </form>
            </div>
            <div>Team A
                <FormRow>
                    <FormDiv>Name</FormDiv> 
                    <FormDiv>Email</FormDiv> 
                    <FormDiv>Role</FormDiv> 
                </FormRow>
                {
                    currentTeam.map((a,i)=>{
                        if(a.team ==='A'){
                            return <FormRow key = {i} onClick={()=>showToggle(i)}>
                                    <FormDiv>{a.name}</FormDiv> 
                                    <FormDiv>{a.email}</FormDiv>  
                                    <FormDiv>{a.role}</FormDiv>
                                    <button id = {`button${i}`} onClick = {()=>editMember(i)}>Edit</button>
                                </FormRow>                
                        }else{
                            return ''
                        }
                                           
                    })
                }
            </div>
            <div>Team B
                <FormRow>
                    <FormDiv>Name</FormDiv> 
                    <FormDiv>Email</FormDiv> 
                    <FormDiv>Role</FormDiv> 
                </FormRow>
                
                {
                    currentTeam.map((a,i)=>{
                        if(a.team ==='B'){
                            return <FormRow key = {i} onClick={()=>showToggle(i)}>
                                    <FormDiv>{a.name}</FormDiv> 
                                    <FormDiv>{a.email}</FormDiv>  
                                    <FormDiv>{a.role}</FormDiv>
                                    <button id = {`button${i}`} onClick = {()=>editMember(i)}>Edit</button>
                                </FormRow>                
                        }else{
                            return ''
                        }                 
                    })
                }
            </div>
        </div>
    )
}