import React, { Fragment } from 'react';

class Icon {

  private _viewBox: any;
  private _svg: any;

  constructor(viewBox: any, svg: any) {
    this._viewBox = viewBox;
    this._svg = <Fragment> { svg } </Fragment>;
  }

  public set viewBox(viewBox: any){
    this._viewBox = viewBox;
  }

  public get viewBox(): any{
    return this._viewBox;
  }

  public set svg(svg: any){
    this._svg = svg;
  }

  public get svg(): any {
    return this._svg;
  }

} 
export default Icon;
