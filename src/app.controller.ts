import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {EcoloGuard} from "./guards/ecolo.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('destination')
  @UseGuards(EcoloGuard)
  travelTo(@Body('vehicle') vehicle: string) {
    console.log("You're inside travelTo method....")
    return `Have a good trip with your ${vehicle}`;
  }
}
