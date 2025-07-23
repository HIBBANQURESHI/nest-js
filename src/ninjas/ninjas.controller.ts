import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
    //GET NINJAS ALL
    @Get()
    getNinjas(@Query('type') type:string){
        return [{type}];
    }

    //GET NINJAS BY ID
    @Get(':id')
    getNinjasById(@Param('id') id: string){
        return {
            id,
        };
    }

    //CREATE NINJAS
    @Post()
    CreateNinjas(@Body() CreateNinjaDto: CreateNinjaDto){
        return {
            name : CreateNinjaDto,
        };
    }

    //UPDATE NINJAS
    @Put(':id')
    UpdateNinjas(@Param('id') id: string ,@Body() UpdateNinjaDto: UpdateNinjaDto ){
        return {
            id,
            name : UpdateNinjaDto,
        };
    }

    //DELETE NINJAS
    @Delete(':id')
    DeleteNinjas(@Param('id') id: string){
        return {
            id,
        };
    }
}


