import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
export declare class NinjasController {
    getNinjas(type: string): {
        type: string;
    }[];
    getNinjasById(id: string): {
        id: string;
    };
    CreateNinjas(CreateNinjaDto: CreateNinjaDto): {
        name: CreateNinjaDto;
    };
    UpdateNinjas(id: string, UpdateNinjaDto: UpdateNinjaDto): {
        id: string;
        name: UpdateNinjaDto;
    };
    DeleteNinjas(id: string): {
        id: string;
    };
}
