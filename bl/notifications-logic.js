import { Notifications, Permissions } from 'expo'
import { getWishByDay } from '../bl/wishes-logic'

export const askNotificationPermission = async () => {
  {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    if (status === 'granted') {
      return true;
    }
  }

  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  return status === 'granted';
}

export const resetBadgeNumber = async () => {
  await Notifications.setBadgeNumberAsync(0);
}

export const cancelNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

export const getNotification = (wish, name, isFemale) => {
  return {
    title: 'Твой Настрой',
    body: wish.getText(name, isFemale),
    android: {
      sound: true
    },
    ios: {
      sound: true,
      title: '',
      count: 1
    }
  }
}

export const getNotificationTime = (day, time) => {
  let date = new Date();

  while (new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() < day) {
    date.setMonth(date.getMonth() + 1);
  }

  date.setDate(day);
  date.setHours(time.lowPart, time.highPart);

  if (date < new Date()) {
    date.setMonth(date.getMonth() + 1);
  }

  return date;
}

export const scheduleNotification = async (notification, day, time) => {
  const schedulingOptions = { time: getNotificationTime(day, time), repeat : 'month' };
  Notifications.scheduleLocalNotificationAsync(notification, schedulingOptions);
}

export const scheduleNotifications = async (categoryIds, name, isFemale, time, infoProvidedDate) => {
  for (let day = 1; day <= 31; day++) {
    let wish = getWishByDay(day, categoryIds, infoProvidedDate);
    let notification = getNotification(wish, name, isFemale);
    await scheduleNotification(notification, day, time);
  }
}

export const resetNotifications = async (categoryIds, name, isFemale, notificationTime, infoProvidedDate) => {
  await cancelNotifications();
  await scheduleNotifications(categoryIds, name, isFemale, notificationTime, infoProvidedDate);
}