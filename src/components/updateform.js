import React,{useState, useEffect} from 'react'
import axios from 'axios';

export default function UpdateForm() {
    const [id,setProductId] = useState('');
    const [title,setTitle] = useState('');
    const [brand,setBrand] = useState('');
    const [price,setPrice] = useState('');
    const [des,setDes] = useState('');
    const [url,setUrl] = useState('');
    const [pid,setPid] = useState('-1');
    
    const [products,setproducts] = useState(null);

    const productsData = {
        productId:id,
        title:title,
        brand:brand,
        price:price,
        des:des,
        url:url
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(pid==='-1'){
            axios.post("http://localhost:3002/products",productsData).then((res)=>{
                alert("success")
                setProductId('');
                setTitle('');
                setBrand('');
                setDes('');
                setUrl('');
                setPrice('');
                setPid('');
                fetchData();
        })
    }
    else{
        axios.put(`http://localhost:3002/products/${pid}`,productsData).then((res)=>{
                alert("successfully updated")
                setProductId('');
                setTitle('');
                setBrand('');
                setDes('');
                setUrl('');
                setPrice('');
                setPid('');
                fetchData();
    })
}
 }

    const handleUpdate = (e)=>{
        setProductId(e.productId);
        setTitle(e.title);
        setBrand(e.brand);
        setDes(e.des);
        setUrl(e.url);
        setPrice(e.price);
        setPid(e.id);
    }
    const fetchData = ()=>{
        axios.get("http://localhost:3002/products").then((res)=>setproducts(res.data))
    }

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:3002/products/${id}`).then((res)=>{
            alert("product deleted");
            fetchData();
        })
    }
    useEffect(()=>{
        fetchData()
    },0);

    useEffect(()=>{
      axios.get("http://localhost:3002/products").then((response)=>{
        setproducts(response.data);
      })
    },[]);

    if (!products) return null;


  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-12 bg-white'>
            <div>
            <table class="table table-striped ">
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        products.map((pro,i)=>{ return(
                            <tr>
                            <td>{i+1}</td>
                            <td>{pro.title}</td>
                            <td>{pro.brand}</td>
                            <td>{pro.price}</td>
                            <td><img src={pro.url} height="100"/></td>
                            <td>
                                <button className='btn btn-primary' onClick={()=>{handleUpdate(pro)}}><i className='fa fa-solid fa-edit'></i></button>
                                <button className='btn btn-danger'  onClick={()=>{handleDelete(pro.id)}}><i className='fa fa-solid fa-trash'></i></button>
                            </td>
                            </tr>
                        )
                        })
                    }
                </tbody>
        </table>
        
            </div>
    
    </div>
    <div className=''>
        <form action="" method='post' onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="id">product id</label>
                <input type="text" class="form-control" id="id" value={id}  onChange={(e)=>{setProductId(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="title">title</label>
                <input type="text" class="form-control" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="brand">brand:</label>
                <input type="text" class="form-control" id="brand" value={brand} onChange={(e)=>{setBrand(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="price">price:</label>
                <input type="text" class="form-control" id="price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="des">description:</label>
                <input type="text" class="form-control" id="des" value={des} onChange={(e)=>{setDes(e.target.value)}}/>
            </div>
            <div class="form-group">
                <label for="url">Img url:</label>
                <input type="text" class="form-control" id="url" value={url} onChange={(e)=>{setUrl(e.target.value)}}/>
            </div>
        <button type="submit" class="btn btn-danger">Submit</button>
</form>
        
    </div>
      </div>
      </div>
    </>
  )
}