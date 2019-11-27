import React, { Component } from 'react'


import {  connect } from 'react-redux'

let formStyle = {
    height:300,
    width:300,
    
    margin:"auto",
    marginTop:"275px",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:"10px"
}

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
        }
    }
// 我们可以使用 onChange 事件来监听 input 的变化，并修改 state。
 
    userNameChange = (e) =>{
        this.setState({
            username:e.target.value
        })
        // console.log(this.state);
    }

    passWordChange = (e) =>{
        this.setState({
            password:e.target.value
        })
    }

    newUser = (e) => {
        if(this.state.username == '' ||  this.state.password == '') return alert('不能为空')
        let user ={ username:this.state.username,password:this.state.password }
        if(!window.localStorage.getItem('user')){
            let userList = []
            userList.push(user)
            window.localStorage.setItem('user',JSON.stringify(userList))
        }else{
           let userList = JSON.parse(window.localStorage.getItem('user')) 
           userList.push(user)
           window.localStorage.setItem('user',JSON.stringify(userList))
        }
        this.setState({
            username:'',
            password:'',
        })
        alert('注册成功')
        console.log(this.state);
        
    }


    handleLogin = (e) => {
        // console.log(this.state);
        
        let userList = JSON.parse(window.localStorage.getItem('user'))
        let findUser = userList.find(item => item.username == this.state.username)
        if(findUser){
           if(findUser.password == this.state.password){
            // history.push('/index')
            const { dispatch }  = this.props
            dispatch({type:"add",username:findUser.username})
            console.log(this.props);
            
            this.props.history.push('/index')
            // window.location.href = '/index'

           }else{
            alert('您的输入有误')
           }
        }else{
            alert('您的输入有误')
        }
    }
render(){
   return (
     
     <div className='login' style={formStyle}>
         <div className="loginTop"></div>
         <p>账号  :  <input value={this.state.username} onChange={this.userNameChange}/></p>
         <p>密码  :  <input value={this.state.password} onChange={this.passWordChange}/></p>
         <br />
         <div>
             <button onClick={this.handleLogin}>登录</button>
             <button onClick={this.newUser}>注册</button>
         </div>
     </div>
  
   )
 }
}

export default connect()(Login)