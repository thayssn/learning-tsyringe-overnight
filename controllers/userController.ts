import StatusCode from 'http-status-codes';
import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';
import Logger from 'jet-logger';

@Controller('api/users')
export class UserController {
    @Get()
    private list(req: Request, res: Response) {
        Logger.info(req.params.id);
        return res.status(StatusCode.OK).json({
            message: 'list_users',
        });
    }

    @Get(':id')
    private get(req: Request, res: Response) {
        Logger.info(req.params.id);
        return res.status(StatusCode.OK).json({
            message: 'get_called',
        });
    }
}