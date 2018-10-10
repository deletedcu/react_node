var notificationSystem = null

export const initializeNotificationSystem = (notificationSystemRef) => {
  notificationSystem = notificationSystemRef
}

export const showNotification = (message, level) => {
  notificationSystem.addNotification({
    message: message,
    level: level,
  })
}
