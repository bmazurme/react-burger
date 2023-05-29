export function getFormatedTime(date: string) {
  const today = new Date();
  const targetDate = new Date(date);
  const hours: string = targetDate.getHours().toString().padStart(2, '0');
  const minutes: string = targetDate.getMinutes().toString().padStart(2, '0');

  const msInDay = 24 * 60 * 60 * 1000;
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);
  let val: string | number = (+today - +targetDate) / msInDay;

  if (val === 0) {
    val = 'Сегодня';
  } else if (val === 1) {
    val = 'Вчера';
  } else {
    val = `${val} дн. назад`;
  }

  return `${val}, ${hours}:${minutes}`;
}
