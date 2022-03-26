import StatusCode from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import Logger from 'jet-logger';

@Controller('api/pies')
export class PieController {
    @Get()
    private list(req: Request, res: Response) {
        Logger.info(req.params.id);
        return res.status(StatusCode.OK).json({
            message: 'list_pies',
        });
    }
}