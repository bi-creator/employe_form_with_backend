import React from "react";
import validator from "validator";
import { isValidPhoneNumber } from 'react-phone-number-input'
import Api from "../Api/Api";


class Form extends React.Component{
    state={FirstName:'',MiddleName:'',LastName:'',Number:[],Email:''}
    formsubmit=(event)=>{
        event.preventDefault();
        if(!validator.isEmail(this.state.Email)){
           alert('In valid Email')
        }else if(!isValidPhoneNumber('+91'+this.state.Number)){
            alert('in valid phone number')
        }
        else{
            this.apicall()
            this.setState({FirstName:'',MiddleName:'',LastName:'',Number:'',Email:''})

        }
    }
    apicall= async ()=>{
        const responce=await Api.get('/empdata',{
            params:{
               Name:this.state.FirstName,
               Number:this.state.Number,
               Email:this.state.Email
            }
          })
        
        alert(responce.data)}

    

    render(){
        return(
        <div className="ui raised segment ">
        <form  className="ui form">
            <h4 className="ui dividing header">Employe Form</h4>
            <div className="fields">
                <div className="field">
                <label >First Name</label>
                <input type='text' value={this.state.FirstName} onChange={e=>{this.setState({FirstName:e.target.value})}} placeholder="First Name" ></input>
                </div>
                <div className="field">
                <label >Middle Name</label>
                <input type='text' value={this.state.MiddleName} onChange={e=>{this.setState({MiddleName:e.target.value})}} placeholder="Middle Name" ></input>
                </div>
                <div className="field">
                <label >Last Name</label>
                <input type='text' value={this.state.LastName} onChange={e=>{this.setState({LastName:e.target.value})}} placeholder="Last Name" ></input>
                </div>
            </div>
            <div className="field">
                <label > Number</label>
                <input type='text' value={this.state.Number} onChange={e=>{this.setState({Number:e.target.value})}} placeholder="Phone Number" ></input>
                <label > Email</label>
                <input type='text' value={this.state.Email} onChange={e=>{this.setState({Email:e.target.value})}} placeholder="example@gmail.com" ></input>
            </div>
            
             
        </form><br/>
        <button className="ui button" onClick={this.formsubmit}>Submit</button>
       </div>
        )
        }
}


export default Form;