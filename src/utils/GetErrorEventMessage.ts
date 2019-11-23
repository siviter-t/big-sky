export function getErrorEventMessage(errorEvent: ErrorEvent) {
    return `${errorEvent.message}
file: ${errorEvent.filename}
line: ${errorEvent.lineno}
 col: ${errorEvent.colno}
`;
}
