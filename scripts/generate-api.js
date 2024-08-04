import {
  generateApi
} from "swagger-typescript-api";
import path from "path";
import fs from "fs/promises";
import ts from "typescript";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { program } from "commander";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const apiGateway = process.env.API_GATEWAY;
const apiKey = process.env.API_KEY;

program.name("network-generator");

const generateService = async (service) => {
  const { serviceName } = service;
  await generateApi({
    name: `${serviceName}.ts`,
    apiClassName: `${serviceName}_API`,
    baseApiUrl: apiGateway,
    url: `${apiGateway}openapi.yaml`,
    output: path.resolve(__dirname, "../__generated__"),
    templates: path.resolve(__dirname, "./templates"),
    httpClientType: "axios",
    silent: true,
    generateResponses: true,
    generateRouteTypes: true,
    extractRequestParams: true,
    extractRequestBody: true,
    extractResponseBody: true,
    extractEnums: true,
    disableStrictSSL: true,
    jsFiles: false,
    customConfig: {
      apiKey
    }

  });
  console.log(`🟢\tКлиент для ${serviceName} сгенерирован успешно!`);
};

program.action(async () => {
  const output = path.resolve(__dirname, "../__generated__");

  await fs.rm(output, { recursive: true, force: true });

  await generateService({ serviceName: "NoisemonService" });

  await makeReexportFile(output);
});

const makeReexportFile = async (directoryPath) => {
  const files = await fs.readdir(directoryPath);
  const jsFiles = files.filter((file) => path.extname(file) === ".ts");
  // jsFiles [ 'NoisemonService.ts' ]
  const reexports = jsFiles
    .map(
      (file) =>
        `import { ${file.split(".")[0]} } from './${file.split(".ts")[0]}';`
    )
    .join("\n");

  const apiInstances = jsFiles
    .map((file) => `${file.split(".")[0].toLowerCase()}: ${file.split(".")[0]}`)
    .join(", ");
  const service = `const API = { ${apiInstances} };`;
  const exportString = "export default API";
  console.log('service: ', service);
  const result = [reexports, service, exportString].join("\n");

  await fs.writeFile(path.join(directoryPath, "index.ts"), result);

  const generatedFiles = await fs.readdir(
    path.join(__dirname, "../__generated__")
  );

  const program = ts.createProgram({
    rootNames: generatedFiles.map((file) =>
      path.join(__dirname, "../__generated__/", file)
    ),
    options: {
      target: ts.ScriptTarget.ES2018,
      module: ts.ModuleKind.ES2020,
      declaration: true,
    },
  });

  const emitResult = program.emit();
  if (emitResult.emitSkipped) {
    console.error(`Compilation failed`);
  }
  const exitCode = emitResult.emitSkipped ? 1 : 0;
  console.log(exitCode === 0 ? "\n✅\tГотово" : "\n❌\tОшибка");
  process.exit(exitCode);
};

program.parse();
