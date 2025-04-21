let json = [
    { name: "John", age: 30, country: "USA" },
    { name: "Jane", age: 25, country: "Canada" },
    { name: "Mike", age: 35, country: "UK" },
    { name: "Sara", age: 28, country: "Australia" },
    { name: "Tom", age: 40, country: "Germany" },
  ];


const all = (req,res) => {
    res.json({
        message: "All users",
        data: json,
        status: true,
    })
}
const add = (req,res) => {
    let data = json.push(req.body);
    res.json({ con: true, msg: "New User", data: json });
}

const edit = (req,res) => {
    let name = req.body.name;
    let age = req.body.age;
    let country = req.body.country;
    let data = json.find((user) => user.name === name);
    if (data) {
      data.age = age;
      data.country = country;
      res.json({ con: true, msg: "User Updated" ,data: json});
    } else {
      new new Error("User not found")();
    }
}

module.exports = {
    all,
    add,
    edit
}