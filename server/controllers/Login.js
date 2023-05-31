const db = require("../db");



exports.login= async (req,res)=>{
  const email= req.body.email;
  const password= req.body.password;
  	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			
			if (error) throw error;
			
			if (results.length > 0) {
				
				res.status(200).json({msg:"admin logged in" })
			} else {
				res.status(401).json({msg:'Incorrect Username and/or Password!'});
			}			
		
		});
	} else {
		res.status(401).json({msg:'Incorrect Username and/or Password!'});
		
	}
}

