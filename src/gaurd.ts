{



// type gaurd-------------------------
type Add = (params1: string | number, params2: string | number) =>string | number;
const add: Add = (params1, params2) =>{
    if(typeof params1 === "number" && typeof params2 === "number"){
        return params1 + params2;
    } else{
        return params1.toString() + params2.toString();
    }
}
const result1 = add("3", 4);
// console.log(result1);


//  in gaurd---------------------------------
type NormalUser = {
    name: string;
}
type AdminUser = {
    name: string;
    role: "Admin";
}
const checkUser = (user: NormalUser | AdminUser) =>{
    if("role" in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    } else{
        console.log(`My name is ${user.name} and i am a normal user`)
    }
}
const normalUser: NormalUser = {
    name: "murad",
}
const adminUser: AdminUser = {
    name: "mehedi",
    role: "Admin"
}
checkUser(adminUser)













}