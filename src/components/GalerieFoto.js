import react from "react";
import bus from "../img/bus.jpg";
import bus_1 from "../img/bus2.jpg";
import bus_2 from "../img/bus3.jpg";
var i = 0;
class GalerieFoto extends react.Component {
  constructor(props) {
    super(props);
    this.state = { img: bus };
  }
  componentDidMount() {
    setInterval(() => {
      if (i == 0) {
        this.setState({ img: bus_1 });
        i++;
      } else if (i == 1) {
        this.setState({ img: bus_2 });
        i++;
      } else {
        this.setState({ img: bus });
        i = 0;
      }
    }, 10000);
  }
  render() {
    return (
      <div className="galerie-foto">
        <img src={this.state.img} alt="galerie foto" />
      </div>
    );
  }
}
export default GalerieFoto;
