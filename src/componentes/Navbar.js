// eslint-disable-next-line no-unused-vars
import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

import {useAutenticacao} from '../hooks/useAutenticacao';
import {useAuthValueFac} from "../context/AuthContextFaculdade";

const Navbar =() => {
    const {user} = useAuthValueFac()
    const {logout} = useAutenticacao();

    return <nav className={style.navbar}>
        <NavLink to="/" className={style.brand}>
    
        </NavLink>
        <div>
        <ul className={style.links_list}>
            <li>
                <NavLink to="/" className={ ({isActive}) => (isActive ? style.active : "")}>Home </NavLink>
            </li>
            <li>
                <NavLink to="/about" className={ ({isActive}) => (isActive ? style.active : "")}>Sobre </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className={ ({isActive}) => (isActive ? style.active : "")}>Contato </NavLink>
            </li>
            <li>
                <NavLink to="/how" className={ ({isActive}) => (isActive ? style.active : "")}>Como Funciona? </NavLink>
            </li>
            {!user && (<>
            <li>
                <NavLink to="/login" className={ ({isActive}) => (isActive ? style.active : "")}>Entrar </NavLink>
            </li>
            <li>
                <NavLink to="/register" className={ ({isActive}) => (isActive ? style.active : "")}>Cadastrar </NavLink>
            </li>
            </>)}
            {user && (<>
            <li>
                <NavLink to="/simulacao" className={ ({isActive}) => (isActive ? style.active : "")}>Simulação</NavLink>
            </li>
            <li>
                <NavLink to="/portifolio" className={ ({isActive}) => (isActive ? style.active : "")}>Portifolio</NavLink>
            </li>
            </>)}
            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}
        </ul>
        </div>
    </nav>;
}

export default Navbar