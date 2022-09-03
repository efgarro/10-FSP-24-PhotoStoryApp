import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export class AmbientPics extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        <ResponsiveGridLayout
          className="layout"
          layouts={this.props.layout}
          rowHeight={63}
          cols={{ lg: 12, sm: 6 }}
          breakpoints={{ lg: 768, sm: 480 }}
          isResizable={false}
          // isDraggable={false}
          margin={[25, 25]}
          useCSSTransforms={false}
          compactType={"vertical"}
        >
          {this.props.dataPics.map((photo) => {
            return (
              <div key={photo.id} className={"card--img"}>
                <img src={photo.url} alt={"Pic"} />
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    );
  }
}
