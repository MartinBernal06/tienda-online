import { Crypto } from './crypto.service.js'

export class CookiesService{
    constructor(){}


    static setCookie(name, value, days){
        const encryptData = Crypto.encryptData(value);

        let expires = '';

        if(days){
            const date = new Date();
            date.setTime(date.getTime() + days*24*60*60*1000 );
            expires = `; expires=${date.toUTCString()}`
        }

        document.cookie = `${name}=${encryptData}${expires}; path=/`
    }

    static getCookie(name){
        const cookies = document.cookie.split(';')
        
        for(const cookie of cookies){
            const [cookieNAme, cookieValue] = cookie.split('=');
            if(cookieNAme.trim() === name){
                return Crypto.decryptData(cookieValue.trim())
            }
        }

        return null;
    }
}