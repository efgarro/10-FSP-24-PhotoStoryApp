import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export class ResourceCards extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        <ResponsiveGridLayout
          className="layout"
          layouts={this.props.layoutLg}
          rowHeight={63}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          breakpoints={{ lg: 992 /*, md: 996, sm: 768, xs: 480, xxs: 0 */ }}
          isResizable={true}
          isDraggable={true}
          margin={[25, 25]}
          useCSSTransforms={false}
          compactType={"vertical"}
        >
          {this.props.resourceList.map((item) => {
            return (
              <div
                key={item.id}
                className={`${
                  item.photo.orientation === "lan" ? "card-lan" : "card-por"
                } card`}
              >
                <img src={item.photo.url} alt={"Pic"} />
                <h4 className="card--title">{item.name}</h4>
                <p className="card--description">
                {`${item.description.substring(0, 150)}...`} </p>
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    );
  }
}
