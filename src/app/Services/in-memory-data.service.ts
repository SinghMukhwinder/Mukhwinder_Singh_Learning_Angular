import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Smartphone } from '../Shared/Models/Smartphones';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): {smartphones: Smartphone[]}{

    const smartphones: Smartphone [] = [
      {id: 1, serialNumber: "1234A", brand: "Apple", model: "IPhone13", storage:  256, isAvailable: true, image: "assets/Apple_iphone13.jpg" },
      {id: 2, serialNumber: "1234B", brand: "Samsung", model: "S23", storage:  512, isAvailable: true, image: "assets/Samsung_S23.png"},
      {id: 3, serialNumber: "1234C", brand: "One Plus", model: "5T", storage:  128, isAvailable: true, image: "assets/OnePlus_5T.png"},
      {id: 4, serialNumber: "1234D", brand: "Vivo", model: "V15", storage:  256, isAvailable: false, image: "assets/Vivo_V15.png"},
      {id: 5, serialNumber: "1234E", brand: "RealMe", model: "GT neo 3T", storage:  64, isAvailable: false, image: "assets/Realme-GT-Neo-3T-Shade-Black.png"},
      {id: 6, serialNumber: "1234F", brand: "RealMe", model: "GT neo 3T Golden", storage:  64, isAvailable: false, image: "assets/RealMe GT neo 3T Golden.jpeg"}
    ];

    return { smartphones };
  }
}
