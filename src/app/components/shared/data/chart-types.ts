export interface DataPoint {
  name: Date,
  value: number
}

export interface LineChartSeries {
  name: string,
  series: DataPoint[]
}
