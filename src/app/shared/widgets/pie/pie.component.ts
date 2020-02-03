declare var require: any;

import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


const heatmap = require("highcharts/modules/heatmap.js");
heatmap(Highcharts)
const treemap = require("highcharts/modules/treemap.js");
treemap(Highcharts)

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];

  constructor() { }

  ngOnInit() {
    // this.chartOptions = {
    //   chart: {
    //     plotBackgroundColor: null,
    //     plotBorderWidth: null,
    //     plotShadow: false,
    //     type: 'pie'
    //   },
    //   title: {
    //     text: 'RANDOM DATA'
    //   },
    //   tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    //   },
    //   plotOptions: {
    //     pie: {
    //       allowPointSelect: true,
    //       cursor: 'pointer',
    //       dataLabels: {
    //         enabled: true,
    //         format: '<b>{point.name}</b>: {point.percentage:.1f} %'
    //       }
    //     }
    //   },
    //   exporting: {
    //     enabled: true
    //   },
    //   credits: {
    //     enabled: false
    //   },
    //   series: [{
    //     name: 'Brands',
    //     colorByPoint: true,
    //     data: this.data
    //   }]
    // };

    this.chartOptions = {
      colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
      },
      title:{
        text:'Crytocurrency Heatmap'
      },
       chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'treemap'
      },
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
          name: 'BTC',
          value: 8,
          colorValue: 1
        }, {
          name: 'ETH',
          value: 4,
          colorValue: 2.1
        }, {
          name: 'BCH',
          value: 4,
          colorValue: 3
        }, {
          name: 'XRP',
          value: 2,
          colorValue: 2.3
        }, {
          name: 'BSV',
          value: 2,
          colorValue: 6
        },{
          name: 'EOS',
          value: 2,
          colorValue: 5
        },{
          name: 'LTC',
          value: 2,
          colorValue: 4
        }]
      }]
    };


    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
