import React from "react";
import Style from './compentabar.module.css';
import calibracaoImg from './imgs/calibracao.png';
import certificadoImg from './imgs/certificado.png';
import clientesImg from './imgs/clientes.png';
import padroesImg from './imgs/padroes.png';
import ordermServImg from './imgs/ordemServico.png';
import instrumentosImg from './imgs/instrumentos.png';

const ComponentsBar = ()=> {
    const redirect = ()=> alert('ok!')

    return (
        <>
            <div id={Style.MainELement} >
                    <div id={Style.SubElementBar}>
                            <div id={Style.ELementContent} onClick={redirect}>
                                <img src={ordermServImg} id={Style.imgElement}/>
                                <p>Ordem de Serviço</p>
                            </div>
                            <div id={Style.ELementContent} onClick={redirect}>
                                <img src={instrumentosImg} id={Style.imgElement}/>
                                <p>Instrumentos</p>
                            </div>
                            <div id={Style.ELementContent} onClick={redirect}>
                                <img src={calibracaoImg} id={Style.imgElement}/>
                                <p>Calibração</p>
                            </div>
                            <div id={Style.ELementContent} onClick={redirect}>
                                <img src={clientesImg} id={Style.imgElement}/>
                                <p>Clientes</p>
                            </div>
                            <div id={Style.ELementContent} onClick={redirect}>
                                <img src={padroesImg} id={Style.imgElement}/>
                                <p>Padrões</p>
                            </div>
                            <div id={Style.ELementContent} onClick={redirect}>
                                <img src={certificadoImg} id={Style.imgElement}/>
                                <p>Certificados</p>
                            </div>
                    </div>
            </div>
        </>
    )
}

export default ComponentsBar;