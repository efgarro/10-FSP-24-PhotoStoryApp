import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export class ResourceCards extends React.Component {
  render() {
    return (
      <div className="layout-wrapper">
        {console.log("here goes layoutLg")}
        {console.log(this.props.layoutLg)}
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
              <div key={item.id} className={"card_img"}>
                <img src={item.photo.url} alt={"Pic"} />
              </div>
            );
          })}
        </ResponsiveGridLayout>
      </div>
    );
  }
}
