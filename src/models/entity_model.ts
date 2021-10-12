
interface Property {
    name: string,
    type: string,
    format: string
}

class Model {
    public type: string | undefined = '';
    public properties: Array<Property> | undefined = [];
    public xml: string | undefined = '';
}

export {Model}