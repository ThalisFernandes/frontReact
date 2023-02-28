import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height:600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const buttonStyle = {
    backgroundColor : 'green',
    borderRadius    :  '5px',
    
  }


export default function  InserirClientes(){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button color="success" size="small" onClick={handleOpen}>Open modal</Button>
        <Modal
        sx={{
            overflowY:'always',
        }}
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div id="mainDivInserirCliente" className="col-lg-12 form-group d-flex flex-column">
                <div className="col-lg-12 form-group d-flex flex-row mb-2">
                    <TextField id="cnpj" label="CNPJ" variant="outlined" /> 
                    <Button color="success" variant="outlined"> Novo </Button>
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="nomeCliente" label="Nome do Cliente"/>
                    <TextField id="RazaoSocial" label="Razão Social"/>
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="inscMun" label="Insc. Municipal" />
                    <TextField id="InsEst" label="Insc. Estadual" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="Telefone" label="Telefone" />
                    <TextField id="Email" label="E-mail" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="webSite" label="Web Site"/>
                    <TextField id="Endereco" label="Endereço"/>
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="NumResidencial" label="Número" />
                    <TextField id="cep" label="CEP" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="estado" label="Estado" />
                    <TextField id="cidade" label="Cidade" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="bairro" label="Bairro" />
                    <TextField id="complemento" label="complemento" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="obs" label="Observações" />
                </div>
                <hr />
                <h3>Dados do Contato</h3>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="NomeContato" label="Nome do Contato" />
                    <TextField id="telContato" label="Telefone do Contato" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="Setor" label="Setor" />
                    <TextField id="Ramal" label="Ramal" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="Celular" label="Celular" />
                    <TextField id="Sexo" label="Sexo" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="respCert" label="Responsável por certificados?" />
                    <TextField id="resNotFisc" label="Responsável por Notas fiscais?" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="respOrc" label="Responsável por Orçamentos?" />
                    <TextField id="recEmailsChLote" label="Recebe E-mails de chegada de lote?" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="recbSaidLote" label="Recebe E-mails de saída de lote?" />
                    <TextField id="cargo" label="Cargo" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="acesSistem" label="Acesso ao Sistema?" />
                    <TextField id="alterSenha" label="Alterar Senha?" />
                </div>
                <div className="col-lg-12 form-group d-flex flex-row justify-content-between mb-2">
                    <TextField id="AcessTSetores" label="Acessa Todos os Setores?" />
                    <TextField id="dataNasc" label="Data de Nascimento" />
                </div>

                <Button variant="outlined" > Gravar </Button>
            </div>
          </Box>
        </Modal>
      </div>
    )
}



