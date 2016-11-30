
import { EventEmitter, OnChanges, OnDestroy, AfterViewInit, ElementRef, NgZone, ChangeDetectorRef } from '@angular/core';
import { ViewDimensions } from '../common/view-dimensions.helper';
import { BaseChartComponent } from '../common/base-chart.component';
export declare class LineChartComponent extends BaseChartComponent implements OnChanges, OnDestroy, AfterViewInit {
    private element;
    private cd;
    view: any;
    results: any;
    scheme: any;
    legend: any;
    customColors: any;
    xAxis: any;
    yAxis: any;
    showXAxisLabel: any;
    showYAxisLabel: any;
    xAxisLabel: any;
    yAxisLabel: any;
    autoScale: any;
    timeline: any;
    gradient: boolean;
    showGridLines: boolean;
    curve: any;
    clickHandler: EventEmitter<{}>;
    legendLabelClick: EventEmitter<any>;
    dims: ViewDimensions;
    xSet: any;
    xDomain: any;
    yDomain: any;
    seriesDomain: any;
    yScale: any;
    xScale: any;
    colors: Function;
    scaleType: string;
    transform: string;
    clipPath: string;
    clipPathId: string;
    series: any;
    areaPath: any;
    margin: number[];
    hoveredVertical: any;
    xAxisHeight: number;
    yAxisWidth: number;
    filteredDomain: any;
    timelineWidth: any;
    timelineHeight: number;
    timelineXScale: any;
    timelineYScale: any;
    timelineXDomain: any;
    timelineTransform: any;
    timelinePadding: number;
    constructor(element: ElementRef, cd: ChangeDetectorRef, zone: NgZone);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(): void;
    update(): void;
    updateTimeline(): void;
    getXDomain(): any[];
    getYDomain(): any[];
    getSeriesDomain(): any[];
    getXScale(domain: any, width: any): any;
    getYScale(domain: any, height: any): any;
    getScaleType(values: any): string;
    isDate(value: any): boolean;
    updateDomain(domain: any): void;
    updateHoveredVertical(item: any): void;
    hideCircles(): void;
    onClick(data: any, series: any): void;
    trackBy(index: any, item: any): string;
    setColors(): void;
    updateYAxisWidth({width}: {
        width: any;
    }): void;
    updateXAxisHeight({height}: {
        height: any;
    }): void;
}
