import React, {useState, createContext} from 'react'; 

const SimplesContext = createContext({}); 

export function SimplesProvider ({ children }){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState(''); 
    const [cpf, setCpf] = useState('');
    const [escolaridade, setEscolaridade] = useState('');
    const [idioma, setIdioma] = useState('');
    const [experiencia, setExperiencia] = useState(''); 

    return (
        <SimplesContext.Provider value={{
            nome, setNome, email, setEmail, cpf, setCpf,escolaridade, setEscolaridade, 
            idioma, setIdioma, experiencia, setExperiencia
        }}> 
            { children }
        </SimplesContext.Provider>
    );
};

export default SimplesContext;