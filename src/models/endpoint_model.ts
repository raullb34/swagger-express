// Swagger endpoint 
import {Model} from './entity_model'; 

interface Security {
    write: string,
    read: string
}

enum MethodColors {
    GET = 'blue',
    POST = 'green',
    PUT = 'light-blue',
    DELETE = 'red',
    UNDEFINED = 'gray'
}
class Parameter {
    public name: string | undefined = '';
    public in: string | undefined = '';
    public description: string | undefined = '';
    public required: boolean = false;
    public type: string | undefined = ''
    public format: string | undefined = '';
}

class Response {
    public statusCode: string | undefined = '';
    public schema: Array<Model> | Model | undefined = []; 
}

class Endpoint {
   public method: string | undefined = '';
   public summary: string | undefined = '';
   public description: string | undefined = '';
   public operationId: string | undefined = '';
   public consumes: string | undefined = '';
   public produces: string | undefined = '';
   public tags: Array<string> | undefined= [];
   public route: string | undefined= '';
   public params: Array<Parameter> | undefined= [];
   public responses: Array<Response> | undefined= [];
   public security: Security | undefined;
   public deprecated: string | undefined = '';

   constructor(method: string | undefined, group: string | undefined, route: string | undefined, params: Array<Parameter> | undefined){
       this.method = method;
       this.route = route;
   };

   getJSON(){
        let json = `${this.route}: {
            ${this.method?.toLowerCase()}: {
                tags: ${this.tags}, 
                summary: ${this.summary},
                description: ${this.description}, 
                operationId: ${this.operationId}, 
                consumes: ${this.consumes}, 
                produces: ${this.produces}, 
                params: ${this.params}, 
                responses: ${this.responses}, 
                security: ${this.security},
                deprecated: ${this.deprecated}
            }
        }`
    }


   getYAML(){

   }
}


export {Endpoint, Parameter, Response}