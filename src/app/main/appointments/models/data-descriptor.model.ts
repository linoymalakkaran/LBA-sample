export interface DataDescriptor {
    order?: Iorder;
    filter?: Ifilter[];
    pagination?: Ipagination;
  }
  
  export interface Ifilter {
    filterBy: string;
    filterType: 'equal' | 'contain';
    value: any;
  }
  
  export interface Iorder {
    orderBy: string;
    orderType: 'asc' | 'desc';
  }
  
  export interface Ipagination {
    pageSize: number;
    pageIndex: number;
  }
  