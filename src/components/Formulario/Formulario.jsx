import { useState } from 'react';
import Boton from '../Boton/Boton';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import './Formulario.css';

const Formulario = () => {
	const [nombre, setNombre] = useState('');
	const [puesto, setPuesto] = useState('');
	const [foto, setFoto] = useState('');
	const [equipo, setEquipo] = useState('');

	const manejarEnvio = (e) => {
		e.preventDefault();
		let datosAEnviar = {
			nombre,
			puesto,
			foto,
			equipo,
		};
		console.log(datosAEnviar);
	};

	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el Formulario para crear el colaborador.</h2>
				<CampoTexto
					label={'Nombre'}
					placeholder={'Ingresar nombre'}
					required
					valor={nombre}
					actualizarValor={setNombre}
				/>
				<CampoTexto
					label={'Puesto'}
					placeholder={'Ingresar puesto'}
					required
					valor={puesto}
					actualizarValor={setPuesto}
				/>
				<CampoTexto
					label={'Foto'}
					placeholder={'Ingresar enlace de foto'}
					required
					valor={foto}
					actualizarValor={setFoto}
				/>
				<ListaOpciones valor={equipo} actualizarEquipo={setEquipo} />
				<Boton texto={'Crear'} />
			</form>
		</section>
	);
};

export default Formulario;
