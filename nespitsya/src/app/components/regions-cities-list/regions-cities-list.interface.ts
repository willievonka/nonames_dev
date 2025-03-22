export interface ICity {
    name: string;
    routerLink: string;
}

export interface IRegion {
    name: string;
    cities: ICity[];
}

