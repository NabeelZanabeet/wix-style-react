export const plainExample = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
        <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </Cell>
      </Layout>
    );
  }
}
`;

export const rangeSlider = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [2,4,6],
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
        <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} />
        </Cell>
      </Layout>
    );
  }
}
`;

export const plainSliderMarks = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Box padding={3}>
        <div style={{ width:'100%'}}>
          <Slider onChange={this.change} min={1} max={10} value={value} />
        </div>
      </Box>
    );
  }
}
`;

export const rangeSliderPushable = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: [2,4,6],
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} pushable={1} />
        </Cell>
      </Layout>
    );
  }
}
`;

export const states = `
class SliderWithState extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 2,
    };
    this.change = this.change.bind(this);
  }

  change(value) { this.setState({ value }) }

  render() {
    const { value } = this.state;
    return (
      <Layout>
        <Cell>
          <Slider onChange={this.change} min={1} max={10} value={value} displayMarks={false} disabled />
        </Cell>
      </Layout>
    );
  }
}
`;
