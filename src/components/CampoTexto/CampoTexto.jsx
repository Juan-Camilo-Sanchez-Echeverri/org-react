import './CampoTexto.css';

const CampoTexto = (props) => {
	const placeholderModificado = `${props.placeholder}...`;

	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	};

	return (
		<div className="campo-texto">
			<label htmlFor="">{props.label}</label>
			<input
				type="text"
				placeholder={placeholderModificado}
				required={props.required}
				value={props.valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default CampoTexto;
