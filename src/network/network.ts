// import { catchError, map, retry } from "rxjs/operators";
// import { Observable,Subject, throwError } from "rxjs";
import { Observable } from "rxjs";
// const host = '127.0.0.1:3000';

const post = (url: string, request: object):Observable<any> => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 4000;
    xhr.open('post', url, true);
    xhr.send(JSON.stringify(request));
    const observable = Observable.create((observer) => {
        xhr.ontimeout = () => {
            observer.error('请求超时');
        };
        xhr.onreadystatechange =  () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    if(xhr.status === 200) {
                        observer.next(JSON.parse(xhr.responseText))
                        observer.complete();
                    } else {
                        observer.error('系统错误');
                    }
                }  
        }
    });
    return observable;
}

const HTTPS = {
    post
}
export { HTTPS }