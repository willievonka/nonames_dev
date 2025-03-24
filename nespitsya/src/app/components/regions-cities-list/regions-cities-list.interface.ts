export interface IRegionsCitiesList {
    groups: IRegionsList[];
}

export interface IRegionsList {
    name: string;
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

