import {Command, flags} from '@oclif/command';
import {render} from 'ink';
import React = require('react');
import {RunAndPlot} from './RunAndPlot';

class JestHeapGraph extends Command {
  static description = 'plot jest test heap usage graph';

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  };

  static args = [
    {
      name: 'testCommand',
      required: true,
      description:
        "Your command to run jest tests. Don't forget to add flag `--logHeapUsage`.",
      default: 'yarn jest --logHeapUsage',
    },
  ];

  async run() {
    const {args} = this.parse(JestHeapGraph);
    if (!args.testCommand) {
      console.error('missing test command');
      return;
    }

    console.log(`running command "${args.testCommand}"...`)
    render(React.createElement(RunAndPlot, {testCommand: args.testCommand}));
  }
}

export = JestHeapGraph;
