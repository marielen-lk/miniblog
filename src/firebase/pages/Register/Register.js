import { useAutenticacao } from '../../../hooks/useAutenticacao';
// eslint-disable-next-line no-unused-vars
import style from './Register.module.css';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';

const Register = () => {
    const [displayName,setdisplayName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setconfirmPassword] = useState("")
    const [error,setError] = useState("")

    const { createUsuario, error: authError, loading} = useAutenticacao ();
    const handleSubmitMarielen = async (e) =>{
        e.preventDefault()
        setError ("")
    const userDRM = {
        displayName,email,password
    }
    if (password !== confirmPassword){
        setError("As senhas precisam ser iguais.")
        return
    }
    const resUseAutenticaco = await createUsuario (userDRM)
    console.log("Conteudo de resUseAutenticacao: ", resUseAutenticaco)
    console.log("Conteudo de userDRM: ", userDRM)
    // console.log(userDRM)
    };
    useEffect(() =>{
        if (authError){
            setError (authError)
        }
    }, [authError])
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3> Cadastre-se </h3>
            <p>Fique por dentro de tudo que acontece no mundo Fotovoltaico</p>
            <form onSubmit={handleSubmitMarielen}>
                <label>
                    <span>Nome: </span>
                    <input type='text' name='displayName' required placeholder='Nome do usuário' value={displayName} onChange={(e) => setdisplayName (e.target.value)} />
                </label>
                <label>
                    <span>E-mail: </span>
                    <input type='email' name='email' required placeholder='E-mail do usuário' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha: </span>
                    <input type='password' name='password' required placeholder='Senha do usuário' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type='password' name='ConfirmPassword' required placeholder='Confirme senha do usuário' value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                </label>
                    {!loading && <button className={style.botao}>Cadastrar</button>}
                {error && <p className='error' > {error} </p>}

            </form>
        </div>
    )
}

export default Register