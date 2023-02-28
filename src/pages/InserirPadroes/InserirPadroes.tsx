import React from "react";





const InserirPadroes = ()=> {

    return(
            <div className="container-lg form-group d-flex justify-content-center">
                <form className="container-lg form-group d-flex flex-column justify-content-center">
                    <div className="form-group col-lg-6 mb-0">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Tag</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="text" className="form-control col-lg-12" id="Tag"/>
                            </div>
                    </div>
                    <div className="form-group col-lg-6 mb-0">
                        <label  className="col-sm-2 col-lg-3 col-form-label">N° DE Série</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="text" className="form-control col-lg-12" id="Numserie"/>
                            </div>
                    </div>
                    <div className="form-group col-lg-6 mb-0">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Tipo</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="text" className="form-control col-lg-12" id="tipo"/>
                            </div>
                    </div>
                    <div className="form-group col-lg-6">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Modelo</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="text" className="form-control col-lg-12" id="Modelo"/>
                            </div>
                    </div>
                    <div className="form-group col-lg-6">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Fabricante</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="text" className="form-control col-lg-12" id="Fabricante"/>
                            </div>
                    </div>
                    <div className="form-group col-lg-6">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Setor</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="text" className="form-control col-lg-12" id="setor"/>
                            </div>
                    </div>
                    <div className="form-group col-lg-6 d-flex flex-row">
                        <div className="form-group col-lg-9">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Proxima calibração</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="data" className="form-control col-lg-12" id="proxCal"/>
                            </div>
                        </div>
                        <div className="form-group col-lg-3">
                            <label  className="col-sm-2 col-lg-3 col-form-label">calibrar a cada</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="data" className="form-control col-lg-12" id="calibrarA"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-lg-6 d-flex flex-row mb-2">
                        <div className="form-group col-lg-9">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Proxima verificação</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="data" className="form-control col-lg-12" id="proxiVerif"/>
                            </div>
                        </div>
                        <div className="form-group col-lg-3">
                            <label  className="col-sm-2 col-lg-3 col-form-label">Verificar a cada</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="data" className="form-control col-lg-12" id="VerificarA"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-lg-6 d-flex flex-row mb-2">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Utilizado em campo</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="data" className="form-control col-lg-12" id="UtilizadoCamp"/>
                            </div>
                    </div>
                    <div className="form-group col-lg-6 d-flex flex-row mt-2 mb-2">
                        <label  className="col-sm-2 col-lg-3 col-form-label">Calibrar com</label>
                            <div className="col-sm-10 col-lg-9">
                                <input type="data" className="form-control col-lg-12" id="CalibrarCom"/>
                            </div>
                    </div>
                    
                    <button value="gravar" className="btn-primary" />
                </form>
            </div>
    )
}



export default InserirPadroes;
