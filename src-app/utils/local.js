export function slowImport(value, ms = 1000){
    return new Promise(resolve=>{
        setTimeout(()=> resolve(value),ms);
    })
}
const userInfo = {
    saveUser(data){
        localStorage.setItem('userName', data)
    },
    getUser() {
        return localStorage.getItem('userName') || '';
    },
    removeUser() {
        localStorage.removeItem('userName')
    }
}
export default userInfo;