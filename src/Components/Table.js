import './table.css'
function Table_cart(){
    const product_details=[
        {Product_information:'2 Classic Collection Garage Door, 2 Entry Door',Cart_name:'Johnson_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Manoj Bajpayee',Expiry:'Expires in 6 days'},
        {Product_information:'10 0 X 10 0 0CAN211CCW1 COMPLETE DOOR INTELLICORE',Cart_name:'Carter_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Steve Benneth...',Expiry:'Expires in 4 days'},
        {Product_information:'Canyon Ridge® Collection Ultra-Grain® Series with Intellicore®',Cart_name:'Michigan_Classic14209123',Shipping_point:'ABC Plant',Created_by:'Steve Benneth...',Expiry:'Expires in 90 days'},
        {Product_information:'Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol - WH.9.G.2J.B..S',Cart_name:'JohnDavid_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Manhatton Cree...',Expiry:'Expires in 90 days'},
        {Product_information:'8 8 X 8 6 CAN211CCW1 Commercial DOOR INTELLICORE',Cart_name:'Chiristopher_Classic14209123',Shipping_point:'ABC Plant',Created_by:'Jamie Sunshine',Expiry:'Expires in 5 days'},
        {Product_information:'1 Classic Collection Garage Door, 1 Entry Door',Cart_name:'Johnson_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Jonathon Peter',Expiry:'Expires in 6 days'},
        {Product_information:'10 0 X 10 0 0CAN211CCW1 COMPLETE DOOR INTELLICORE',Cart_name:'Carter_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Steve Benneth...',Expiry:'Expires in 4 days'},
        {Product_information:'10 0 X 10 0 0CAN211CCW1 COMPLETE DOOR INTELLICORE',Cart_name:'Carter_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Steve Benneth...',Expiry:'Expires in 4 days'},
        {Product_information:'10 0 X 10 0 0CAN211CCW1 COMPLETE DOOR INTELLICORE',Cart_name:'Carter_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Steve Benneth...',Expiry:'Expires in 4 days'},
        {Product_information:'10 0 X 10 0 0CAN211CCW1 COMPLETE DOOR INTELLICORE',Cart_name:'Carter_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Steve Benneth...',Expiry:'Expires in 4 days'},
        {Product_information:'Hardware Special - Stock. W4.HB.8.0.7.0.None.Sol - WH.9.G.2J.B..S',Cart_name:'JohnDavid_Classic14209123',Shipping_point:'Russia Plant',Created_by:'Manhatton Cree...',Expiry:'Expires in 90 days'}
    ]
    return(
        <div className='App'>
            <img id='line' src={"./img/line.png"}/>
            <table className="table table-striped">
                <tbody className='table_container'>
                    <tr>
                        <th>PRODUCT INFORMATION<img src={'./img/down_arrow.png'}/></th>
                        <th>CART NAME<img src={'./img/down_arrow.png'}/></th>
                        <th>SHIPPING POINT <img src={'./img/down_arrow.png'}/></th>
                        <th>CREATED BY <img src={'./img/down_arrow.png'}/></th>
                        <th>EXPIRY <img src={'./img/down_arrow.png'}/></th>
                    </tr>
                    {
                        product_details.map((item,i)=>
                            <tr key={i}>
                            <td>{item.Product_information}</td>
                            <td>{item.Cart_name}</td>
                            <td>{item.Shipping_point}</td>
                            <td>{item.Created_by}</td>
                            <td>{item.Expiry}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}
export default Table_cart;