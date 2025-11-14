export class Crypto{
    constructor(){}

    static encrypData(data){
        try {
            const encrypData = btoa(JSON.stringify(data));
            return encrypData;
        } catch (error) {
            return data;
        }
    }

    static decryptData(data){
        try {
            return JSON.parse(atob(data));
        } catch (error) {
            return data;
        }
    }
}