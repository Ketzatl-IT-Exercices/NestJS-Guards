import {Body, Controller, Get, Post, SetMetadata, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {EcoloGuard} from "./guards/ecolo.guard";
import {GreenVehicles} from "./decorators/green-vehicles.decorator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('destination')
  @UseGuards(EcoloGuard)
  @GreenVehicles('bike', 'foot', 'horse', 'hands')
  travelTo(@Body('vehicle') vehicle: string) {
    console.log("You're inside travelTo method....")
    return `Have a good trip on your ${vehicle}`;
  }
}
