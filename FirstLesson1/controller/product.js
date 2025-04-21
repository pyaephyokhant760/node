let products = [
    {name: "Product 1", price: 100, quantity: 10,color:['red','blue']},
    {name: "Product 2", price: 200, quantity: 20,color:['red','blue']},
    {name: "Product 2", price: 200, quantity: 20,color:['red','blue']},
    {name: "Product 3", price: 300, quantity: 30,color:['red','blue']},
    {name: "Product 4", price: 400, quantity: 40,color:['red','blue']},
    {name: "Product 5", price: 500, quantity: 50,color:['red','blue']},
    {name: "Product 5", price: 500, quantity: 50,color:['red','blue']},
]

const all = (req,res) => {
    res.json({ con:true,msg: "All Products", data: products })
};
const add = (req,res) => {
    let data = products.push(req.body);
    res.json({ con: true,msg: "New Product", data: products });
};
const edit = (req,res) => {
    let name = req.body.name;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let data = products.find((product) => product.name === name);
    if(data) {
      data.name = name;
      data.price = price;
      data.quantity = quantity;
      res.json({ con: true,msg: "Product Updated", data: products })
    }
};
const remove = (req,res) => {
    let name = req.params.name;
    let data = products.find(product => product.name === name);
    if(data) {
      products = products.filter((product) => product.name !== name);
      res.json({ con: true,msg: "Product Deleted", data: products })
    }else{
      next(new Error("Product not found"));
    }
};

module.exports = {
    all,
    add,
    edit,
    remove
}