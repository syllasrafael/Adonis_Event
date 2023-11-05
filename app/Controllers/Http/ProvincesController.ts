import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Province from "App/Models/Province"

export default class ProvincesController {
    public async index() {

        const provinces = await Province.all()

        return provinces
       
    }

    public async show(ctx:  HttpContextContract) {
        const id = ctx.request.param('id')
        const provinces = await Province.findOrFail(id)

        return provinces
       
    }

}
