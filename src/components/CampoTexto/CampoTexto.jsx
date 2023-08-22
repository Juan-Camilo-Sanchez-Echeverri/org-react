import './CampoTexto.css';

const CampoTexto = ({ label, placeholder }) => {
	const placeholderModificado = `${placeholder}...`;

	return (
		<div className="campo-texto">
			<label htmlFor="">{label}</label>
			<input type="text" placeholder={placeholderModificado} />
		</div>
	);
};

export default CampoTexto;
