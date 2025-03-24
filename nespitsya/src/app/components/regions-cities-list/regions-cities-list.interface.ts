export interface IRegionsCitiesList {
    categories: IRegionsList[];
}

export interface IRegionsList {
    category: string;
    regions: IRegion[];
}

export interface IRegion {
    name: string;
    cities: ICity[];
}

export interface ICity {
    name: string;
    routerLink: string;
}

