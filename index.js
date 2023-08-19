#!/usr/bin/env node

const BOLD = "\x1b[1m";
const RESET = "\x1b[0m";
const GREEN = "\x1b[32m";
const BLUE = "\x1b[36m";
const YELLOW = "\x1b[33m";
const REVERSE = "\x1b[7m";
const UNDERSCORE = "\x1b[4m";

function timeStamp() {
  return `${new Date().toISOString()}`;
}

console.log(
  `${BOLD}${GREEN}`,
  ` _    _      _ _                             _     _ _ 
 | |  | |    | | |                           | |   | | |
 | |__| | ___| | | ___    __      _____  _ __| | __| | |
 |  __  |/ _ \\ | |/ _ \\   \\ \\ /\\ / / _ \\| '__| |/ _\` | |
 | |  | |  __/ | | (_) |   \\ V  V / (_) | |  | | (_| |_|
 |_|  |_|\\___|_|_|\\___( )   \\_/\\_/ \\___/|_|  |_|\\__,_(_)
                      |/                                
${RESET}`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} Hi, I'm Akhilesh, a Software Engineer working on Search relevancy.`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} I am writing ${BLUE}Java${RESET} and ${YELLOW}Python${RESET} these days.`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} ${BOLD}Linkedin:${RESET} ${UNDERSCORE}https://www.linkedin.com/in/akhilesh-k/${RESET}`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} ${BOLD}Twitter:${RESET} ${UNDERSCORE}https://twitter.com/akhileshk_/${RESET}`
);
console.log(
  `${timeStamp()} ${BOLD}${GREEN}INFO${RESET} ${BOLD}Github:${RESET} ${UNDERSCORE}https://github.com/akhilesh-k/${RESET}`
);
console.log(
  `${timeStamp()} ${BOLD}${YELLOW}WARN${RESET} ${BOLD}Bye! Feel free to reach out at hello@akhileshk.in${RESET}`
);
