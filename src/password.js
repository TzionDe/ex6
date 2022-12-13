import{useEffect, useState} from"react";


function Password() {
    const[Password_num,setPass]=useState("")
    const[button_state,setState]=useState("false")
    const[strength,setStrength]=useState("")


    function handlePassword(e){
        setPass(String(e.target.value))
    }
    
    useEffect(()=>{
    if (Password_num.length < 3) {
        setState("false")
        setStrength("weak")
    }
    else {
        setState("")    
        if (Password_num.length>6) {
            setStrength("Strong")
        }
        else setStrength("Medium")
    }
    console.log(strength);
    console.log(Password_num);
    console.log(Password_num.length);


})

    return (
        <div>
            <input value={Password_num} type="password" onChange={handlePassword}></input>
            <button disabled={button_state}>Submit</button>
            <h3>{strength}</h3>
        </div>
      );
    }
    
    export default Password;