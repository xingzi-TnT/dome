import React,{Component} from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import {  connect } from 'react-redux'


import Tab1 from './Home/Tab1'
import Tab2 from './Home/Tab2'
import Index from './Home/Index'


class Home extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            List:[
                {
                    title:"tab1",
                    url:"tab1"
                },
                {
                    title:"tab2",
                    url:"tab2"
                },
                {
                    title:"tab3",
                    url:"tab3"
                },
                {
                    title:"tab4",
                    url:"tab4"
                },
            ],
        }
    }

    goLogin = (e) => {
        this.props.history.push('/')
    }
    

    render(){
        return(
            <div>
                <header>
                    {this.props.name == undefined ? <button className="fr" onClick={this.goLogin}>请登录</button> : <h2 className="fr">{this.props.name}</h2>}
                    
                    
                </header>
                <div className='main'>
                    <aside>
                        <ul>
                            {
                                this.state.List.map(item => 
                                    <li><Link to={`/index/${item.url}`}>{item.title}</Link></li>
                                )
                            }
                        </ul>
                    </aside>
                    
                    <article>
                        
                        <Route  exact path='/index/' component={Index}/>
                        
                        <Route  path='/index/tab1' component={Tab1}/>
                        <Route  path='/index/tab2' component={Tab2}/>
                        
                    </article>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      name:state,
    }
  }

export default connect(mapStateToProps)(Home)
