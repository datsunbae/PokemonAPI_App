
export interface Pokemon {
    id: number,
    name: string,
    url: string,
    sprites: {
        front_default: string,
        other: {
            dream_world: {
                front_default: string
            },
            home: {
                front_default: string
            }
        },
        versions: {
            "generation-v" : {
                "black-white": {
                    animated: {
                        "front_default": string;
                    }
                }
            }
        }
    },
    species: {
        url: string
    },
    types: [{
        type: {
            name: string
        }
    }],


}