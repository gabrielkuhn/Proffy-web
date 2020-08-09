import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars3.githubusercontent.com/u/67128059?s=460&u=a2c94b3ee7371f6112528bf53fbf97d9c38c7347&v=4" alt="Teacher"/>
                        <div>
                            <strong>Gabriel Kuhn</strong>
                            <span>Fazedor de merda</span>
                        </div>
                    </header>
                    <p>
                        Apaixonado por fazer merda. Sempre cagando no pau e ferrando com tudo.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$24,69</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="WhatsappIcon"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem