/* eslint-disable no-unused-vars */
import React, { useEffect,useState } from 'react';
import styles from './style.module.css';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.imagem}>
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/abe2803b-1256-4f65-a1bd-7fd4d4ad997c/BR-pt-20240527-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
      </div>

      <div className={styles.limitador}>
        <div className={styles.netflixlogo}>
        </div>

        <div className={styles.fundobase}>
          <h1>Login</h1>
            <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Email ou número de celular'/>
            <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Senha'/>

            <button type='button'>Entrar</button>
            <p><strong>OU</strong></p>
            <button className={styles.entrar2}>Usar um código de acesso</button>
            <a href="https://www.netflix.com/br/LoginHelp">Esqueceu a senha</a>
            
            <div className={styles.checkbox}><input type="checkbox"/><p>Lembre-se de mim</p></div>

            <p>Novo por aqui? <a href="https://www.netflix.com/br/">Assine agora.</a></p>

        </div>

      </div>
    </div>
  )
}

export default App
