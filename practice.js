// PROGRAM 4: Background Colors
// ========================================
console.log("\n=== PROGRAM 4: Background Colors ===\n");
function program4_backgrounds() {
const bgRed = '\x1b[41m';
const bgGreen = '\x1b[42m';
const bgYellow = '\x1b[43m';
const bgBlue = '\x1b[44m';
const white = '\x1b[37m';
const black = '\x1b[30m';
const reset = '\x1b[0m';
console.log(`${bgRed}${white} Red Background ${reset}`);
console.log(`${bgGreen}${black} Green Background ${reset}`);
console.log(`${bgYellow}${black} Yellow Background ${reset}`);
console.log(`${bgBlue}${white} Blue Background ${reset}`);
}
program4_backgrounds();

// ========================================
// PROGRAM 5: Menu System
// ========================================
console.log("\n=== PROGRAM 5: Menu System ===\n");
function program5_menuSystem() {
const cyan = '\x1b[36m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const bold = '\x1b[1m';
const reset = '\x1b[0m';
console.log(`${cyan}${bold}╔════════════════════════════╗${reset}`);
console.log(`${cyan}${bold}║ MAIN MENU ║${reset}`);
console.log(`${cyan}${bold}╚════════════════════════════╝${reset}`);
console.log(`${green}1.${reset} Start Game`);
console.log(`${green}2.${reset} Settings`);
console.log(`${green}3.${reset} High Scores`);
console.log(`${yellow}4.${reset} Exit`);
}
program5_menuSystem();

// ========================================
// PROGRAM 6: Progress Bar
// ========================================
console.log("\n=== PROGRAM 6: Progress Bar ===\n");
async function program6_progressBar() {
const green = '\x1b[32m';
const reset = '\x1b[0m';
function showProgress(percent, label) {
const filled = Math.floor(percent / 2);
const empty = 50 - filled;
const bar = '█'.repeat(filled) + '░'.repeat(empty);
process.stdout.write(`\r${green}${bar}${reset} ${percent}% - ${label}`);
}
console.log("Downloading file...");
for (let i = 0; i <= 100; i += 10) {
showProgress(i, "Please wait...");
await new Promise(resolve => setTimeout(resolve, 200));
}
console.log("\n✓ Download complete!");
}
// Uncomment to run (it has a delay):
// program6_progressBar();

// ========================================
// PROGRAM 7: Status Messages
// ========================================
console.log("\n=== PROGRAM 7: Status Messages ===\n");
function program7_statusMessages() {
const green = '\x1b[32m';
const red = '\x1b[31m';
const yellow = '\x1b[33m';
const reset = '\x1b[0m';
function status(message, type) {
const symbols = {
success: `${green}✓${reset}`,
error: `${red}✗${reset}`,
pending: `${yellow}⋯${reset}`
};
console.log(`${symbols[type]} ${message}`);
}
status("Server started successfully", "success");
status("Database connection established", "success");
status("Waiting for user input", "pending");
status("Failed to load plugin", "error");
status("Configuration file missing", "error");
}
program7_statusMessages();


// ========================================
// PROGRAM 8: Timestamp Logger
// ========================================
console.log("\n=== PROGRAM 8: Timestamp Logger ===\n");
function program8_timestampLogger() {
const gray = '\x1b[90m';
const cyan = '\x1b[36m';
const reset = '\x1b[0m';
function log(message) {
const time = new Date().toLocaleTimeString();
console.log(`${gray}[${time}]${reset} ${cyan}${message}${reset}`);
}
log("User logged in");
log("Fetching data from API");
log("Data processing complete");
}
program8_timestampLogger();

// ========================================
// PROGRAM 15: Complete Logger Class
// ========================================
console.log("\n=== PROGRAM 15: Complete Logger Class ===\n");
function program15_completeLogger() {
class Logger {
static colors = {
reset: '\x1b[0m',
gray: '\x1b[90m',
red: '\x1b[31m',
green: '\x1b[32m',
yellow: '\x1b[33m',
blue: '\x1b[34m',
cyan: '\x1b[36m'
};
static timestamp() {
return new Date().toISOString().split('T')[1].split('.')[0];
}
static log(level, color, message) {
const time = `${this.colors.gray}[${this.timestamp()}]${this.colors.reset}`;
const tag = `${color}[${level}]${this.colors.reset}`;
console.log(`${time} ${tag} ${message}`);
}
static info(msg) {
this.log('INFO', this.colors.cyan, msg);
}
static success(msg) {
this.log('SUCCESS', this.colors.green, msg);
}
static warn(msg) {
this.log('WARN', this.colors.yellow, msg);
}
static error(msg) {
this.log('ERROR', this.colors.red, msg);
}
static debug(msg) {
this.log('DEBUG', this.colors.blue, msg);
}
}
// Usage example
Logger.info("Starting application");
Logger.debug("Loading configuration");
Logger.success("Configuration loaded");
Logger.warn("Using default settings");
Logger.error("Could not connect to external service");
}
program15_completeLogger();
console.log("\n\n" + "=".repeat(50));
console.log("All programs completed!");
console.log("=".repeat(50) + "\n");















