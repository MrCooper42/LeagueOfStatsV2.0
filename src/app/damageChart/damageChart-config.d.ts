export interface DamageChartConfig { 
  settings: { fill: string, interpolation: string };
  dataset: Array<{ x: string, y: number }>
}
