// server.js
                  const jsonServer = require('json-server') //1
                  const server = jsonServer.create()//2
                  const router = jsonServer.router('db.json')//3
				  router.db._.id = 'employeeid';//3a
                  const middlewares = jsonServer.defaults()//4 
                  server.use(middlewares) //5

                  // To handle POST, PUT and PATCH 
                  // you need to use a body-parser. Using JSON Server's bodyParser
                 // server.use(jsonServer.bodyParser);

                  //6 Redirect URL's- 
                  // Have all URLS with customurl redirected 
                 // Have all URLS prefixed with a /api
				// Add this before server.use(router)
server.use(jsonServer.rewriter({
  '/customurl/*': '/$1'
}))
                  //7 Ensure every POST has a createdAt date
                  /*server.use((req, res, next) => {
                    if (req.method === "POST") {
                      req.body.createdAt = Date.now();
                    }
                    // Continue to JSON Server router
                    next();
                  });
                  //8 Ensure every POST of an employee, it has lname for sure. Otherwise return 400 and a message
                  server.post("/employees/", function(req, res, next) {
                    const error = validateRequest(req.body);
                    if (error) {
                      res.status(400).send(error);
                    } else {                    
                      next();
                    }
                  });*/
                  server.use(router) 
                  server.listen(5000, () => {//10 using 5000 port
                    console.log('JSON Server is running')
                  })
                  function validateRequest(employee){
                  //9 validate function used by POST above
                      if (!employee.lname) return "lname is required.";
                  }