import {ofType} from "redux-observable";
import {actions} from "../slices/animals.ts";
import {catchError, from, iif, map, mergeMap, of} from "rxjs";
import axios from "axios";

const success = (payload: any) => of(actions.success(payload))

const failure = (payload: any) => of(actions.failure(payload))

const perform = () => from(axios.get('http://localhost:5258/animals'))
    .pipe(map(response => response.data))
    .pipe(mergeMap(response => iif(() => response.success, success(response.data), failure(response.errorMessage))))
    .pipe(catchError(failure))

export default (actions$: any) => actions$
    .pipe(ofType(actions.attempt))
    .pipe(mergeMap(perform))
