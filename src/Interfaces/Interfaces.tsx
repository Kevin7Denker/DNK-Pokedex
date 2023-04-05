export interface Pokemon {
    id: number;
    name: string;
    image: string;
    attack: number;
    hp: number;
    defense: number;
    speed: number;
}

export interface Data {
    data: {
        id: number;
        name: string;
        sprites: {
            front_default: string;
        };
        stats:{
            0: {
                base_stat: number;
            }
            1: {
                base_stat: number;
            }
            2: {
                base_stat: number;
            }
            5: {
                base_stat: number;
            }
        };      
    }
}