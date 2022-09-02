function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash === hash);
      if (objectInCache) {
        console.log("Из кэша: " + objectInCache.result);
        return "Из кэша: " + objectInCache.result;
      }

      let result = func.call(this,...args);
      cache.push({hash, result});
      if (cache.length > 5) {
        cache.shift();
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
    return wrapper;
  }

  const addThree = (a, b, c) => a + b + c;
  const upgradedAddThree = cachingDecoratorNew(addThree);
  upgradedAddThree(1, 2, 3); // вычисляем: 6
  upgradedAddThree(1, 2, 3); // из кэша: 6
  upgradedAddThree(2, 2, 3); // вычисляем: 7
  upgradedAddThree(3, 2, 3); // вычисляем: 8
  upgradedAddThree(4, 2, 3); // вычисляем: 9
  upgradedAddThree(5, 2, 3); // вычисляем: 10
  upgradedAddThree(6, 2, 3); // вычисляем: 11   (при этом кэш для 1, 2, 3 уничтожается)
  upgradedAddThree(1, 2, 3); // вычисляем: 6  (снова вычисляем, кэша нет)



function debounceDecoratorNew(f, ms) { 
  let timerId = null;
  nextCall = false;

  function wrapper(...args) {
    if (nextCall == false) {
      f.apply(this,...args);
      nextCall = true;
      return;
    }

    clearTimeout(timerId);

    timerId = setTimeout(()=> {
      nextCall = false;
      f.apply(this,...args)
    }, ms)
    }
    return wrapper;
  }

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); 


function debounceDecorator2(debounceDecoratorNew) {
 let count = 0;
 function wrapper(...args) {
  wrapper.history = count++;
  return  debounceDecoratorNew.call(this, ...args);
 }
 return wrapper; 
}
