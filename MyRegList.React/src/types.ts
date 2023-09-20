export interface IBadge {
    text?: string;
    filled?: boolean;
}
export interface ButtonInterface {
    text: string;
    type: string;
    href: string;
    filled?: boolean;
    icon?: JSX.Element;
}

export interface ICardInterFace {
    indicator?: string;
    badge?: IBadge;
    image?: string;
    title: string;
    subtitle?: string;
    body: string;
    btn: ButtonInterface;
}

export interface IItem {
    id: number;
    description: string;
    imageUrl?: string;
    name: string;
    type: string;
}
