import { SimulateGameDto } from '../DTOs/SimulateGameDTO';
import { Property } from '../entities/property';

export default class PropertiesFunctions {
  static createProperties(props: SimulateGameDto): Property[] {
    const properties: Property[] = [];
    for (let i = 0; i < (props.number_of_properties || 20); i++) {
      const saleValue = generateSaleValueByInterval(
        props.min_value || 1000,
        props.max_value || 35000,
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
