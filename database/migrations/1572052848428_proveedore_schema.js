'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedoreSchema extends Schema {
  up () {
    this.create('proveedores', (table) => {
      table.increments()
      table.string('nombre').notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedores')
  }
}

module.exports = ProveedoreSchema
