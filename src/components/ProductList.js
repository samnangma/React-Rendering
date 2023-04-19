const ProductList = () =>{
    let products = [
        {
            id : 1 ,
            title : "CoCa",
        },
        {
            id:2 ,
            title : "Iphone",
        }
    ]
    return (
        <section >
            <h1 >ProductList</h1>
            {
                products.length > 0 && <h2> Our Product {products[0].title}</h2>
            }


        </section>
    )
}
export default ProductList;