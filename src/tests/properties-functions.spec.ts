import PropertiesFunctions from '../lib/utils/properties-functions';

describe('Properties Tests', () => {
  it('should be defined', () => {
    expect(PropertiesFunctions).toBeDefined();
  });

  it('shoud be return properties', async () => {
    const properties = PropertiesFunctions.createProperties({});
    expect(properties).not.toBeNull();
  })
});
