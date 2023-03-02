import React, { Component } from "react";
import {timetable} from "../pages/timetable"
import { useRouter } from 'next/router'

class CASDdrop extends Component{
    constructor() {
        super();
        this.state = {
            DDL1 :[],
            DDL2 : [],
            selectddl: '',
        };
    }

    componentDidMount() {
        this.setState({
            DDL1 : [
                {name:'Course', DDL2 : ['IT','CS','Biotech','BAF']},
                {name:'Year', DDL2 : ['2018','2019','2020','2021','2022','2023']},
                {name:'Semester', DDL2 : ['Semeter1','Semeter2','Semeter3','Semeter4','Semeter5','Semeter6']},
                {name:'Division', DDL2 : ['A','B','C','D']},
            ]
        });
    }

    selectChange(e) {
        this.setState({selectddl : e.target.value });
        this.setState({ DDL2: this.state.DDL1.find(x => x.name === e.target.value).DDL2 })
    }

    render() {
        return (
            <div>
                      <h1>Auto Timetable Generator</h1>
                      <hr/>
                <center>
                    <h3>Select field</h3>
                <select value={this.state.selectddl}  onChange={this.selectChange.bind(this)}>
                    <option> --Select-- </option>
                    {this.state.DDL1.map(x => {
                             return <option>{x.name}</option>
                     })}
                </select>

                <select>
                    {/* <option selected disabled>
                        -------------------
                  or you can use this  </option> */} 

                    <option>
                        -------------------
                    </option>
                    {
                        this.state.DDL2.map(x => {
                            return <option>{x}</option>
                        })
                    }
                </select>
                </center>
{/* const handleSubmitClick = () => {
    router.push('/student')
  } */}

<br/><br/><br/><br/><br/><br/>
<center>
    {/* <button onClick={handleSubmitClick}>Submit</button> */}
    <button>Submit</button>

</center>
            </div>
        )
    }
          
        
}

  

  

export default CASDdrop;