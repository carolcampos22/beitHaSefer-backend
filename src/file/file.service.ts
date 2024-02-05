import { Injectable } from "@nestjs/common";
import { writeFile } from "fs/promises";
import { join } from "path";

@Injectable()
export class FileService {
    async upload(file: Express.Multer.File, path: string) {
        return writeFile(path, file.buffer)
    }
}

//para trocar de servidor (p.e. Amazon), modificar neste arquivo