import './Equipo.css';
import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador/Colaborador';

const Equipo = ({
	id,
	titulo,
	colorPrimario,
	colaboradores,
	eliminarColaborador,
	actualizarColor,
	like,
}) => {
	return (
		<>
			{colaboradores.length > 0 && (
				<section
					className="equipo"
					style={{ backgroundColor: hexToRgba(colorPrimario, 0.6) }}
				>
					<input
						type="color"
						className="input-color"
						value={colorPrimario}
						onChange={(event) => actualizarColor(event.target.value, id)}
					/>
					<h3 style={{ borderColor: colorPrimario }}>{titulo}</h3>
					<article className="colaboradores">
						{colaboradores.map((colaborador, index) => (
							<Colaborador
								key={index}
								datos={colaborador}
								colorPrimario={colorPrimario}
								eliminarColaborador={eliminarColaborador}
								like={like}
							/>
						))}
					</article>
				</section>
			)}
		</>
	);
};

export default Equipo;
