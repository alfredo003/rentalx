import { parse } from 'csv-parse';
import fs from 'fs';
class ImportCategoryUseCase {
  execute(file: Express.Multer.File) {
    const stream = fs.createReadStream(file.path);
    const parseFile = parse();

    parseFile.on("data",async(line)=>{
        console.log(line);
    })
    stream.pipe(parseFile);
  }
}
export { ImportCategoryUseCase };
