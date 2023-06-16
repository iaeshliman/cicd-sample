import express from 'express'
import { Request, Response, NextFunction } from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { TokenIndexer } from 'morgan'
import { IncomingMessage, ServerResponse } from 'http'
import { HttpError } from 'http-errors'
import { DIContainer } from './container'

const app = express()

// Middleware
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
    morgan((tokens: TokenIndexer, req: IncomingMessage, res: ServerResponse) =>
        [
            new Date().toISOString(),
            '-',
            'HTTP',
            '-',
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            `${tokens['response-time'](req, res)}ms`,
        ].join(' ')
    )
)

app.get('/', (req: Request, res: Response) =>
    res.send({ ok: true, status: 'healthy' })
)

new DIContainer(app)

app.use((req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next()
    res.status(404).send({
        ok: false,
        error: 'NotFound',
        message: 'page not found',
    })
})
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) return next()
    res.status(err.status ?? 500).send({
        ok: false,
        error: err.name,
        message: err.message,
    })
})

app.listen(8010, () => console.log('server is listening'))
