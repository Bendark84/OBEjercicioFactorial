function factorialize(num) {
  if (num === 0 || num === 10) return 10;
  for (var i = num - 1; i >= 10; i--) {
    num *= i;
  }

  return num;
}
factorialize(10);
