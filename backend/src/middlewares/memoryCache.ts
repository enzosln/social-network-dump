import { Request, Response, NextFunction, RequestHandler } from 'express';

const cache: { [key: string]: any } = {};

const memoryCache: (duration?: number, verbose?: boolean) => RequestHandler = (duration: number = 3600, verbose: boolean = false) : RequestHandler  => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const key:string = req.originalUrl || req.url;

        if (cache[key]) {
            if (verbose) console.log(`Envoie du cache pour l'adresse : ${key}`);
            res.json(cache[key]);
            return;
        }

        const originalJson : (body:any)=> Response<any> = res.json.bind(res);

        res.json = (body: any): Response<any> => {
            if (verbose) console.log('Enregistrement dans le cache pour l\'adresse ' + key);
            cache[key] = body;
            setTimeout(() => {
                delete cache[key];
            }, duration * 1000);
            return originalJson(body);
        };

        next();
    };
};

export { memoryCache };
