export default {
  bubbleSort: function bubbleSort(arr) {
    let aniData = [];
    for (let j = 0; j < arr.length - 1; j++) {
      for (let i = 0; i < arr.length - 1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
        let data = {
          data: [...arr],
          select: i,
        };
        aniData.push(data);
      }
    }
    return aniData;
  },
  selectSort(arr) {
    let aniData = [];
    let min = 0,
      index = 0;
    for (let i = 0; i < arr.length; i++) {
      min = i;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] < arr[min]) min = j;
        aniData.push({ data: [...arr], select: j, min: min, index: i });
      }
      [arr[min], arr[index]] = [arr[index], arr[min]];
      index = index + 1;
      aniData.push({ data: [...arr], select: index, min: min, index: i });
    }
    return aniData;
  },
};
