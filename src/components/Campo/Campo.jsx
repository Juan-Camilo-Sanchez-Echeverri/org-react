import './Campo.css';

const Campo = (props) => {
	const placeholderModificado = `${props.placeholder}...`;

	const manejarCambio = (e) => {
		props.actualizarValor(e.target.value);
	};

	return (
		<div className={`campo campo-${props.type}`}>
			<label htmlFor="">{props.label}</label>
			<input
				type={props.type}
				placeholder={placeholderModificado}
				required={props.required}
				value={props.valor}
				onChange={manejarCambio}
			/>
		</div>
	);
};

export default Campo;
