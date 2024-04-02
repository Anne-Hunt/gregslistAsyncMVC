import { AccountController } from "./controllers/AccountController.js";
import { HousesController } from "./controllers/HousesController.js"
import { JobsController } from "./controllers/JobsController.js"
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [HomeController],
    view: /*html*/``
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  },
  {
    path: '#/cars',
    controllers: [CarsController],
    view: 'app/views/CarsView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  },
  {
    path: '#/houses',
    controllers: [HousesController],
    view: 'app/views/HousesView.html',
  },
  {
    path: '#/jobs',
    controllers: [JobsController],
    view: 'app/views/JobsView.html',
  }
])




