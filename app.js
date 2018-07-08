var express=require("express");
var app =express();

var users=[
	{
	id:1,
	name:"vijay",
	age:20
},
{
	id:2,
	name:"rahul",
	age:20
}
]
app.use(express.static("./public"));
app.get("/users",function(req,res){
	res.json(users);
})
app.get("/users/sort",function(req,res){
	var result = users.sort(function(a,b){
		if(a.name >b.name){
			return 1;
		}
		else{
			return -1;
		}
	})
	res.json(result);
})
app.get("/users/:id",function(req,res){
	var id=req.params.id;
	var result = users.filter(function(user){
		return String(user.id) === id

	})
	res.json(result);
})

app.listen(3000);
console.log("express app running on port 3000")