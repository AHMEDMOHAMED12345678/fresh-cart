import{t as a,y as r}from"./chunk-KG3CRA4N.js";import{R as i,W as o}from"./chunk-GYQL3Z4S.js";var n=class t{constructor(e){this.httpClient=e}getAllCategories(){return this.httpClient.get(`${r.baseUrl}/api/v1/categories`)}getSpecificCategories(e){return this.httpClient.get(`${r.baseUrl}/api/v1/categories/${e}`)}static \u0275fac=function(p){return new(p||t)(o(a))};static \u0275prov=i({token:t,factory:t.\u0275fac,providedIn:"root"})};export{n as a};
