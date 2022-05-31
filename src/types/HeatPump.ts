interface HeatPump {
  label: string;
  outputCapacity: number;
  costs: Cost[];
}

interface Cost {
  label: string;
  cost: number;
}

export { HeatPump };
