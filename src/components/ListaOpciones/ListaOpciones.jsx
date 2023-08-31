import './ListaOpciones.css';

const ListaOpciones = ({ valor, actualizarEquipo, equipos }) => {
	const manejarCambio = (e) => {
		actualizarEquipo(e.target.value);
	};
	return (
		<div className="lista-opciones">
			<label htmlFor="">Equipo</label>
			<select name="" id="" value={valor} onChange={manejarCambio}>
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
