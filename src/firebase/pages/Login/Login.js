import { useAutenticacao } from '../../../hooks/useAutenticacao';
// eslint-disable-next-line no-unused-vars
import style from './Login.module.css';
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [error,setError] = useState("")

    const { login, error: authError, loading} = useAutenticacao ();
    const handleSubmitMarielen = async (e) =>{
        e.preventDefault()
        setError ("")
    const userDRM = {
        email,password
    }

    const resUseAutenticaco = await login (userDRM)
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
            <br></br>
            <h3> Entrar </h3>
            <p>Faça o login para entrar no blog</p>
            <form onSubmit={handleSubmitMarielen}>
                <label>
                    <span>E-mail: </span>
                    <input type='email' name='email' required placeholder='E-mail do usuário' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha: </span>
                    <input type='password' name='password' required placeholder='Senha do usuário' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                    {!loading && <button className={style.botao}>Entrar</button>}
                {error && <p className='error' > {error} </p>}
            </form>
        </div>
    )
}

export default Login
