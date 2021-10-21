// import React,{useEffect} from "react";
// import { useDispatch, useSelector} from "react-redux";
// import {putAdmin, getAllUsers} from '../../actions/index'
// import { useState } from "react";
// import NavBar from '../NavBar/NavBar'

// export default function AdministracionAdmin() {
//     const dispatch = useDispatch()
//     const [input , setInput] = useState({
//         id:"",
//         newBan:"",
//         newState:""
//     })
//     useEffect(()=>{
//         dispatch(getAllUsers())
//     },[dispatch])

//     const AllUsers = useSelector((state) => state.usersAll)
//     console.log(AllUsers?.map(el => el.fullname));
//     function handleState(e) {
//         console.log(e.target.value);
//         setInput({
//             ...input,
//             newState:e.target.value
//         })
//     }
//     function handleBan(e) {
//         console.log(e.target.value);
//         setInput({
//             ...input,
//             newBan:e.target.value
//         })
//     }
//     function handleId(e) {
//         setInput({
//             ...input,
//             id:e.target.value
//         })
//         console.log(input);
//     }
//     function handleClick(e) {
//         e.preventDefault()
//         dispatch(putAdmin(input))
//     }
    
//     return(  
//         <div>
//             <NavBar/>
//             <div>
//             <select onChange={(e) => handleId(e)}>
//                  { AllUsers?.map((el) =>{
//                    // console.log('elementCArbd',el)
//                      return(
//                         <option value={el._id} >
//                         {el.fullname}| id: {el._id} | Estado:{el.state}
//                         </option>
//                   )   
//                 }
//                 )}
//                     </select>
//             <select onChange={(e) => handleState(e)}>
//                 <option value="admin">Admin</option>
//                 <option value="user">User</option>
//             </select>
//             <select onChange={(e) => handleBan(e)}>
//                 <option value="true">Banearlo</option>
//                 <option value="false">DesBanearlo</option>
//             </select>
//             </div>
//             <div>
//                 <button onClick={(e) => handleClick(e)}></button>
//             </div>
//         </div>
//     )
// } 