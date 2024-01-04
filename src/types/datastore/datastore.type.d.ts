
export namespace Datastore {  

    export interface Record {
        id: string;
        new1: string;
        xata: Xata;
    }
      
    export  interface Xata {
        createdAt: string;
        updatedAt: string;
        version: number;
    }
    export interface InitialState {
      records?: Datastore.Record[];
    }
   
    
    const initialState: InitialState = {
      records: [],
    };
    
  }
  