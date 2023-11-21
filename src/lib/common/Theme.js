export const getTheme = () => {
    return localStorage.getItem('theme')
}

export const storeTheme = (theme) => {
    localStorage.setItem('theme', theme)
}