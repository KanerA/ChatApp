export const setLocalStorage =
    (item: any, label: string = "chat-app-user") => localStorage.setItem(label, JSON.stringify(item));