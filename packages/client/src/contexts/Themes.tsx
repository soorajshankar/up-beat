const def = {
    fg: '#4DA1FF',
    fg_inactive: '#D1DBE2',
    bg: '#F2F2F2',
    bg_card: '#fff',
};
const Themes: IThemes = {
    default: def,
    dark: {
        fg: '#4DA1FF',
        fg_inactive: '#D1DBE2',
        bg: 'black',
        bg_card: '#fff',
    },
};

export interface IThemes {
    [key: string]: ITheme;
}
export type ITheme = typeof def;
export interface IThemed {
    theme: ITheme;
}

export default Themes;
