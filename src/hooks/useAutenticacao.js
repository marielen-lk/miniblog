import {db} from "../firebase/config";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from "firebase/auth"
import { useState, useEffect } from "react";

export const useAutenticacao=() => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelarAposdarCerto, setCancelarAposdarCerto]= useState(false)
    const auth = getAuth()
    function validarIfIsCancelled(){
        if (cancelarAposdarCerto){
            return;
        }
    }
    const createUsuario = async (data) => {
        validarIfIsCancelled()
        setLoading(true)
        setError("");
        try{
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {displayName: data.displayName})
            setLoading (false)
            return user
        }
        catch(catError){
            console.log(catError.message)
            console.log(typeof catError.message)
            let erroAPI
            if (catError.message.includes ("Password")){
                erroAPI = "A senha deve conter 6 caracteres!"
            } else{
                if (catError.message.includes ("email-already")){
                    erroAPI = "E-mail já cadastrado."
                }else{
                    erroAPI = "Ocorreu um erro, tente novamente depois."
                }
            }
            setError (erroAPI)
            setLoading(false)
        }
    };
    useEffect ( () => {
        return () => setCancelarAposdarCerto (true);
    }, [])
    
    const logout = async () => {
        validarIfIsCancelled();
        signOut (auth);
    }

    const login = async (data) => {
        validarIfIsCancelled ();
        setError(false)
        setLoading (true)
        try{
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setError(false)
        } catch (catError){
            let erroAPI
            if (catError.message.includes ("user-not-found")){
                erroAPI ="Usuário não cadastrado."
            } else {
                if (catError.message.includes ("wrong-password")){
                    erroAPI ="Senha incorreta."
                } else {
                    erroAPI ="Ocorreu um erro no login, tente mais tarde."
                }
            }
            setError(erroAPI)
            setLoading(false)
        }
    }

    return{
        auth,createUsuario, error, loading, logout, login
    }
};