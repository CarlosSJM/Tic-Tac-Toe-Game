import {canvas, CELL_SIZE} from './draw';
import {from, fromEvent} from 'rxjs';
import {map} from 'rxjs/operators';

//register all click on the Canvas return X and Y
const click$ = fromEvent(canvas, 'click').pipe(
    map(val => {return{
        x: Math.floor(val.offsetX / CELL_SIZE),
        y: Math.floor(val.offsetY /CELL_SIZE)
    }})
)

export const userMove$ = click$.pipe(
    //filter valid moves
)