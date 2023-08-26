import './ListaOpciones.css';

const ListaOpciones = (props) => {
	const equipos = [
		'Programación',
		'Front End',
		'Data Science',
		'Devops',
		'UX y Diseño',
		'Móvil',
		'Innovación y Gestión',
	];

	const manejarCambio = (e) => {
		props.actualizarEquipo(e.target.value);
	};
	return (
		<div className="lista-opciones">
			<label htmlFor="">Equipo</label>
			<select name="" id="" value={props.valor} onChange={manejarCambio}>
				<option value="" disabled defaultValue="" hidden>
					Seleccionar Equipo
				</option>
				{equipos.map((equipo, key) => (
					<option value={equipo} key={key}>
						{equipo}{' '}
					</option>
				))}
			</select>
		</div>
	);
};

export default ListaOpciones;
