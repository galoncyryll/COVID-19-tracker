import React from "react";
import { Grid, Placeholder, Segment, Menu } from "semantic-ui-react";

const PlaceholderExampleGrid = () => (
  <div className="App">
    <header className="App-header">
      <Menu pointing secondary inverted>
        <Menu.Item name="editorials">
          <a
            href="https://github.com/galoncyryll/COVID-19-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <i className="github icon"></i>
          </a>
        </Menu.Item>
      </Menu>
      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment raised>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line length="medium" />
                <Placeholder.Line length="short" />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
      </Grid>
    </header>
  </div>
);

export default PlaceholderExampleGrid;
