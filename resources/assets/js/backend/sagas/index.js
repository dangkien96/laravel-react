import { delay } from "redux-saga";
import { all, call, fork } from "redux-saga/effects";
import { watchGetUser } from "./userSaga";
import {TodoLogin} from "./LoginSaga"

//kết hợp các saga về 1 hàm saga duy nhất
export default function* rootSaga(){
    yield all([
        fork(TodoLogin),
        fork(watchGetUser)
        
    ]);
}