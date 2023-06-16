import { Express, Router } from 'express'
import { CalculatorService } from '../calculator/service'
import { CalculatorController } from '../calculator/controller'

export class DIContainer {
    constructor(private readonly application: Express) {
        // Router
        const router = Router()

        // Services
        const calculatorService = new CalculatorService()

        // Controllers
        new CalculatorController(router, calculatorService)

        // Apply
        application.use('/api', router)
    }
}
