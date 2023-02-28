import React from "react";
import { TextField, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Style from './inserirInstrumento.module.css';
import $ from 'jquery';
import { borderRadius } from "@mui/system";
import InserirClientes from "../inserirClientes/inserirClientes";
const InserirInstrumento = ()=>{
    const handlerChange = ()=>{

    }
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const company = ()=>{
        let response =  $.get({
            url: 'http://127.0.0.1:8000/',
            async: true,
            success: (result, status, xhr)=>{
                    if(xhr.status != 200){
                        return status
                    }
                    return result
                },
            complete: (xhr, status)=>{
                return status
            },
            error: (xhr, status, error)=>{
                    return error
            }
             })
    
            response.then(result => result)
    
            return response
    }
    return(
        <>
            <div id="" className={Style.mainBody}>
                <h2>Cadastro de instrumentos</h2>
                <div className="container-lg">
                    
                    <Box component="form"
                    sx={{}}
                    noValidate
                    autoComplete="off"
                    >
                        <FormControl fullWidth>
                            <div className={Style.section}>
                                <div className="row mb-3 col-lg-12">
                                    <label className="col-sm-2 col-lg-3 col-form-label">Nome do Instrumento</label>
                                    <div className="col-sm-10 col-lg-9">
                                        <input type="text" className="form-control pill" id="NomeInstrumento" />
                                    </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                    <label  className="col-sm-2 col-lg-3 col-form-label mr-0">Cliente</label>
                                    <div className="col-sm-10 col-lg-9 d-flex flex-row">
                                    <select className="form-select select2 col-sm-6 col-lg-10 ml-0 mr-1" aria-label="Default select example" placeholder="escolha o cliente" id="empresa_id" >
                                        <option>Escolha uma empresa</option>
                                    </select>
                                    <InserirClientes />
                                    </div>
                                    
                                </div>
                                <div className="row mb-3 col-lg-12">
                                <label  className="col-sm-2 col-lg-3 col-form-label mr-0">Setor</label>
                                <div className="col-sm-10 col-lg-9 d-flex flex-row">
                                    <select className="form-select select2 col-sm-6 col-lg-12 ml-0" aria-label="Default select example" placeholder="escolha o cliente" id="setor_id">
                                    <option value="0"> Escolha um setor</option>
                                    </select>
                                    <button type="button" className="btn btn-outline-success ml-2 col-sm-2 col-lg-3 d-flex flex-row" data-bs-toggle="modal" data-bs-target="#modaSetor" id="chamarModalSetor">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    Novo 
                                    </button>
                                </div>
                                
                            </div>
                                <div className="row mb-3 col-lg-12">
                                    <label  className="col-sm-2 col-lg-3 col-form-label">Código/Tag</label>
                                    <div className="col-sm-10 col-lg-9">
                                    <input type="text" className="form-control col-lg-12" id="codTag"/>
                                    </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                    <label  className="col-sm-2 col-lg-3 col-form-label">Nº de série</label>
                                    <div className="col-sm-10 col-lg-9">
                                    <input type="text" className="form-control" id="numserie"  />
                                    </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                    <label  className="col-sm-2  col-lg-3 col-form-label">TAG</label>
                                    <div className="col-sm-10 col-lg-9">
                                    <input type="text" className="form-control" id="tag" />
                                    </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                    <label  className="col-sm-2 col-lg-3 col-form-label">Tipo</label>
                                    <div className="col-sm-10 col-lg-9 d-flex flex-row">
                                    <select className="form-select select2 col-sm-6 col-lg-12 ml-0" aria-label="Default select example" placeholder="escolha o cliente" id="tipoInstrumento" >
                                        <option value="0"> Escolha o tipo</option>
                                    </select>
                                    <button type="button" className="btn btn-outline-success ml-2 col-sm-2 col-lg-3 d-flex flex-row" data-bs-toggle="modal" data-bs-target="#modal_tipo_instrumento" id="chamarModalTipoInstrumento">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                        Novo 
                                    </button>
                                    </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                    <label  className="col-sm-2  col-lg-3 col-form-label">Modelo</label>
                                    <div className="ol-sm-10 col-lg-9 d-flex flex-row">
                                    <select className="form-select select2 col-sm-6 col-lg-12 ml-0" aria-label="Default select example" placeholder="escolha o cliente" id="modeloInstrumento" >
                                        <option value="0"> Escolha o Modelo do instrumento</option>
                                    </select>
                                    <button type="button" className="btn btn-outline-success ml-2 col-sm-2 col-lg-3 d-flex flex-row" data-bs-toggle="modal" data-bs-target="#modaSetor" id="chamarModalSetor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                        Novo 
                                    </button>
                                    </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                <label  className="col-sm-2  col-lg-3 col-form-label">Fabricante</label>
                                <div className="ol-sm-10 col-lg-9 d-flex flex-row">
                                    <select className="form-select select2 col-sm-6 col-lg-12 ml-0" aria-label="Default select example" placeholder="escolha o cliente" id="fabricante" >
                                    <option value="0"> Escolha o Fabricante do instrumento</option>
                                    </select>
                                    <button type="button" className="btn btn-outline-success ml-2 col-sm-2 col-lg-3 d-flex flex-row" data-bs-toggle="modal" data-bs-target="#modaSetor" id="chamarModalSetor">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    Novo 
                                    </button>
                                </div>
                            </div>
                                <div className="row mb-3 col-lg-12">
                                <label  className="col-sm-2 col-lg-3 col-form-label">Faixas do Instrumento</label>
                                <div className="col-sm-10 col-lg-9">
                                    <input type="text" className="form-control" id="faixasInstrumento" />
                                </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                <label  className="col-sm-10 col-lg-3 col-form-label">Instrumento Ativo</label>
                                <div className="col-sm-10 col-lg-9">
                                    <label  className="col-sm-2 col-form-label"> Ativo </label>
                                    <input className="form-check-input mt-2" value="1" type="checkbox" id="ativo" />
                                </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                <label  className="col-sm-2 col-lg-3 col-form-label">Prox. Calibração</label>
                                <div className="col-sm-10 col-lg-9">
                                    <input type="date" className="form-control" id="proxCalibracao" />
                                </div>
                                </div>
                                <div className="row mb-3 col-lg-12">
                                <label  className="col-sm-2 col-lg-3 col-lg-2 col-form-label">Calibrar a cada</label>
                                <div className="col-sm-5 col-lg-9">
                                    <input type="text" className="form-control" id="calibrarACada" />
                                </div>
                                </div>
                                <button type="submit" className="btn btn-primary" id="salvarInstrumento"> Gravar </button>
                                <button  className="btn btn-danger"> Voltar </button>
                            </div>
                        </FormControl>
                    </Box>
                    
                </div>
            </div>
        </>
    )
}

export default InserirInstrumento;