export const customFetch = (items) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(items)
            reject("Error")
        },2000)
    }
)}
export default customFetch;

