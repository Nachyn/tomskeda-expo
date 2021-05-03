import {FoodType} from '../store/foodSelection/models/food-type';
import {FoodsDay} from '../store/foodSelection/models/foods-day';

export const foodsDaysMock: FoodsDay[] = [
  {
    date: new Date('2021-04-30'),
    isDayOff: false,
    complexFood: {
      id: 1000,
      price: 210,
      firstFoods: [
        {
          id: 101,
          name: 'Солянка мясная домашняя со сметаной',
          imgUrl:
            'https://tomskeda.ru/pict/eda/solanka-masnaa-domasnaa-so-smetanoj.jpg'
        },
        {
          id: 102,
          name: 'Суп гороховый с копченостями',
          imgUrl:
            'https://tomskeda.ru/pict/eda/sup-gorohovyj-s-kopcenostami.jpg'
        },
        {
          id: 103,
          name: 'Солянка мясная домашняя со сметаной',
          imgUrl:
            'https://tomskeda.ru/pict/eda/bors-s-krasnoj-fasolu-i-so-smetanoj.jpg'
        }
      ],
      secondFoods: [
        {
          id: 104,
          name: 'Котлета Домашняя',
          imgUrl: 'https://tomskeda.ru/pict/eda/kotleta-domasnaa.jpg'
        },
        {
          id: 105,
          name: 'Котлета куриная запеченая с овощами и сыром',
          imgUrl:
            'https://tomskeda.ru/pict/eda/kotleta-kurinaa-zapecennaa-s-ovosami-i-syrom.jpg'
        },
        {
          id: 106,
          name: 'Рыба минтай жареный',
          imgUrl: 'https://tomskeda.ru/pict/eda/ryba-mintai-zarenaa-.jpg'
        }
      ],
      sideDishes: [
        {
          id: 107,
          name: 'Гречка отварная',
          imgUrl: 'https://tomskeda.ru/pict/eda/grecka-otvarnaa-11397.jpg'
        },
        {
          id: 108,
          name: 'Картофель отварной с маслом',
          imgUrl: 'https://tomskeda.ru/pict/eda/kartofel-otvarnoj-s-maslom.jpg'
        },
        {
          id: 109,
          name: 'Макароны отварные',
          imgUrl: 'https://tomskeda.ru/pict/eda/makarony-otvarnye.jpg'
        }
      ],
      extraFood: [
        {
          id: 110,
          name: 'Салат Крабовый, рижский рецепт',
          imgUrl:
            'https://tomskeda.ru/pict/eda/salat-krabovyj-rizskij-recept.jpg'
        },
        {
          id: 111,
          name: 'Напиток из сухофруктов',
          imgUrl:
            'https://tomskeda.ru/pict/eda/napitok-iz-suhofruktov122-330ml.jpg'
        },
        {
          id: 112,
          name: 'Хлеб пшеничный (кусочек)',
          imgUrl: 'https://tomskeda.ru/pict/eda/hleb-psenicnyj.jpg'
        },
        {
          id: 113,
          name: 'Одноразовая посуда: вилка, ложка, нож, салфетка, зубочистка',
          imgUrl:
            'https://tomskeda.ru/pict/eda/odnorazovaa-posuda-vilka-lozka-noz-salfetka-zubocistka.jpg'
        }
      ]
    },
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
    isDayOff: true
  },
  {
    date: new Date('2021-05-02'),
    isDayOff: true
  },
  {
    date: new Date('2021-05-03'),
    isDayOff: true
  },
  {
    date: new Date('2021-05-04'),
    isDayOff: true
  },
  {
    date: new Date('2021-05-05'),
    isDayOff: true
  },
  {
    date: new Date('2021-05-06'),
    isDayOff: true
  }
];