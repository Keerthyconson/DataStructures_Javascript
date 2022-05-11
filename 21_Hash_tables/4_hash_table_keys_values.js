class HashTable {
  constructor(arrayLen) {
    this.keyMap = new Array(arrayLen);
  }

  _hash(str) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(str.length, 100); i++) {
      let temp = str.toLowerCase().charCodeAt(i) - 96;
      total = total * PRIME + temp;
    }

    return total % this.keyMap.length;
  }

  set(key, value) {
    //   Hash the key
    let hashedIndex = this._hash(key);
    let data = [key, value];
    let tempArray;
    if (!this.keyMap[hashedIndex]) {
      tempArray = [];
      tempArray.push(data);
    } else {
      tempArray = this.keyMap[hashedIndex];
      tempArray.push(data);
    }
    this.keyMap[hashedIndex] = tempArray;
    return this.keyMap;
  }

  get(key) {
    let hashedIndex = this._hash(key);
    let tempArray = this.keyMap[hashedIndex];

    for (let i = 0; i < tempArray.length; i++) {
      let temp = tempArray[i];
      if (temp[0] === key) {
        return temp;
      }
    }
    return "undefined";
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      let temp = this.keyMap[i];
      for (let j = 0; j < temp.length; j++) {
        let key = temp[j][0];
        keys.push(key);
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let ar of this.keyMap) {
      let temp = ar;
      for (let ele of temp) {
        let value = ele[1];
        values.push(value);
      }
    }

    return values;
  }
}

let key = "Deep Grape";
let value = "#5C07A3";

let ht = new HashTable(2);

let result = ht.set(key, value);

key = "Salmon";
value = "#FA8072";
result = ht.set(key, value);

key = "DarkRed";
value = "#8B0000";
result = ht.set(key, value);

key = "PaleVioletRed";
value = "#DB7093";
result = ht.set(key, value);

key = "LightYellow";
value = "#FFFFE0";
result = ht.set(key, value);

key = "DarkKhaki";
value = "#BDB76B";
result = ht.set(key, value);

key = "DarkOrchid";
value = "#9932CC";
result = ht.set(key, value);

console.log(ht.keys());
console.log(ht.values());
