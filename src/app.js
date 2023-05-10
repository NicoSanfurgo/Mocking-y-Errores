import express from "express";
import handlebars from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import initializePassport from './config/passport.config.js';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import { __dirname } from './utils.js';
import indexRoutes from './routes/index.routes.js';
import config from './config/config.js';
import errorHandler from './middleware/error-management/index.js';

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}))
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/public`))
app.use(cookieParser());
initializePassport();
app.use(passport.initialize());
app.use('/', indexRoutes);
app.use(errorHandler);
app.listen(config.PORT, () => console.log(`Server up in port ${config.PORT}`))

