import { rejects } from "assert";
import fs, { read } from "fs";
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const book = 'The Wind in the Willows (introductory fragment).txt';

const readStream = fs.createReadStream(path.join(__dirname, '/files', book), {highWaterMark: 1024});
const writeStream = fs.createWriteStream(path.join(__dirname, 'files', 'book_copy.txt'));
console.log(readStream.readableHighWaterMark)

// FIRST TASK

    // readStream.on('data', (chunk) => {
    //     writeStream.write('Introductory fragment, copying is prohibited!' + '\n')
    //     writeStream.write(chunk)
    // })

// FIRST TASK
// -----------
// SECOND TASK

    // const log = (question) => {
    //     process.stdout.write(question)
    //         process.stdin.on("data", answer => {
    //             process.stdout.write(`Your data: ${answer}` + "\n", () => process.exit())
    //     })}
    // log('Write something: ')

// SECOND TASK
// -----------
// THIRD TASK

    // const correctAnswers = ['Y', 'y', 'yes', 'YES', 'N', 'n', 'no', 'NO']

    // const ask = (question) => {
    //     return new Promise((resolve, reject) => {
    //       process.stdout.write(question);
    //       process.stdin.once('data', (data) => {
    //         const input = data.toString().trim().toLowerCase();
    //         if (correctAnswers.includes(input)) {
    //           resolve(input);
    //         } else {
    //           reject(new Error('Invalid input. Please enter either Y, y, yes, YES, N, n, no, or NO.'));
    //         }
    //       });
    //     });
    //   };
      
    //   (async () => {
    //     try {
    //       const AnswerSCSS = await ask('Do you want to use SCSS? - ');
    //       const AnswerESLint = await ask('Do you want to use ESLint? - ');
    //       process.stdout.write(`SCSS: ${AnswerSCSS} \nESLint: ${AnswerESLint}`);
    //       process.exit();
    //     } catch (error) {
    //       process.stderr.write(error.message);
    //       process.exit(1);
    //     }
    //   })();

// THIRD TASK
      
      
      
      
      
      
      