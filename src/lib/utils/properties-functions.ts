import { SimulateGameDto } from '../DTOs/SimulateGameDTO';
import { Property } from '../entities/property';

export default class PropertiesFunctions {
  static createProperties(props: SimulateGameDto): Property[] {
    const properties: Property[] = [];
    for (let i = 0; i < 20; i++) {
      const saleValue = generateSaleValueByInterval(
        props.min_value || 100,
        props.max_value || 350,
      );
      const property: Property = {
        saleValue: saleValue,
        rentValue: Math.floor(saleValue * (props.rent_percent / 100 || 0.03)),
        owner: null,
      };
      properties.push(property);
    }
    return properties;
  }
}

function generateSaleValueByInterval(start: number, end: number): number {
  return Math.floor(start + Math.random() * (end - start));
}
