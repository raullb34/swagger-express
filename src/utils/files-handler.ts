import * as fs from 'fs';
import {Endpoint} from '../models/endpoint_model'

function loadRouteFiles(routes: Array<string>){

}

function openFile(uri: string){
    const fileContent = fs.readFileSync(uri, 'utf-8');
    return fileContent;
}

function isRoute(){

}

function isFile(){

}

function processFile(data: string){
    let endpoints = [];
    let comments = data.match(/\/\*([\s\S]+?)\*\//g);
    if (comments != null) {
        for (const comment of comments) {
            let [method, group, route, params] = extractDataFromComment(comment);
            endpoints.push(new Endpoint(method as string, group as string, route as string, params as Array<string>));
            console.log(endpoints);
        } 
    } else {
        
    }
}

function extractDataFromComment(c: string){
    let method: string = '', group: string = '', route: string = '';
    let params: Array<string> = [];
    method = c.match(/\@route ([\s\S]+?) \//g)![0].split(' ')[1].replace(/\n/g, '');
    group =  c.match(/\@group ([\s\S]+?)\n/g)![0].split(' ')[1].replace(/\n/g, '');
    route = c.match(/\@route ([\s\S]+?) \//g)![0].split(' ')[2].replace(/\n/g, '');

    return [method, group, route, params]
}


export {processFile}