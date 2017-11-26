import {Category} from './Category'
import {Region} from './Region'

export class Event  {
  constructor(public name:string, public note:string, public date:Date, public category:Category, public local:Region){

  }
 }
