import {
    initializeBlock,
    useBase,
    useRecords,
    useGlobalConfig,
    TablePickerSynced,
    ViewPickerSynced,
    FieldPickerSynced,
    Box,
    FormField,
    InputSynced
} from '@airtable/blocks/ui';
import React from 'react';

// This block uses chart.js and the react-chartjs-2 packages.
// Install them by running this in the terminal:
// npm install chart.js react-chartjs-2
import {Line} from 'react-chartjs-2';

const GlobalConfigKeys = {
    VIEW_ID: 'viewId',
};

function SimpleChartBlock() {
    const base = useBase();
    const globalConfig = useGlobalConfig();
	
    const tableId = 'tblJwvEBcSPjlgq0V';
    const table = base.getTableByIdIfExists(tableId);

    const viewId = globalConfig.get(GlobalConfigKeys.VIEW_ID);
    const view = table ? table.getViewByIdIfExists(viewId) : null;

    const xFieldId = 'fldQnhuC70nerHTey';
    const xField = table ? table.getFieldByIdIfExists(xFieldId) : null;
	
    const records = useRecords(view ? view.selectRecords() : null);
	
    console.log(records);
	
    const salesId = 'fldiXIfrHX0xYlBVn';
    const salesField = 'Ordered Product Sales';
    const salesColor = 'green';
    const salesData = records && xField && salesField ? getChartData(records, xField, salesField, salesColor) : null;
	
    const unitsOrderedId = 'fld3jPva07I45msC8';
    const unitsOrderedField = 'Units Ordered'
    const unitsOrderedColor = 'blue';
    const unitsOrderedData = records && xField && unitsOrderedField ? getChartData(records, xField, unitsOrderedField, unitsOrderedColor) : null;	
	
    const sessionsId = 'fldB0BZcN12dOehe6';
    const sessionsField = 'Sessions';
    const sessionsColor = 'orange';
    const sessionsData = records && xField && sessionsField ? getChartData(records, xField, sessionsField, sessionsColor) : null;		
	
    const acosId = 'fldkPkVhIvX6HyxK2';
    const acosField = 'ACOS (All Units)';
    const acosColor = 'salmon';
    const acosData = records && xField && acosField ? getChartData(records, xField, acosField, acosColor) : null;		
	
    const amazonPPCSpendId = 'fld1XKjlHCOYLcAyL';
    const amazonPPCField = 'Amazon PPC Spend';
    const amazonPPCSpendColor = '#F0B27A';
    const amazonPPCSpendData = records && xField && amazonPPCField ? getChartData(records, xField, amazonPPCField, amazonPPCSpendColor) : null;		
	
    const conversionRateId = 'fldw3WBJJZf9OJnOh';
    const conversionRateField = 'Conversion Rate';
    const conversionRateColor = '#65B4AF';
    const conversionRateData = records && xField && conversionRateField ? getChartData(records, xField, conversionRateField, conversionRateColor) : null;	
	
    const costOfAcquiringSalesId = 'fldVnF8SHN4ner9uT';
    const costOfAcquiringSalesField = 'Cost of Acquiring Sale';
    const costOfAcquiringSalesColor = '#D8DD6C';
    const costOfAcquiringSalesData = records && xField && costOfAcquiringSalesField ? getChartData(records, xField, costOfAcquiringSalesField, costOfAcquiringSalesColor) : null;		
	
    const profitLossPerUnitSoldId = 'fldLg4MqBlUywMMIW';
    const profitLossPerUnitSoldField = 'Profit / Loss Per Unit Sold';
    const profitLossPerUnitSoldColor = '#58D68D';
    const profitLossPerUnitSoldData = records && xField && profitLossPerUnitSoldField ? getChartData(records, xField, profitLossPerUnitSoldField, profitLossPerUnitSoldColor) : null;		
	
    const totalProfitLossId = 'fldXdv7F1fOkeEljW';
    const totalProfitLossField = 'Total Profit / Loss';
    const totalProfitLossColor = '#3498DB';
    const totalProfitLossData = records && xField && totalProfitLossField ? getChartData(records, xField, totalProfitLossField, totalProfitLossColor) : null;		
	
    const profitMarginId = 'fldnJuGtyCmaqvGka';
    const profitMarginField = 'Profit Margin';
    const profitMarginColor = '#D8A9FF';
    const profitMarginData = records && xField && profitMarginField ? getChartData(records, xField, profitMarginField, profitMarginColor) : null;	
	
    return (
			<section>
				<div>		
				<Settings table={table} />
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Ordered Product Sales</h3>

						{salesData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={salesData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Units Ordered</h3>

						{unitsOrderedData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={unitsOrderedData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Sessions</h3>

						{sessionsData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={sessionsData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>ACOS (All Units)</h3>

						{acosData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={acosData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Amazon PPC Spend</h3>

						{amazonPPCSpendData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={amazonPPCSpendData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Conversion Rate</h3>

						{conversionRateData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={conversionRateData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

							<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Cost of Acquiring Sale</h3>

						{costOfAcquiringSalesData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={costOfAcquiringSalesData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Profit / Loss Per Unit Sold</h3>

						{profitLossPerUnitSoldData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={profitLossPerUnitSoldData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Total Profit / Loss</h3>

						{totalProfitLossData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={totalProfitLossData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>

				<div>
					<Box
						position="relative"
						top={"50"}
						left={0}
						right={0}
						bottom={0}
						display="flex"
						flexDirection="column"
					>
						<h3>Profit Margin</h3>

						{profitMarginData && (
							<Box position="relative" flex="auto" padding={3}>
								<Line
									data={profitMarginData}
									options={{
										maintainAspectRatio: false,
										scales: {
											yAxes: [
												{
													ticks: {
														beginAtZero: true,
													},
												},
											],
										},
										legend: {
											display: false,
										},
									}}
								/>
							</Box>
						)}
					</Box>
				</div>
			</section>
    );
}

function getChartData(records, xField, yField, color) {
    const dataPoints = [];
	
    for (const record of records) {
        const xValue = record.getCellValue(xField);
        const xValueString = xValue === null ? null : record.getCellValueAsString(xField);
		
		console.log(yField);
		
        const yValue = record.getCellValue(yField);
        const yValueString = yValue === null ? null : record.getCellValueAsString(yField);		
		
		dataPoints.push([xValueString, yValueString])
    }
	
    const labels = [];
    const points = [];
	
    for (const [xValueString, yValueString] of dataPoints) {
        const label = xValueString === null ? 'Empty' : xValueString;
		
		const val = yValueString === null ? 0.0 : Number(
			yValueString.replace(',','').replace('$','').replace('%', '')
		);
		
        labels.push(label);				
        points.push(val);
    }

    const data = {
        labels,
        datasets: [
            {
                backgroundColor: color ? color : "#4380f1",
                data: points,
            },
        ],
    };
    return data;
}

function Settings({table}) {
    return (
        <Box display="flex" padding={3} borderBottom="thick">	
            {table && (
                <FormField label="View" width="25%" paddingX={1} marginBottom={0}>
                    <ViewPickerSynced table={table} globalConfigKey={GlobalConfigKeys.VIEW_ID} />
                </FormField>
            )}	
        </Box>
    );
}

function reload(){
	initializeBlock(() => <SimpleChartBlock />);
}

reload()
