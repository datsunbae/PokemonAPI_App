
export interface Pokemon {
    id: number,
    name: string,
    url: string,
    sprites: {
        other: {
            dream_world: {
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