import { createStore } from 'redux'

const Store = createStore(LoginUser)

function LoginUser(state='',action){
    switch(action.type){
        case "add":
            state = action.username
            return state
        case "delete":
            state.username = ''
            return state
    }
}

Store.subscribe(function(){
    
})

export default Store