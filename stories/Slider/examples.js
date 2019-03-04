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
