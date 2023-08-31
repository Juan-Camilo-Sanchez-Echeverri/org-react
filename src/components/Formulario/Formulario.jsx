import { useState } from 'react';
import Boton from '../Boton/Boton';
import Campo from '../Campo/Campo';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import './Formulario.css';

const Formulario = ({ equipos, registrarColaborador, crearEquipo }) => {
	const [nombre, setNombre] = useState('');
	const [puesto, setPuesto] = useState('');
	const [foto, setFoto] = useState('');
	const [equipo, setEquipo] = useState('');

	const [titulo, actualizarTitulo] = useState('');
	const [color, actualizarColor] = useState('');

	const manejarEnvio = (e) => {
		e.preventDefault();
		let datosAEnviar = {
			nombre,
			puesto,
			foto,
			equipo,
		};
		registrarColaborador(datosAEnviar);
	};

	const manejarNuevoEquipo = (event) => {
		event.preventDefault();
		crearEquipo({ titulo, colorPrimario: color });
	};

	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el Formulario para crear el colaborador.</h2>
				<Campo
					label={'Nombre'}
					placeholder={'Ingresar nombre'}
					required
					valor={nombre}
					actualizarValor={setNombre}
				/>
				<Campo
					label={'Puesto'}
					placeholder={'Ingresar puesto'}
					required
					valor={puesto}
					actualizarValor={setPuesto}
				/>
				<Campo
					label={'Foto'}
					placeholder={'Ingresar enlace de foto'}
					required
					valor={foto}
					actualizarValor={setFoto}
				/>
				<ListaOpciones
					valor={equipo}
					actualizarEquipo={setEquipo}
					equipos={equipos}
				/>
				<Boton texto={'Crear'} />
			</form>

			<form onSubmit={manejarNuevoEquipo}>
				<h2>Rellena el Formulario para crear el colaborador.</h2>
				<Campo
					label={'Titulo'}
					placeholder={'Ingresar titulo'}
					required
					valor={titulo}
					actualizarValor={actualizarTitulo}
				/>
				<Campo
					type={'color'}
					label={'Color'}
					placeholder={'Ingresar el color en Hex'}
					required
					valor={color}
					actualizarValor={actualizarColor}
				/>
				<Boton texto={'Registrar Equipo'} />
			</form>
		</section>
	);
};

export default Formulario;
