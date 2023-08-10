import { useState } from "react";

const Data = ()=>{
    const [input,setInput]=useState([
        {
            name:'',
            email:'',
            salary:'',
        }
    ])
    const [error,setError]=useState({});
    const AddData =()=>{
        let singleData={name:'',email:'',salary:''};
        let data = [...input,singleData];
        setInput(data);
    }
    const handleClick = (index,e)=>{
        let data=[...input];
        data[index][e.target.name]=e.target.value;
        setInput(data);
        console.log(data);
    }
    const Remove = (index)=>{
        let data = [...input];
        data.splice(index,1);
        setInput(data);
    }
    return(
        <>
            <center>
                <h1>Add & Delet Table Row Dynamically</h1>
                <table cellPadding={20}>
                    <tr>
                        <th>Full Name</th>
                        <th>Email Address</th>
                        <th>Salary</th>
                        <th><input type="button" value="+" onClick={()=>AddData()}/></th>
                    </tr>
                    {
                        input.map((v,index)=>{
                            return(
                                <tr key={index}>
                                    <td><input type="text" name="name" value={v.name} onChange={(e)=>handleClick(index,e)}/></td>
                                    <td><input type="email" name="email" value={v.email} onChange={(e)=>handleClick(index,e)}/></td>
                                    <td><input type="number" name="salary" value={v.salary} onChange={(e)=>handleClick(index,e)}/></td>
                                    <td><button onClick={()=>Remove(index)}>Remove</button></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </center>
        </>
    )
}
export default Data;