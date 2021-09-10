import React = require('react');
import * as shell from 'shelljs';
import {Text} from 'ink';
import * as asciichart from 'asciichart';
import {takeRight} from 'fp-ts/lib/Array';

const heapSizeRegex = /(\d*) MB heap size\)/;

type Props = {
  testCommand: string;
  graphHeight: number;
  graphWidth: number;
};

export const RunAndPlot = ({
  testCommand,
  graphHeight,
  graphWidth,
}: Props) => {
  const [records, setRecords] = React.useState<number[]>([]);
  const [stdout, setStdout] = React.useState<string[]>([]);
  React.useEffect(() => {
    const child = shell.exec(testCommand, {async: true, silent: true});

    // get test heap size from stdout
    // @ts-ignore
    child.stderr.on('data', data => {
      const newRecord = Number((heapSizeRegex.exec(data) || [])[1]);
      if (Number.isInteger(newRecord)) {
        setRecords(_records => [..._records, newRecord]);
      }
      setStdout(arr => [...arr, data]);
    });
  }, []);
  return (
    <>
      <Text>{takeRight(5)(stdout)}</Text>
      <Text>--- n: {records.length } ---</Text>
      {records.length > 0 && (
        <Text>
          {asciichart.plot(takeRight(graphWidth)(records), {
            height: graphHeight,
          })}
        </Text>
      )}
    </>
  );
};
