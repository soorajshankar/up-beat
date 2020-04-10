const def = {
    fg: '#4DA1FF',
    fg_inactive: '#D1DBE2',
    txt_primary: '#000000',
    txt_sec: '#9da1a5',
    bg: '#F2F2F2',
    bg_card: '#fff',
    bg_hover: '#EFF2F7',
    bg_select: '#d1e6fb',
};
const Themes: IThemes = {
    default: def,
    dark: {
        fg: '#4DA1FF',
        fg_inactive: '#D1DBE2',
        txt_primary: '#000000',
        txt_sec: '#9da1a5',
        bg: 'black',
        bg_card: '#fff',
        bg_hover: '#EFF2F7',
        bg_select: '#d1e6fb',
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
