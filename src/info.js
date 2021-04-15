const usage = "Usage: crlf-convert [CR|LF|CRLF]";

// const tag = (usageExp, string) => {
//   return String.raw`${string}`
// };
// String.raw`${usage}
const help = 
String.raw`${usage}

Converts text between newline (\n), carriage return (\r), and combined\n
(\r\n) line endings.

Options:

[CR|LF|CRLF]: Desired line ending

    CR is a carriage return character \r (rare)\n
    LF is a line feed character \n (common on Unix and macOS)\n
    CRLF is a combined ending \r\n (common on Windows)

Example:

    cat in.txt | crlf-convert LF > out.txt`;
             

module.exports = {
  help,
  usage
};
