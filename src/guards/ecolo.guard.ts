import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {Reflector} from "@nestjs/core";

@Injectable()
export class EcoloGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {
    }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const greenVehicles = this.reflector.get<string[]>('greenVehicles', context.getHandler())
        const req = context.switchToHttp().getRequest();
        console.log("\n You're Inside Ecologuard....  / greenVehicles", greenVehicles);
        const isGreenVehicle = greenVehicles.includes(req.body.vehicle)
        if (!isGreenVehicle) {
            return false;
        } else {
            return true;
        }
    }
}
