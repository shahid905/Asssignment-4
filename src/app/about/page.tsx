export default function About () {
    // const listDirectors = ["Naveed Sarwar" , "Ali" , "Ahmed"]
    const students = [  
        {  
           name:'arun',
           gender:'Male',
           physics:88,
           maths:87,
           english:78
        },
        {  
           name:'rajesh',
           gender:'Male',
           physics:96,
           maths:100,
           english:95
        },
        {  
           name:'moorthy',
           gender:'Male',
           physics:89,
           maths:90,
           english:70
        },
        {  
           name:'raja',
           gender:'Male',
           physics:30,
           maths:25,
           english:40
        },
        {  
           name:'usha',
           gender:'Female',
           physics:67,
           maths:45,
           english:78
        },
        {  
           name:'priya',
           gender:'Female',
           physics:56,
           maths:46,
           english:78
        },
        {  
           name:'Sundar',
           gender:'Male',
           physics:12,
           maths:67,
           english:67
        },
        {  
           name:'Kavitha',
           gender:'Female',
           physics:78,
           maths:71,
           english:67
        },
        {  
           name:'Dinesh',
           gender:'Male',
           physics:56,
           maths:45,
           english:67
        },
        {  
           name:'Hema',
           gender:'Female',
           physics:71,
           maths:90,
           english:23
        },
        {  
           name:'Gowri',
           gender:'Female',
           physics:100,
           maths:100,
           english:100
        },
        {  
           name:'Ram',
           gender:'Male',
           physics:78,
           maths:55,
           english:47
        },
        {  
           name:'Murugan',
           gender:'Male',
           physics:34,
           maths:89,
           english:78
        },
        {  
           name:'Jenifer',
           gender:'Female',
           physics:67,
           maths:88,
           english:90
        }
     ]
    return (
        // <div>
        //     <h1> List of Directors</h1>
        //     {/* <h2> {listDirectors[0]}</h2>
        //     <h2>1-  {listDirectors[1]}</h2>
        //     <h2>1-  {listDirectors[2]}</h2> */}
        //     {listDirectors.map((item , index)=>{
        //         return (
        //             <h2 key={index}> {index} - {item} </h2>
        //         )
        //     })}


        // </div>

        <div>
            <h1> Students Data </h1>
                return(
                    <table border={1}>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Physics</th>
                            <th>Maths</th>
                            <th>English</th>
                            <th>Delete</th>
            
                        </tr>
            
                    
                            {students.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                    <td >{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.maths}</td>
                                    <td>{item.physics}</td>
                                    <td>{item.english}</td>
                                    <td><button>Delete</button></td>
                                </tr>
                                )
                            })}
                                
                            
                        </table>
{/* //                     <table border={2}>
//                         <tr>
//                             <td> 
//                                 <h2>{item.name}</h2>
// </td>
//                     <td>
//                     <h2>{item.gender}</h2>
//                     </td>
//                     <td>
//                     <h2>{item.physics}</h2>

//                     </td>
//                     <td>
//                     <h2>{item.maths}</h2>

//                     </td>
//                     <td>
//                     <h2>{item.english}</h2>

//                     </td>
//                         </tr>
//                     </table>
                )
            })} */}
        </div>
    )
}
