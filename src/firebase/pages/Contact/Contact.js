import style from './Contact.module.css';
import { useState } from 'react'; // Removi o import não utilizado 'useEffect'
import { db } from '../../../firebase/config.js';

import { AuthProviderFac } from '../../../context/AuthContextFaculdade.js';
import { useNavigaState } from 'react';
import { useInserirMensagem } from "../../../hooks/useInserirMensagem.js";



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // Adicione o estado de loading se necessário

    // Firestore Database -  
    const { inserirDocumento, resposta } = useInserirMensagem("mensagens")
 



    const handleSubmit = async (e) => {
        e.preventDefault(); // Evite que o formulário seja submetido automaticamente

        const inserirDocumento = {
            name,
            email,
            telephone,
            message

        };


    };

    return (
        <div><br></br>
            <p>Em caso de dúvidas, entre em contato!</p><br></br>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome Completo: </span>
                    <input type='name' name='name' required placeholder='Nome do usuário' value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail: </span>
                    <input type='email' name='email' required placeholder='E-mail do usuário' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Telefone: </span>
                    <input type='telephone' name='telephone' required placeholder='Telefone do usuário' value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                </label>
                <div className={style.message}>
                    <label>
                        <span>Mensagem: </span>
                        <textarea
                            className={style.textMessage}
                            name='message'
                            required
                            placeholder='Deixe aqui a sua mensagem'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} />
                    </label>
                </div>
                {!resposta.loading ? (
                    <button className={style.botao}>Enviar</button>
                ) : (
                    <div>Enviando...</div>
                )}
            </form>
        </div>
    );
}

export default Contact;
