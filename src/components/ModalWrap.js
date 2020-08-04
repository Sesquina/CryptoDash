import React from 'react';
import Modal from 'react-modal';
import { ResponsiveContainer, LineChart, Label, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import moment from 'moment';

const ModalWrap = (props) => {
	const { modal, selected } = props;

	let chartData = JSON.parse(JSON.stringify(selected.currencyHistory));
	chartData.forEach((item) => {
	  item['time'] = moment.unix(item['time']).format("DD/MM/YY");
	});

	return (
		<Modal
			isOpen={modal.modalStatus}
			onRequestClose={props.closeModal}
		>
			<span className="close" onClick={props.closeModal}>X</span>
			<h2>{modal.selectedCurrencyName}</h2>
			<h3>Current Price: ${selected.currencyPrice}</h3>

			<div className="modal-container">
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={chartData}
		            margin={{top: 40}}>
						<XAxis dataKey="time">
						    <Label value="Date" offset={0} position="insideBottom" />
						</XAxis>
						<YAxis domain={['dataMin', 'dataMax']} label={{ value: 'Price($)', angle: -90, position: 'insideLeft' }}/>
						<CartesianGrid strokeDasharray="3 3"/>
						<Tooltip/>
						<Legend verticalAlign="top" height={36}/>
						<Line type="monotone" dataKey="low" stroke="#8884d8"/>
						<Line type="monotone" dataKey="high" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</Modal>
	)
};

export default ModalWrap;