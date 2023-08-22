import Boton from '../Boton/Boton';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaOpciones from '../ListaOpciones/ListaOpciones';
import './Formulario.css';

const Formulario = () => {
	const manejarEnvio = (e) => {
		e.preventDefault();
	};
	return (
		<section className="formulario">
			<form onSubmit={manejarEnvio}>
				<h2>Rellena el Formulario para crear el colaborador.</h2>
				<CampoTexto label={'Nombre'} placeholder={'Ingresar nombre'} />
				<CampoTexto label={'Puesto'} placeholder={'Ingresar puesto'} />
				<CampoTexto label={'Foto'} placeholder={'Ingresar enlace de foto'} />
				<ListaOpciones />
				<Boton texto={'Crear'} />
			</form>
		</section>
	);
};

export default Formulario;
