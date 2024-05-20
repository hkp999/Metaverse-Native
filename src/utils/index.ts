import { getGenericPassword } from 'react-native-keychain'

// 延迟加载
export const delayLoading = (time: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time);
  })
}


// 时间转换函数
export function calculateTimeDifference(inputTime: string): string {

  // 将输入时间转换为 Date 对象
  const inputDate: Date = new Date(inputTime);

  // 获取当前时间
  const now: Date = new Date();

  // 计算时间差（毫秒）
  const timeDiff: number = now.getTime() - inputDate.getTime();

  // 计算时间差对应的年、月、天、小时和分钟
  const seconds: number = Math.floor(timeDiff / 1000);
  const minutes: number = Math.floor(seconds / 60);
  const hours: number = Math.floor(minutes / 60);
  const days: number = Math.floor(hours / 24);
  const months: number = Math.floor(days / 30);
  const years: number = Math.floor(months / 12);

  // 返回结果
  if (years > 0) {
    return years + " 年前";
  } else if (months > 0) {
    return months + " 个月前";
  } else if (days > 0) {
    return days + " 天前";
  } else if (hours > 0) {
    return hours + " 小时前";
  } else if (minutes > 0) {
    return minutes + " 分钟前";
  } else {
    return seconds + " 秒前";
  }
}


export function formatCurrentDateTime() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function parseJsonIfNecessary(str: any) {
  try {
    // 尝试解析字符串为JSON
    const json = JSON.parse(str);
    // 如果解析成功，直接返回解析后的JSON
    return json;
  } catch (error) {
    // 解析失败，将字符串封装为数组
    return str;
  }
}

// 获取token
export const getToken = async () => {
  try {
    const credentials = await getGenericPassword();
    if (credentials) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Error retrieving token:', error);
  }
};

// 防抖函数
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return function(this: any, ...args: Parameters<T>): void {
    const context = this;

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}
