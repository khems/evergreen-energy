import { HeatPump } from '../types/HeatPump'

const HEAT_PUMPS: HeatPump[] = [
  {
    label: '8kW Package',
    outputCapacity: 8,
    costs: [
      { label: 'Design & Supply of your Air Source Heat Pump System Components (8kW)', cost: 4216 },
      { label: 'Installation of your Air Source Heat Pump and Hot Water Cylinder', cost: 2900 },
      { label: 'Supply & Installation of your Homely Smart Thermostat', cost: 150 },
      { label: 'Supply & Installation of a new Consumer Unit', cost: 300 },
      { label: 'MCS System Commissioning & HIES Insurance-backed Warranty', cost: 1648 }
    ]
  },
  {
    label: '5kW Package',
    outputCapacity: 5,
    costs: [
      { label: 'Design & Supply of your Air Source Heat Pump System Components (5kW)', cost: 3947 },
      { label: 'Installation of your Air Source Heat Pump and Hot Water Cylinder', cost: 2900 },
      { label: 'Supply & Installation of your Homely Smart Thermostat', cost: 150 },
      { label: 'Supply & Installation of a new Consumer Unit', cost: 300 },
      { label: 'MCS System Commissioning & HIES Insurance-backed Warranty', cost: 1648 }
    ]
  },
  {
    label: '16kW Package',
    outputCapacity: 16,
    costs: [
      { label: 'Design & Supply of your Air Source Heat Pump System Components (16kW)', cost: 5421 },
      { label: 'Installation of your Air Source Heat Pump and Hot Water Cylinder', cost: 2900 },
      { label: 'Supply & Installation of your Homely Smart Thermostat', cost: 150 },
      { label: 'Supply & Installation of a new Consumer Unit', cost: 300 },
      { label: 'MCS System Commissioning & HIES Insurance-backed Warranty', cost: 1648 }
    ]
  },
  {
    label: '12kW Package',
    outputCapacity: 12,
    costs: [
      { label: 'Design & Supply of your Air Source Heat Pump System Components (12kW)', cost: 5138 },
      { label: 'Installation of your Air Source Heat Pump and Hot Water Cylinder', cost: 2900 },
      { label: 'Supply & Installation of your Homely Smart Thermostat', cost: 150 },
      { label: 'Supply & Installation of a new Consumer Unit', cost: 300 },
      { label: 'MCS System Commissioning & HIES Insurance-backed Warranty', cost: 1648 }
    ]
  }
]

export { HEAT_PUMPS }
