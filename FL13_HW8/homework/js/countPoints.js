const isBigger = (num1, num2) => num1 > num2;

function countPoints(arr) {
  let result = 0;

  arr.forEach((elem) => {
    const firstTeamScore = +elem.slice(0, 1);
    const secondTeamScore = +elem.slice(-1);

    if (isBigger(firstTeamScore, secondTeamScore)) {
      result += 3;
    } else if (firstTeamScore === secondTeamScore) {
      result += 1;
    }
  });

  return result;
}

countPoints([
  '3:1',
  '1:0',
  '0:0',
  '1:2',
  '4:0',
  '2:3',
  '1:1',
  '0:1',
  '2:1',
  '1:0',
]);

countPoints([
  '1:1',
  '1:2',
  '2:0',
  '4:2',
  '0:1',
  '2:3',
  '1:1',
  '0:1',
  '1:1',
  '3:0',
]);
