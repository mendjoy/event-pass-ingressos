"use client"

import { useState } from "react"
import Link from "next/link"

//components
import ErrorMessage   from "../../../components/ErrorMessage/ErrorMessage"
import SuccessMessage from "../../../components/SuccessMessage/SuccessMessage"

//context
import { useAuth } from "../../../context/AuthContext"

const Register = () => {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const { login } = useAuth()

    //const navigate = useNavigate()
    

    const handleSubmit = async (event) => {
        event.preventDefault()

        const userData = {
            name,
            username,
            email,
            birthDate,
            phone,
            password,
            confirmPassword,
        }
    
        try {
            
            const data = await postData("/user/register", userData)

            if(data.error){
                
                setErrorMessage(data.message)

            }else{
                login(data.data.username, data.data.token)

                setSuccessMessage(data.message)
               
                setTimeout(() => {
                    setSuccessMessage("")
                    setName("")
                    setUsername("")
                    setEmail("")
                    setBirthDate("")
                    setPhone("")
                    setPassword("")
                    setConfirmPassword("")
                   // navigate("/profile")
                  }, 2000)
            }
        } catch (error) {
            setErrorMessage(error.message)
        }
    }

    return (
        <div className="formContainer">
            <div>
                <form onSubmit={handleSubmit}>
                    {successMessage && ( <SuccessMessage message={successMessage}/> )}   
                    {errorMessage && ( <ErrorMessage message={errorMessage} />) }

                    <h2 className="formTitle">Cadastro</h2>
                    <input type="text" 
                           placeholder="Nome"
                           value={name} 
                           onChange={(e) => { 
                                setName(e.target.value)  
                                setErrorMessage('') 
                            }}  />

                    <input type="text" 
                           placeholder="Nome de Usuario"
                           value={username} 
                           onChange={(e) => {
                                setUsername(e.target.value)
                                setErrorMessage('') 
                            }} />

                    <input type="email" 
                           placeholder="E-mail"
                           value={email} 
                           onChange={(e) => {
                                setEmail(e.target.value)
                                setErrorMessage('') }} />

                    <input type="date" 
                           placeholder="Data de Nascimento"
                           value={birthDate}
                           onChange={(e) => {
                                setBirthDate(e.target.value)
                                setErrorMessage('') 
                            }} />

                    <input type="tel" 
                           placeholder="Telefone"
                           mask="(99) 99999-9999"
                           value={phone}
                           onChange={(e) => { 
                                setPhone(e.target.value)
                                setErrorMessage('') 
                            }} />

                    <input type="password" 
                           placeholder="Senha"
                           value={password}
                           onChange={(e) => { 
                                setPassword(e.target.value)
                                setErrorMessage('') 
                            }} />

                    <input type="password" 
                           placeholder="Confirmar Senha"
                           value={confirmPassword}
                           onChange={(e) => {
                                setConfirmPassword(e.target.value)
                                setErrorMessage('') 
                            }} />

                    <div className="registerLoginDiv">
                        Já possui conta? <Link href="/user/login">Entrar</Link>
                    </div>
                    <button type="submit" className="blueButton">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Register