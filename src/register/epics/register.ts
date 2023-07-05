import {ofType} from "redux-observable";
import {actions} from "../../slices/user.ts";
import {catchError, from, iif, map, mergeMap, of} from "rxjs";
import axios from "axios";
import {register} from "../actions.ts";

const success = (payload: any) => of(actions.success(payload.data))

const failure = (payload: any) => of(actions.failure(payload.errorMessage))

const execute = ({payload}: any) =>
    from(axios.post('http://localhost:5258/register', payload))
        .pipe(map(response => response.data))
        .pipe(mergeMap(response => iif(() => response.success, success(response), failure(response))))
        .pipe(catchError(failure))

export default (actions$: any) => actions$
    .pipe(ofType(register))
    .pipe(mergeMap(execute))
