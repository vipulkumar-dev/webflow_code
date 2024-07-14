const chokidar = require("chokidar");
const { exec } = require("child_process");
const path = require("path");

// Replace 'YOUR_FOLDER_PATH' with the path to your folder
const folderPath = "./webflow";

// Replace 'YOUR_COMMAND' with the command you want to execute
// const command = `git commit -a -m "Updated New"`;
const commands = [
  `git commit -a -m "Updated New" && git push && npm run deploy`,
];

const watcher = chokidar.watch(folderPath, {
  ignored: /^\./, // ignore dotfiles
  persistent: true,
});

console.log(`Watching folder: ${folderPath}`);

watcher.on("add", handleChange).on("change", handleChange);

function handleChange(filePath) {
  console.log(`File ${filePath} has changed`);

  // Execute the command in the specified folder

  commands.forEach((command) => {
    executeCommand(command);
  });
}

function executeCommand(command) {
  exec(command, { cwd: "./" }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error}`);
      return;
    }
    console.log(`Command output: ${stdout}`);
  });
}
