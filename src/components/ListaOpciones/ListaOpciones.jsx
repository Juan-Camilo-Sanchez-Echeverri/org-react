import './ListaOpciones.css';

const ListaOpciones = () => {
	const equipos = [
		'Programación',
		'Front End',
		'Data Science',
		'Devops',
		'UX y Diseño',
		'Móvil',
		'Innovación y Gestión',
	];
	return (
		<div className="lista-opciones">
			<label htmlFor="">Equipo</label>
			<select name="" id="">
				{equipos.map((equipo, key) => <option value={equipo} key={key}>{equipo} </option>)}
			</select>
		</div>
	);
};

export default ListaOpciones;
