function brushTeeth() {
  return "Brushing Teeth";
}

function takeShower() {
  return "Taking shower";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Juice", "Tea", "Health Drink"];
  return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
  brushTeeth();
  takeShower();
  eatBreakfast();
  console.log("Go.. Do something");
}

wakeUp();
