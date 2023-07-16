import path from 'path';
import { promises as fs } from 'fs';

export async function GET(res: any, req: any) {
  const jsonDirectory = path.join(process.cwd());

  try {
    const fileContents = await fs.readFile(jsonDirectory + '/text.xml', 'utf8');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(fileContents);
  } catch (error) {
    console.log(error);
    res.statusCode = 500;
    res.end();
  }
}


