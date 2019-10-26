'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.post('proveedor/crear','ProveedoreController.create');
Route.get('proveedor/ver','ProveedoreController.index');

Route.post('producto/crear','ProductoController.create');
Route.get('producto/ver','ProductoController.index');

Route.post('inventario/crear','InventarioController.create');
Route.get('inventario/ver','InventarioController.index');