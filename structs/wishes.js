import { backgroundImages } from '../constants'

export default [
  { 
    id: 0, 
    orderId: 0,
    categoryId: 0,
    image: backgroundImages[0],
    getText: (name, isFemale) => {
      return name + ', пусть cегодня весь день тебя будет преследовать удача и все дела будут выполняться с легкостью!';
    }
  },
  { 
    id: 1, 
    orderId: 1,
    categoryId: 0,
    image: backgroundImages[1],
    getText: (name, isFemale) => {
      return 'Побольше тебе заряда бодрости и отличного настроения на весь день!';
    }
  },
  { 
    id: 2, 
    orderId: 2,
    categoryId: 1,
    image: backgroundImages[2],
    getText: (name, isFemale) => {
      return name + ', пускай тебе сегодня улыбнется удача и сопутствует на протяжении дня хорошее настроение!';
    }
  },
  { 
    id: 3, 
    orderId: 3,
    categoryId: 1,
    image: backgroundImages[3],
    getText: (name, isFemale) => {
      return 'Побольше позитивных эмоций сегодня, новых впечатлений и неожиданных встреч!';
    }
  },
  { 
    id: 4, 
    orderId: 4,
    categoryId: 2,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + ', пусть весь день сегодня пройдет как по маслу, а также решились успешно все твои дела!';
    }
  },
  { 
    id: 5, 
    orderId: 5,
    categoryId: 2,
    image: backgroundImages[5],
    getText: (name, isFemale) => {
      return 'Начни свой день с позитивных мыслей о том, что ты полностью контролируешь каждый аспект своей жизни!';
    }
  },
  { 
    id: 6, 
    orderId: 6,
    categoryId: 3,
    image: backgroundImages[6],
    getText: (name, isFemale) => {
      return 'Верь в то, что с каждым днём тебе будет становится все лучше и лучше!';
    }
  },
  { 
    id: 7, 
    orderId: 7,
    categoryId: 3,
    image: backgroundImages[7],
    getText: (name, isFemale) => {
      return name + ', неважно во что ты сегодня одет' + (isFemale ? 'а' : '') + ' и сколько у тебя сегодня денег. Реализуй свои цели и преврати их в реальность!';
    }
  },
  { 
    id: 8, 
    orderId: 8,
    categoryId: 1,
    image: backgroundImages[8],
    getText: (name, isFemale) => {
      return name + ', пусть этот день подарит тебе много впечатлений и новых идей!';
    }
  },
  { 
    id: 9, 
    orderId: 9,
    categoryId: 1,
    image: backgroundImages[9],
    getText: (name, isFemale) => {
      return 'Пусть тебе сегодня сопутствует удача и все, что ты сделаешь, приблизит тебя к успеху!';
    }
  },
  { 
    id: 10, 
    orderId: 10,
    categoryId: 0,
    image: backgroundImages[0],
    getText: (name, isFemale) => {
      return name + ', сегодня тебя ждет прекрасный день и пусть он будет наполнен замечательными событиями!';
    }
  },
  { 
    id: 11, 
    orderId: 11,
    categoryId: 0,
    image: backgroundImages[1],
    getText: (name, isFemale) => {
      return 'Побольше тебе сегодня хорошего настроения и желания покорять новые вершины!';
    }
  },
  { 
    id: 12, 
    orderId: 12,
    categoryId: 2,
    image: backgroundImages[2],
    getText: (name, isFemale) => {
      return name + ', хорошо тебе сегодня и плодотворно провести весь день. Будь на позитиве!';
    }
  },
  { 
    id: 13, 
    orderId: 13,
    categoryId: 2,
    image: backgroundImages[3],
    getText: (name, isFemale) => {
      return 'Пусть этот день подарит тебе новые возможности для достижения поставленных целей!';
    }
  },
  { 
    id: 14, 
    orderId: 14,
    categoryId: 3,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + ', делай все возможное каждый день и все твои мечты в скором времени сбудутся!';
    }
  },
  { 
    id: 15, 
    orderId: 15,
    categoryId: 3,
    image: backgroundImages[5],
    getText: (name, isFemale) => {
      return 'Делай что можешь, с тем, что есть у тебя, и в скором времени все твои цели будут достигнуты!';
    }
  },
  { 
    id: 16, 
    orderId: 16,
    categoryId: 0,
    image: backgroundImages[6],
    getText: (name, isFemale) => {
      return name + ', пусть этот день будет для тебя плодотворным и принесет массу положительных эмоций!';
    }
  },
  { 
    id: 17, 
    orderId: 17,
    categoryId: 0,
    image: backgroundImages[7],
    getText: (name, isFemale) => {
      return 'Хорошего тебе сегодня дня, а также побольше позитивных новостей и событий!';
    }
  },
  { 
    id: 18, 
    orderId: 18,
    categoryId: 0,
    image: backgroundImages[8],
    getText: (name, isFemale) => {
      return name + ', настал новый интересный и многообещающий день. Хорошего тебе сегодня настроения!';
    }
  },
  { 
    id: 19, 
    orderId: 19,
    categoryId: 0,
    image: backgroundImages[9],
    getText: (name, isFemale) => {
      return 'Пусть сегодняшний день пройдет интересно и весело, а также принесет тебе новых побед и свершений!';
    }
  },
  { 
    id: 20, 
    orderId: 20,
    categoryId: 3,
    image: backgroundImages[0],
    getText: (name, isFemale) => {
      return name + ', умей оставаться сам' + (isFemale ? 'ой' : 'им') + ' собой и ты не станешь игрушкой в руках своей судьбы!';
    }
  },
  { 
    id: 21, 
    orderId: 21,
    categoryId: 3,
    image: backgroundImages[1],
    getText: (name, isFemale) => {
      return 'Искусство быть счастлив' + (isFemale ? 'ой' : 'ым') + ' заключается в способности находить счастье в простых вещах. Будь счастлив' + (isFemale ? 'а' : '') + '!';
    }
  },
  { 
    id: 22, 
    orderId: 22,
    categoryId: 3,
    image: backgroundImages[2],
    getText: (name, isFemale) => {
      return name + ', если ты чего-то очень хочешь, рано или поздно ты получишь это!';
    }
  },
  { 
    id: 23, 
    orderId: 23,
    categoryId: 3,
    image: backgroundImages[3],
    getText: (name, isFemale) => {
      return name + ', то во что ты хочешь верить, ты способ' + (isFemale ? 'на' : 'ен') + ' достичь!';
    }
  },
  { 
    id: 24, 
    orderId: 24,
    categoryId: 3,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + ', если ты чего-то очень хочешь, рано или поздно ты это получишь!';
    }
  },
  { 
    id: 25, 
    orderId: 25,
    categoryId: 3,
    image: backgroundImages[5],
    getText: (name, isFemale) => {
      return name + ', то во что ты хочешь верить, ты способ' + (isFemale ? 'на' : 'ен') + ' достичь!';
    }
  },
  { 
    id: 26, 
    orderId: 26,
    categoryId: 1,
    image: backgroundImages[6],
    getText: (name, isFemale) => {
      return name + ', все что произойдёт сегодня с тобой, все к лучшему!';
    }
  },
  { 
    id: 27, 
    orderId: 27,
    categoryId: 1,
    image: backgroundImages[7],
    getText: (name, isFemale) => {
      return 'Ты получишь все, о чем мечтаешь и к чему стремишься!';
    }
  },
  { 
    id: 28, 
    orderId: 28,
    categoryId: 1,
    image: backgroundImages[8],
    getText: (name, isFemale) => {
      return name + ', пусть этот день подарит тебе много впечатлений и новых идей!';
    }
  },
  { 
    id: 29, 
    orderId: 29,
    categoryId: 1,
    image: backgroundImages[9],
    getText: (name, isFemale) => {
      return 'Верь в то, что с каждым днём тебе будет становится все лучше и лучше';
    }
  },
  { 
    id: 30, 
    orderId: 30,
    categoryId: 1,
    image: backgroundImages[4],
    getText: (name, isFemale) => {
      return name + ', ты способ' + (isFemale ? 'на' : 'ен') + ' покорить любые высоты, и ты придешь к тому, чего ты ждешь!';
    }
  }
]