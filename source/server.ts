import http from 'http';
import express, {Express} from 'express';
import morgan from 'morgan';
import routes from './routes/index';
const router: Express = express();

// Logging?
router.use(morgan('dev')); // todo - how does this work

// Parse request
router.use(express.urlencoded({extended: false})); // todo: why?

// Take care of json data
router.use(express.json());

// Rules for the API
router.use((req, res, next) => {
    //CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    //set CORS headers
    res.header(
        'Access-Control-Allow-Headers',
        'origin, XRequested-With, Content-Type, Accept, Authorization'
    ); // wtf is this?

    // set CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }
    next();
});

// Routes
router.use('/', routes);

// Error handling
router.use((req, res, next) => {
    const error = new Error('Not Found');
    return res.status(400).json({
        message: error.message,
    });
});

// Server
const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 3000;
httpServer.listen(PORT, () =>
    console.log(`The server is listening on port: ${PORT}`)
);
