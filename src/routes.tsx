import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InserirInstrumento from './pages/inserirInstrumentos/inserirInstrumentos';
import InserirPadroes from './pages/InserirPadroes/InserirPadroes';
import MainPage from './pages/main/main';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="inserir-instrumento" element={<InserirInstrumento/>} />
                    <Route path="inserir-padroes" element={<InserirPadroes />} />
            </Routes>
        </BrowserRouter>
    )
}