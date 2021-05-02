import { FoodType } from '../store/foodSelection/models/food-type';
import { FoodsDay } from '../store/foodSelection/models/foods-day';

export const foodsDaysMock: FoodsDay[] = [
  {
    date: new Date('2021-04-30'),
    isDayOff: false,
    foods: [
      {
        id: 1,
        type: FoodType.First,
        name: 'Мясная окрошка на квасе со сметаной',
        price: 108,
        imgUrl:
          'https://tomskeda.ru/pict/eda/suhoj-nabor-dla-okroski-masnoj-so-smetanoj-11182.jpg',
        quantity: 0
      },
      {
        id: 2,
        type: FoodType.First,
        name: 'Мясная окрошка на квасе со сметаной',
        price: 108,
        imgUrl:
          'https://tomskeda.ru/pict/eda/suhoj-nabor-dla-okroski-masnoj-so-smetanoj-11182.jpg',
        quantity: 0
      },
      {
        id: 3,
        type: FoodType.First,
        name: 'Борщ Украинский с мясом и со сметаной',
        price: 80,
        imgUrl:
          'https://tomskeda.ru/pict/eda/bors-ukrainskij-s-masom-i-so-smetanoj.jpg',
        quantity: 0
      },
      {
        id: 4,
        type: FoodType.First,
        name: 'Борщ Украинский со сметаной',
        price: 65,
        imgUrl:
          'https://tomskeda.ru/pict/eda/bors-ukrainskij-s-masom-i-so-smetanoj.jpg',
        quantity: 0
      },
      {
        id: 5,
        type: FoodType.First,
        name: 'Суп картофельный с фасолью',
        price: 65,
        imgUrl: 'https://tomskeda.ru/pict/eda/sup-kartofelnyj-s-fasolu.jpg',
        quantity: 0
      },
      {
        id: 6,
        type: FoodType.First,
        name: 'Суп с куриными фрикадельками Петровский',
        price: 76,
        imgUrl:
          'https://tomskeda.ru/pict/eda/sup-s-kurinymi-frikadelkami-petrovskij.jpg',
        quantity: 0
      }
    ]
  },
  {
    date: new Date('2021-05-01'),
    isDayOff: true,
    foods: []
  },
  {
    date: new Date('2021-05-02'),
    isDayOff: true,
    foods: []
  },
  {
    date: new Date('2021-05-03'),
    isDayOff: true,
    foods: []
  },
  {
    date: new Date('2021-05-04'),
    isDayOff: true,
    foods: []
  },
  {
    date: new Date('2021-05-05'),
    isDayOff: true,
    foods: []
  },
  {
    date: new Date('2021-05-06'),
    isDayOff: true,
    foods: []
  }
];