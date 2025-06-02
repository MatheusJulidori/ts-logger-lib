enum LogLevel {
	INFO = "INFO",
	WARN = "WARN",
	ERROR = "ERROR",
}

function timestamp(): string {
	const now = new Date();
	const pad = (n: number) => n.toString().padStart(2, "0");
	const YYYY = now.getFullYear();
	const MM = pad(now.getMonth() + 1);
	const DD = pad(now.getDate());
	const hh = pad(now.getHours());
	const mm = pad(now.getMinutes());
	const ss = pad(now.getSeconds());
	return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}

function formatMessage(level: LogLevel, message: string): string {
	return `\n ### [${timestamp()}] - [${level}] ### \n ${message} \n`;
}

/**
 * Log an informational message
 */
export function logInfo(message: string): void {
    console.log(formatMessage(LogLevel.INFO, message));
  }
  
  /**
   * Log a warning message
   */
  export function logWarn(message: string): void {
    console.warn(formatMessage(LogLevel.WARN, message));
  }
  
  /**
   * Log an error message, optionally with stack trace
   */
  export function logError(message: string, error?: unknown): void {
    if (error instanceof Error) {
      console.error(formatMessage(LogLevel.ERROR, `${message}\n${error.stack}`));
    } else if (error) {
      console.error(formatMessage(LogLevel.ERROR, `${message} | ${JSON.stringify(error)}`));
    } else {
      console.error(formatMessage(LogLevel.ERROR, message));
    }
  }