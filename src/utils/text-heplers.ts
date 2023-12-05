function levenshteinDistance(str1: string, str2: string) {
  const len1 = str1.length;
  const len2 = str2.length;

  // Создаем матрицу размером (len1 + 1) x (len2 + 1)
  const matrix = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));

  // Инициализация матрицы для пустых строк
  for (let i = 0; i <= len1; i++) {
    matrix[i][0] = i;
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Заполнение матрицы
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }

  // Расстояние Левенштейна находится в правом нижнем углу матрицы
  return matrix[len1][len2];
}

export function similarity(str1: string, str2: string) {
  const distance = levenshteinDistance(str1, str2);
  // Возвращаем значение сходства на основе расстояния Левенштейна
  return 1 - distance / Math.max(str1.length, str2.length);
}
