import React from 'react';
import './App.css';
import {sampleData} from './data';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Category,
  Inject, Legend, Selection} from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <div style={{textAlign:"center", margin:'5% 25%'}}>
      <ChartComponent title="Olympic Medal Counts - RIO"
      primaryXAxis={{valueType:"Category", title: 'Countries'}}
      primaryYAxis={{title: 'Medals'}}
      legendSettings={{position:"Top", alignment:"Far", shapeHeight:12,
      shapeWidth:12, toggleVisibility:true}} // To perform series selection on legend click, set toggleVisibility to true
      selectionMode="Series" enableAnimation={false}>
        <Inject services={[ColumnSeries, Category, Legend, Selection]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="Column" dataSource={sampleData} name="Gold"
          xName="country" yName="gold" legendShape="Diamond"></SeriesDirective>
          <SeriesDirective type="Column" dataSource={sampleData} name="Silver"
          xName="country" yName="silver" legendShape="Pentagon"></SeriesDirective>
          <SeriesDirective type="Column" dataSource={sampleData} name="Bronze" //To skip this legend change property name=""
          xName="country" yName="bronze"></SeriesDirective>
          <SeriesDirective></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
export default App;

