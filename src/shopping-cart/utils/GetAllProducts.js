export  const  GetAllProducts = async () => {


try {
    const products = await fetch('https://dummyjson.com/products').then((res)=>res.json());
   return products;

    
} catch (error) {
    throw Error ('Something went wrong ')
}


}