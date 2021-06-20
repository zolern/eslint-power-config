// tslint:disable:no-console

const replDictionary: string =
    'help |json |exit |quit |client |separator |stage |stage beta|stage prod|' +
    '=RDP.Analytics(|RDP.Analytics(|' +
    'explain |explain async |' +
    'explain RDP.Analytics(|explain =RDP.Analytics(|explain async RDP.Analytics(|explain async =RDP.Analytics(|' +
    'async |async explain |' +
    'async RDP.Analytics(|async =RDP.Analytics(|async explain RDP.Analytics(|async explain =RDP.Analytics(|' +
    'json RDP.Analytics(|json =RDP.Analytics(|' +
    'args RDP.Analytics(|args =RDP.Analytics(|payload RDP.Analytics(|payload =RDP.Analytics(';
const completions = replDictionary.split('|');
const search = completions.map((cmd: string): string => cmd.toLowerCase());

export function cmdCompleter(line: string): [string[], string] {
    const linePart = /^(\s*)(.*)/.exec(line);

    if (! linePart) {
        return [null, line];
    }

    const lineWhiteSpace = linePart[1];
    const linePrefix = linePart[2].toLowerCase();

    const hits = completions.filter((cmd: string, idx: number): boolean => {
        return search[idx].startsWith(linePrefix);
    });

    if (! hits.length) {
        return [null, line];
    }

    const retValue = `${lineWhiteSpace}${hits[0]}`;
    if (retValue.toLowerCase() === line.toLowerCase()) {
        return [null, line];
    }

    return [[retValue], line];
}
