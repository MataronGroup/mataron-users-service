import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {Router} from "./Controllers/Router";

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: Router[], port: number) {
        this.app = express();
        this.port = port;

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initJSONSchema()
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cors({origin: '*'}));

    }

    private initJSONSchema(){
        this.app.use(this.initJsonSchemaValidator)
    }

    private initJsonSchemaValidator(err : any, req: express.Request, res: express.Response, next : any) {

        let responseData;

        console.log("11111")
        if (err.name === 'JsonSchemaValidation') {
            console.log("2222")
            // Log the error however you please
            // console.log(err.message);
            // logs "express-jsonschema: Invalid data found"

            // Set a bad request http response status or whatever you want
            res.status(400);

            // Format the response body however you want
            responseData = {
               statusText: 'Bad Request',
               jsonSchemaValidation: true,
               validations: err.validations  // All of your validation information
            };

            // Take into account the content type if your app serves various content types
            if (req.xhr || req.get('Content-Type') === 'application/json') {
                res.json(responseData);
            } else {
                // If this is an html request then you should probably have
                // some type of Bad Request html template to respond with
                res.render('badrequestTemplate', responseData);
            }
        } else {
            console.log("333")
            // pass error to next error middleware handler
            next(err);
        }
    }




    private initializeControllers(controllers: Router[]) {
        controllers.forEach((controller: Router) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            // console.log(`App listening on the port ${this.port}`);
        });
    }
}

export default App;